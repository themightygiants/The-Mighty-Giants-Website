import Link from "next/link";
import VideoGrid from "@/app/components/VideoGrid";
import { brand, mediaEmbeds } from "@/lib/brand";

export default function MediaPage() {
  return (
    <>
      <section className="section-wrap pb-10">
        <h1 className="poster-title text-4xl sm:text-5xl">Media</h1>
        <p className="mt-4 max-w-3xl text-base text-mightyWhite/90 sm:text-lg">
          A future-friendly content hub for episodes, clips, social drops, and new collaborations.
        </p>
      </section>

      <section className="section-wrap pt-2">
        <h2 className="poster-title text-3xl sm:text-4xl">Twitch</h2>
        <p className="mt-3 text-sm text-mightyWhite/80 sm:text-base">
          Watch live sets and streams on the official channel.
        </p>
        <div className="mt-6">
          <Link
            href={brand.social.twitch}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded border border-mightyYellow/70 px-5 py-3 text-sm font-black uppercase tracking-wider text-mightyYellow hover:bg-mightyYellow hover:text-mightyBlack"
          >
            Watch us on Twitch
          </Link>
        </div>
      </section>

      <section className="section-wrap pt-2">
        <h2 className="poster-title text-3xl sm:text-4xl">YouTube</h2>
        <p className="mt-3 text-sm text-mightyWhite/80 sm:text-base">
          Videos below are embedded directly from the official The Mighty Giants channel.
        </p>
        <div className="mt-6">
          <Link
            href={brand.social.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded border border-mightyYellow/70 px-5 py-3 text-sm font-black uppercase tracking-wider text-mightyYellow hover:bg-mightyYellow hover:text-mightyBlack"
          >
            Watch us on YouTube
          </Link>
        </div>
        <div className="mt-8">
          <VideoGrid embeds={mediaEmbeds.slice(0, 3)} />
        </div>
      </section>

      <section className="section-wrap pt-2">
        <h2 className="poster-title text-3xl sm:text-4xl">Social Media</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={brand.social.youtube}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-mightyYellow/70 px-5 py-3 text-sm font-black uppercase tracking-wider text-mightyYellow hover:bg-mightyYellow hover:text-mightyBlack"
          >
            YouTube
          </Link>
          <Link
            href={brand.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-mightyYellow/70 px-5 py-3 text-sm font-black uppercase tracking-wider text-mightyYellow hover:bg-mightyYellow hover:text-mightyBlack"
          >
            Instagram
          </Link>
          <Link
            href={brand.social.tiktok}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-mightyYellow/70 px-5 py-3 text-sm font-black uppercase tracking-wider text-mightyYellow hover:bg-mightyYellow hover:text-mightyBlack"
          >
            TikTok
          </Link>
        </div>
      </section>
    </>
  );
}
