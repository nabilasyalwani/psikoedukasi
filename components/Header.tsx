"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { chapters } from "@/lib/content";
import { LuArrowRight, LuMenu, LuX } from "react-icons/lu";
import Logo from "./Logo";
import { ScrollLink } from "./ScrollLink";

const nav = [
  { href: "/", label: "Beranda" },
  ...chapters.map((c) => ({ href: c.href, label: c.nav })),
];

export default function Header() {
  const raw = usePathname() || "/";
  const pathname = raw.length > 1 ? raw.replace(/\/$/, "") : raw;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[1.5px] border-ink bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo />
          <span className="leading-tight">
            <span className="block font-display text-[1.05rem] font-extrabold">
              Psiko<span className="text-orange">edukasi</span>
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-1 rounded-full border-[1.5px] border-ink bg-white p-1 lg:flex"
        >
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-[0.8rem] font-semibold transition-all active:scale-95 ${
                  active ? "bg-ink text-white" : "hover:bg-cream"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ScrollLink
            href="/langkah-layanan#layanan"
            className="btn btn-orange py-2! max-sm:px-3.5!"
            onClick={() => setOpen(false)}
          >
            Cari Bantuan <LuArrowRight />
          </ScrollLink>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border-[1.5px] border-ink bg-white lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <LuX size={18} /> : <LuMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Navigasi seluler"
          className="fade-up border-t-[1.5px] border-ink bg-cream px-4 pb-4 lg:hidden"
        >
          <ul className="mt-3 grid gap-2">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-2xl border-[1.5px] border-ink px-4 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
                      active ? "bg-ink text-white" : "bg-white"
                    }`}
                  >
                    {n.label} <LuArrowRight />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
