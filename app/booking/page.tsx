import { headers } from "next/headers";
import BookingForm from "@/app/components/BookingForm";

type SearchParams = Promise<{ success?: string | string[] }>;

export default async function BookingPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const successRaw = sp.success;
  const showSuccess =
    successRaw === "1" || (Array.isArray(successRaw) && successRaw.includes("1"));

  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const redirectAfterSubmit = `${proto}://${host}/booking?success=1`;

  return (
    <>
      {showSuccess ? (
        <section className="section-wrap pb-0 pt-8">
          <div
            className="rounded-lg border border-mightyYellow/50 bg-zinc-900/80 px-4 py-4 text-center shadow-poster sm:px-6"
            role="status"
          >
            <p className="text-sm font-black uppercase tracking-wide text-mightyYellow">
              Request sent
            </p>
            <p className="mt-2 text-sm text-mightyWhite/90">
              Thanks — we received your booking message. We&apos;ll get back to you soon.
            </p>
          </div>
        </section>
      ) : null}

      <section className="section-wrap pb-10">
        <h1 className="poster-title text-4xl sm:text-5xl">Book The Mighty Giants</h1>
        <p className="mt-4 max-w-3xl text-base uppercase tracking-wider text-mightyWhite/80 sm:text-lg">
          Interviews • DJ Events • Live Shows • Podcast Appearances
        </p>
      </section>

      <section className="section-wrap pt-2">
        <div className="mx-auto max-w-3xl">
          <BookingForm redirectAfterSubmit={redirectAfterSubmit} />
        </div>
      </section>
    </>
  );
}
