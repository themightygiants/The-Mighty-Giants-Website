import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/lib/brand";

type Props = {
  character: Character;
  linkToAbout?: boolean;
};

export default function CharacterCard({ character, linkToAbout = true }: Props) {
  const pos = character.imageObjectPosition ?? "center 20%";
  const card = (
    <article className="group overflow-hidden rounded-lg border border-mightyYellow/35 bg-zinc-900/70 shadow-poster transition hover:-translate-y-1">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          style={{ objectPosition: pos }}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black uppercase tracking-wide text-mightyYellow">
          {character.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-mightyWhite/80">{character.shortBio}</p>
      </div>
    </article>
  );

  if (!linkToAbout) {
    return card;
  }

  return (
    <Link href="/about" className="block focus:outline-none">
      {card}
    </Link>
  );
}
