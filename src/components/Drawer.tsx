"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import { Button } from "./ui/button";

import { useCallback, useEffect, useRef, useState } from "react";

const LIMIT = 10;

const DrawerComponent = ({ name }: { name: string }) => {
  const [pokemon, setPokemon] = useState<any>(null);

  const [allMoves, setAllMoves] = useState<any[]>([]);

  const [visibleMoves, setVisibleMoves] = useState<any[]>([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

      const data = await res.json();

      setPokemon(data);

      setAllMoves(data.moves);
    };

    fetchPokemon();
  }, [name]);

  useEffect(() => {
    const loadMoves = async () => {
      if (allMoves.length === 0) return;

      setLoading(true);

      const start = 0;

      const end = page * LIMIT;

      const currentMoves = allMoves.slice(start, end);

      const detailedMoves = await Promise.all(
        currentMoves.map(async (move) => {
          const res = await fetch(move.move.url);

          return await res.json();
        }),
      );

      setVisibleMoves(detailedMoves);

      setLoading(false);
    };

    loadMoves();
  }, [page, allMoves]);

  const lastMoveRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (visibleMoves.length < allMoves.length) {
            setPage((prev) => prev + 1);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, visibleMoves, allMoves],
  );

  return (
    <Drawer modal direction="right">
      <DrawerTrigger asChild>
        <Button>See more</Button>
      </DrawerTrigger>

      <DrawerContent className="overflow-hidden">
        <DrawerHeader>
          <DrawerTitle>Moves</DrawerTitle>

          <DrawerDescription>{pokemon?.name?.toUpperCase()}</DrawerDescription>
        </DrawerHeader>

        <div className="px-4 overflow-y-auto h-full">
          {visibleMoves.map((move, index) => {
            const isLast = index === visibleMoves.length - 1;

            return (
              <div
                key={move.id}
                ref={isLast ? lastMoveRef : null}
                className="border rounded-xl p-3 mb-2"
              >
                <h2 className="capitalize font-bold">
                  {move.name.replaceAll("-", " ")}
                </h2>

                <p className="text-sm text-muted-foreground">
                  Power: {move.power || "N/A"}
                </p>
              </div>
            );
          })}

          {loading && <p className="text-center py-4">Loading...</p>}
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
