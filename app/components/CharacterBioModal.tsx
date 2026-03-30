"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import type { Character } from "@/lib/brand";

type Props = {
  character: Character | null;
  onClose: () => void;
};

export default function CharacterBioModal({ character, onClose }: Props) {
  useEffect(() => {
    if (!character) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [character, onClose]);

  if (!character) {
    return null;
  }

  const pos = character.imageObjectPosition ?? "center 20%";
  const titleId = `bio-title-${character.name.replace(/[^a-zA-Z0-9]+/g, "-")}`;
  const ig = character.instagramUrl;
  const igLabel = ig
    ? ig.replace(/^https?:\/\/(www\.)?instagram\.com\//i, "@").replace(/\/$/, "")
    : null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="lightbox-backdrop absolute inset-0 bg-black/85 backdrop-blur-md"
        aria-label="Close profile"
        onClick={onClose}
      />
      <div
        className="lightbox-panel relative z-[101] max-h-[min(90vh,900px)] w-full max-w-3xl overflow-y-auto rounded-xl border-2 border-mightyYellow/60 bg-zinc-950 shadow-[0_0_0_1px_rgba(255,212,0,0.15),0_25px_80px_rgba(0,0,0,0.65)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-[102] rounded border border-mightyYellow/60 bg-black/90 px-3 py-1 text-xs font-black uppercase tracking-wider text-mightyYellow transition hover:bg-mightyYellow hover:text-mightyBlack"
        >
          Close
        </button>

        <div className="grid gap-0 sm:grid-cols-[minmax(0,280px)_1fr]">
          <div className="lightbox-image-wrap relative aspect-[3/4] w-full min-h-[220px] overflow-hidden sm:min-h-[320px] sm:rounded-l-xl">
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
              style={{ objectPosition: pos }}
              sizes="(max-width: 640px) 100vw, 280px"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
              aria-hidden
            />
          </div>

          <div className="lightbox-copy p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-mightyWhite/50">Character profile</p>
            <h2
              id={titleId}
              className="mt-2 text-3xl font-black uppercase tracking-wide text-mightyYellow"
            >
              {character.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mightyWhite/90">{character.shortBio}</p>

            {ig ? (
              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-mightyYellow">
                  Instagram
                </p>
                <Link
                  href={ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-sm font-semibold text-mightyWhite underline decoration-mightyYellow/60 underline-offset-4 transition hover:text-mightyYellow hover:decoration-mightyYellow"
                >
                  {igLabel ?? "Instagram"}
                </Link>
              </div>
            ) : null}

            <h3 className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-mightyYellow">
              Description
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mightyWhite/85">{character.longBio}</p>

            <h3 className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-mightyYellow">
              Backstory
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mightyWhite/85">{character.backstory}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
