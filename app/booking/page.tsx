import BookingForm from "@/app/components/BookingForm";

export default function BookingPage() {
  return (
    <>
      <section className="section-wrap pb-10">
        <h1 className="poster-title text-4xl sm:text-5xl">Book The Mighty Giants</h1>
        <p className="mt-4 max-w-3xl text-base uppercase tracking-wider text-mightyWhite/80 sm:text-lg">
          Interviews • DJ Events • Live Shows • Podcast Appearances
        </p>
      </section>

      <section className="section-wrap pt-2">
        <div className="mx-auto max-w-3xl">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
