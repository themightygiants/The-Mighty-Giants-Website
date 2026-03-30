import Link from "next/link";
import { brand } from "@/lib/brand";

const socialLinks = [
  { href: brand.social.youtube, label: "YouTube" },
  { href: brand.social.instagram, label: "Instagram" },
  { href: brand.social.tiktok, label: "TikTok" }
];

export default function Footer() {
  return (
    <footer className="border-t border-mightyYellow/30 bg-black">
      <div className="section-wrap flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-black uppercase tracking-wide text-mightyYellow">
            {brand.name}
          </p>
          <p className="mt-1 text-sm text-mightyWhite/75">
            Sesame Street meets hip-hop culture meets DJ flyers.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-mightyYellow/70 px-3 py-2 text-xs font-bold uppercase tracking-wider text-mightyYellow transition hover:bg-mightyYellow hover:text-mightyBlack"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="border-t border-mightyYellow/20 px-4 py-4 text-center text-xs uppercase tracking-widest text-mightyWhite/60">
        Copyright {new Date().getFullYear()} The Mighty Giants
      </p>
    </footer>
  );
}
