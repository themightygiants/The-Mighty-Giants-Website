const FORMSUBMIT_EMAIL = "the.mighty.giants.mgmt@gmail.com";

type Props = {
  /** Full URL to redirect after successful submit (e.g. https://yoursite.com/booking?success=1) */
  redirectAfterSubmit: string;
};

export default function BookingForm({ redirectAfterSubmit }: Props) {
  const action = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;

  return (
    <form
      action={action}
      method="POST"
      className="grid grid-cols-1 gap-4 rounded-xl border border-mightyYellow/35 bg-zinc-900/60 p-6 shadow-poster"
    >
      <input type="hidden" name="_subject" value="Booking request — The Mighty Giants" />
      <input type="hidden" name="_next" value={redirectAfterSubmit} />
      <input type="hidden" name="_template" value="table" />
      {/* Honeypot — FormSubmit; leave empty */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="name" className="mb-1 block text-xs font-bold uppercase tracking-wide">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded border border-mightyYellow/35 bg-black px-3 py-2 text-mightyWhite outline-none ring-mightyYellow transition focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-bold uppercase tracking-wide">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded border border-mightyYellow/35 bg-black px-3 py-2 text-mightyWhite outline-none ring-mightyYellow transition focus:ring-2"
        />
      </div>
      <div>
        <label
          htmlFor="organization"
          className="mb-1 block text-xs font-bold uppercase tracking-wide"
        >
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="w-full rounded border border-mightyYellow/35 bg-black px-3 py-2 text-mightyWhite outline-none ring-mightyYellow transition focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="eventType" className="mb-1 block text-xs font-bold uppercase tracking-wide">
          Event Type
        </label>
        <select
          id="eventType"
          name="eventType"
          className="w-full rounded border border-mightyYellow/35 bg-black px-3 py-2 text-mightyWhite outline-none ring-mightyYellow transition focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select event type
          </option>
          <option value="interview">Interview</option>
          <option value="dj-event">DJ Event</option>
          <option value="live-show">Live Show</option>
          <option value="podcast-appearance">Podcast Appearance</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-bold uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded border border-mightyYellow/35 bg-black px-3 py-2 text-mightyWhite outline-none ring-mightyYellow transition focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex justify-center rounded bg-mightyYellow px-6 py-3 text-sm font-black uppercase tracking-wider text-mightyBlack transition hover:opacity-90"
      >
        Send Booking Request
      </button>
      <p className="text-xs uppercase tracking-wide text-mightyWhite/60">
        Submissions are sent to <span className="text-mightyYellow">{FORMSUBMIT_EMAIL}</span>. First
        time only: check that inbox for a FormSubmit activation link if delivery does not arrive.
      </p>
    </form>
  );
}
