"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/media", label: "Media" },
  { href: "/merch", label: "Merch" },
  { href: "/booking", label: "Booking" }
];

function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname === "";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname() ?? "";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mightyYellow/35 bg-mightyBlack/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/TMG_main_logo_flat-wht-1k.png"
            alt="The Mighty Giants logo"
            width={120}
            height={48}
            className="h-auto w-20 sm:w-24"
            priority
          />
        </Link>

        <button
          type="button"
          className="rounded border border-mightyYellow px-3 py-2 text-sm font-bold uppercase tracking-wide text-mightyYellow md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-bold uppercase tracking-wider transition ${
                  active
                    ? "text-mightyYellow underline decoration-2 underline-offset-8"
                    : "text-mightyWhite hover:text-mightyYellow"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {menuOpen ? (
        <nav className="border-t border-mightyYellow/25 bg-mightyBlack px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-bold uppercase tracking-wider ${
                    active ? "text-mightyYellow" : "text-mightyWhite"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
