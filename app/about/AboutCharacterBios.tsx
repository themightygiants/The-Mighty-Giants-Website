"use client";

import Image from "next/image";
import { useState } from "react";
import CharacterBioModal from "@/app/components/CharacterBioModal";
import { characters } from "@/lib/brand";

export default function AboutCharacterBios() {
  const [selected, setSelected] = useState<(typeof characters)[number] | null>(null);

  return (
    <>
      <section className="section-wrap pt-2">
        <h2 className="poster-title text-3xl sm:text-4xl">Character Bios</h2>
        <p className="mt-3 max-w-2xl text-sm text-mightyWhite/70">
          Tap a character to open their full profile, backstory, and details.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {characters.map((character) => {
            const pos = character.imageObjectPosition ?? "center 20%";
            return (
              <button
                key={character.name}
                type="button"
                onClick={() => setSelected(character)}
                className="rounded-lg border border-mightyYellow/35 bg-zinc-900/70 p-3 text-left shadow-poster transition hover:border-mightyYellow hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-mightyYellow"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: pos }}
                    sizes="(max-width: 768px) 45vw, 180px"
                  />
                </div>
                <h3 className="mt-3 text-base font-black uppercase tracking-wide text-mightyYellow">
                  {character.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-mightyWhite/85 line-clamp-3">
                  {character.shortBio}
                </p>
                <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-wider text-mightyYellow/80">
                  View profile →
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <CharacterBioModal character={selected} onClose={() => setSelected(null)} />
    </>
  );
}
