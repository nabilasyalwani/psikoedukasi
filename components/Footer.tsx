import Link from "next/link";
import { DISCLAIMER, SITE_DESC, footerLinks } from "@/lib/content";
import { LuArrowRight } from "react-icons/lu";
import Logo from "./Logo";
import { ScrollLink } from "./ScrollLink";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-10 sm:px-8 md:grid-cols-[1.2fr_1fr_1.1fr]">
        <div>
          <div className="group flex w-fit items-center gap-2.5">
            <Logo />
            <span className="font-display text-lg font-extrabold">
              Psiko<span className="text-butter">edukasi</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {SITE_DESC}
          </p>
        </div>

        <div>
          <p className="eyebrow text-butter">Jelajahi</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/80">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="link-underline hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border-[1.5px] border-white/80 bg-ink-soft p-6">
          <p className="font-display text-xl font-extrabold leading-tight">
            Butuh seseorang untuk diajak bicara?
          </p>
          <p className="mt-2 text-sm text-white/70">
            Lihat daftar layanan psikologi di Makassar dan Sulawesi Selatan.
          </p>
          <ScrollLink
            href="/langkah-layanan#layanan"
            className="btn btn-orange mt-5 py-2"
          >
            Lihat layanan <LuArrowRight />
          </ScrollLink>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/15 px-4 py-6 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-8">
        <p>© 2026 NabilaSyalwani</p>
      </div>
    </footer>
  );
}
