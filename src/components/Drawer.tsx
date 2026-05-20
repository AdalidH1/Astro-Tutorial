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
import { useEffect, useState } from "react";
import type { Pokemon } from "@/types/pokemon";

const DrawerComponent = ({ name }: { name: string }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    };
    fetchData();
  }, [setPokemon]);
  return (
    <Drawer modal direction="right">
      <DrawerTrigger asChild>
        <Button>See more</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Moves</DrawerTitle>
          <DrawerDescription>
            {pokemon?.name.toLocaleUpperCase()}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>

          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
