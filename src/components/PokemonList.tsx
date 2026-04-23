import { useEffect, useState } from "react";
import getColorsByType, {
  pokemonTypes,
  type PokemonType,
} from "@/helper/PokemonTypes";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "./ui/skeleton";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import getToggleVariants from "@/helper/ToggleVariants";

const LIMIT = 20;

export default function PokemonList() {
  const [page, setPage] = useState(1);
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [type, setTypes] = useState<typeof pokemonTypes>([]);

  const fetchPokemon = async (pageNumber: number) => {
    setLoading(true);

    const offset = (pageNumber - 1) * LIMIT;

    const res =
      type.length === 0
        ? await fetch(
            `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=${offset}`,
          )
        : await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
    const data = await res.json();
    setTotal(data.count ?? data.pokemon.length);

    const detailed =
      type.length === 0
        ? await Promise.all(
            data.results.map(async (poke: any) => {
              const res = await fetch(poke.url);
              return res.json();
            }),
          )
        : await Promise.all(
            data.pokemon.map(async (poke: any) => {
              const res = await fetch(poke.pokemon.url);
              return res.json();
            }),
          );
    setPokemon(detailed);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(page);
  }, [page, type]);
  const getVisiblePages = () => {
    const pages = [];

    let start = Math.max(page - 2, 1);
    let end = Math.min(page + 2, totalPages);

    if (page <= 3) {
      start = 1;
      end = Math.min(5, totalPages);
    }

    if (page >= totalPages - 2) {
      start = Math.max(totalPages - 4, 1);
      end = totalPages;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const totalPages = Math.ceil(total / LIMIT);
  return (
    <div>
      {pokemonTypes.length > 0 && (
        <div className="flex gap-2 mb-4">
          <ToggleGroup
            type="single"
            spacing={2}
            value={type[0] || ""}
            onValueChange={(value) => {
              if (!value) {
                setTypes([]);
              } else {
                setTypes([value as PokemonType]);
              }
            }}
          >
            {pokemonTypes.map((t) => (
              <ToggleGroupItem
                variant={getToggleVariants(t)}
                onClick={() => {
                  setTypes((prev) =>
                    prev.includes(t)
                      ? prev.filter((v) => v !== t)
                      : [...prev, t],
                  );
                }}
                key={t}
                value={t}
              >
                {t.toUpperCase()}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      )}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <Card className="w-full max-w-xs">
              <CardHeader>
                <Skeleton className="h-4" />
                <Skeleton className="h-4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="aspect-video w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {pokemon.map((poke) => (
            <Card key={poke.id}>
              <CardHeader>
                <CardTitle>{poke.name.toUpperCase()}</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>
                  <div className="flex gap-2">
                    {poke.types.map((type: { type: { name: string } }) => (
                      <Badge
                        key={type.type.name}
                        style={{
                          backgroundColor: getColorsByType(type.type.name),
                        }}
                      >
                        {type.type.name.toUpperCase()}
                      </Badge>
                    ))}
                  </div>
                </CardAction>
              </CardHeader>
              <CardContent>
                {poke.sprites.front_default && (
                  <img src={poke.sprites.front_default} alt={poke.name} />
                )}
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <Pagination className="mt-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className={`cursor-pointer ${page === 1 ? "opacity-50 pointer-events-none" : ""}`}
            />
          </PaginationItem>

          {page > 3 && (
            <>
              <PaginationItem>
                <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}

          {getVisiblePages().map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                onClick={() => setPage(p)}
                isActive={page === p}
                className="cursor-pointer"
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {page < totalPages - 2 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => setPage(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
