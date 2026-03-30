import AboutCharacterBios from "./AboutCharacterBios";

export default function AboutPage() {
  return (
    <>
      <section className="section-wrap pb-10">
        <h1 className="poster-title text-4xl sm:text-5xl">Who We Are</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-mightyWhite/90 sm:text-lg">
          The Mighty Giants is a hip-hop puppet media project blending comedy, interviews, DJ
          culture, and storytelling. Every episode is built to entertain while honoring creative
          communities and the people behind the music.
        </p>
      </section>

      <AboutCharacterBios />
    </>
  );
}
