import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/brand";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-mightyYellow/30">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/tmg-intro-web.mp4" type="video/mp4" />
          <source src="/videos/tmg-intro.mp4" type="video/mp4" />
        </video>
        <div className="-z-10 absolute inset-0 bg-black/60" />
        <div className="section-wrap py-24 text-center sm:py-32">
          <Image
            src="/images/logos/TMG_main_logo_yellow-txt_blk-1k.png"
            alt="The Mighty Giants logo"
            width={600}
            height={220}
            className="mx-auto h-auto w-full max-w-lg"
            priority
          />
          <h1 className="mt-8 text-4xl font-black uppercase leading-tight tracking-wide text-mightyYellow sm:text-6xl">
            THE MIGHTY GIANTS
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-mightyWhite/90">
            A hip-hop inspired puppet crew celebrating DJ culture, music, art, and community.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.youtube.com/@TheMightyGiants"
              target="_blank"
              rel="noreferrer"
              className="rounded bg-mightyYellow px-6 py-3 text-sm font-black uppercase tracking-wider text-mightyBlack"
            >
              Watch on YouTube
            </Link>
            <Link
              href="/booking"
              className="rounded border border-mightyYellow px-6 py-3 text-sm font-black uppercase tracking-wider text-mightyYellow"
            >
              Book Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <h2 className="poster-title text-3xl sm:text-4xl">What We Do</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-mightyYellow/35 bg-zinc-900/70 p-6 shadow-poster"
            >
              <h3 className="text-xl font-black uppercase tracking-wide text-mightyYellow">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mightyWhite/85">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-0 text-center">
        <h2 className="poster-title text-3xl sm:text-4xl">Meet The Crew</h2>
        <h3 className="mt-4 text-lg font-black uppercase tracking-wide text-mightyYellow sm:text-2xl">
          Woeski Martin, Silent John, Jayski One, R2D3, &amp; Shandroid
        </h3>
        <p className="mx-auto mt-5 max-w-5xl text-sm leading-relaxed text-mightyWhite/85 sm:text-base">
          A collective of artists and puppeteers from Los Angeles, seamlessly blending hip hop
          culture with unique puppeteering performances. Originally hailed as some kids who loved
          everything boom bap in their previous iteration, they have matured with the realization
          that their creative boundaries are limitless, and inclusive of all types of music they
          appreciate. The group is composed of muralists, DJs, music producers, MCs, illustrators,
          graphic designers, and dancers, each represented by a unique puppet alter ego. Primarily
          active on Twitch, The Mighty Giants entertain audiences with live DJ shows and
          puppeteering acts while also bringing original music and skits to life in live
          performances on stage.
        </p>
        <Image
          src="/images/headshots/crew-center.webp"
          alt="Meet the crew"
          width={600}
          height={600}
          className="mx-auto mt-8 h-auto w-full max-w-md rounded-lg border border-mightyYellow/35 object-cover object-center shadow-poster"
        />
      </section>

      <section className="section-wrap pt-0">
        <h2 className="poster-title text-3xl sm:text-4xl">Check Us Out</h2>
        <div className="mt-8 overflow-hidden rounded-lg border border-mightyYellow/35 bg-black shadow-poster">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://youtube.com/embed/YKFk8Qs2kyI?rel=0&autoplay=1&mute=1&loop=1&playlist=YKFk8Qs2kyI&controls=1"
              title="The Mighty Giants featured video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
