"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Track = {
  title: string;
  src: string;
  buyUrl: string;
};

const tracks: Track[] = [
  {
    title: "The Mighty Giants - PTI",
    src: "/music/the-mighty-giants-pti.mp3",
    buyUrl: "https://themightygiants.bandcamp.com/"
  },
  {
    title: "TMG Intro Short Version",
    src: "/music/tmg-intro-short-version.mp3",
    buyUrl: "https://themightygiants.bandcamp.com/"
  }
];

export default function MusicPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = useMemo(() => tracks[selectedIndex], [selectedIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.pause();
    setIsPlaying(false);
    setCurrentTime(0);
  }, [selectedIndex]);

  const onTogglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }
    audio.pause();
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const safe = Number.isFinite(time) ? Math.floor(time) : 0;
    const mins = Math.floor(safe / 60);
    const secs = safe % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <section className="section-wrap pb-10">
        <h1 className="poster-title text-4xl sm:text-5xl">Music</h1>
        <p className="mt-4 max-w-3xl text-base text-mightyWhite/90 sm:text-lg">
          Preview tracks here, then support the full release on Bandcamp.
        </p>
      </section>

      <section className="section-wrap pt-2">
        <div className="rounded-xl border-2 border-mightyYellow/60 bg-gradient-to-b from-zinc-800 to-zinc-950 p-6 shadow-poster sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-black uppercase tracking-widest text-mightyYellow sm:text-2xl">
              TMG Radio
            </h2>
          </div>

          <div
            className="rounded-lg border border-mightyYellow/40 bg-black/70 p-4"
            onContextMenu={(event) => event.preventDefault()}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-mightyWhite/60">Now Playing</p>
            <p className="mt-2 text-lg font-black uppercase tracking-wide text-mightyYellow">
              {currentTrack.title}
            </p>
            <audio
              ref={audioRef}
              key={currentTrack.src}
              preload="metadata"
              src={currentTrack.src}
              controlsList="nodownload noplaybackrate"
              onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
              onEnded={() => setIsPlaying(false)}
              className="hidden"
            />
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={onTogglePlay}
                className="rounded border border-mightyYellow bg-mightyYellow px-4 py-2 text-xs font-black uppercase tracking-widest text-mightyBlack"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <div className="text-xs font-bold uppercase tracking-wider text-mightyWhite/80">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={Math.min(currentTime, duration || 0)}
              onChange={(event) => {
                const audio = audioRef.current;
                if (!audio) {
                  return;
                }
                const nextTime = Number(event.currentTarget.value);
                audio.currentTime = nextTime;
                setCurrentTime(nextTime);
              }}
              className="mt-4 w-full accent-mightyYellow"
            />
            <p className="mt-3 text-xs uppercase tracking-wide text-mightyWhite/60">
              Preview only. Purchase and full support on Bandcamp.
            </p>
            <Link
              href={currentTrack.buyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded border border-mightyYellow/70 px-4 py-2 text-xs font-black uppercase tracking-wider text-mightyYellow hover:bg-mightyYellow hover:text-mightyBlack"
            >
              Buy on Bandcamp
            </Link>
          </div>

          <div className="mt-8 border-t border-mightyYellow/25 pt-6">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-mightyWhite/50">Playlist</p>
            <ul className="flex flex-col">
              {tracks.map((track, index) => {
                const isActive = index === selectedIndex;
                const num = `${String(index + 1).padStart(2, "0")}.`;
                return (
                  <li key={track.src} className="border-b border-mightyYellow/15 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className={`flex w-full items-baseline gap-4 py-3 text-left transition sm:gap-8 ${
                        isActive ? "text-mightyYellow" : "text-mightyWhite/90 hover:text-mightyYellow"
                      }`}
                    >
                      <span className="shrink-0 font-mono text-sm tabular-nums text-mightyWhite/50 sm:text-base">
                        {num}
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-semibold uppercase tracking-wide sm:text-base">
                        {track.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link
            href="https://themightygiants.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded border border-mightyYellow bg-black px-5 py-3 text-sm font-black uppercase tracking-widest text-mightyYellow hover:bg-mightyYellow hover:text-mightyBlack"
          >
            Visit Official Bandcamp
          </Link>
        </div>
      </section>
    </>
  );
}
