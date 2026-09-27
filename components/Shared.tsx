import Link from "next/link";
import { useId, type ReactNode } from "react";
import type { Tone } from "@/lib/content";
import { LuArrowRight } from "react-icons/lu";
import { PiSparkleFill } from "react-icons/pi";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function ChapterBadge({ no, tone }: { no: string; tone: Tone }) {
  return (
    <span className="chip">
      <span
        className={`tone-${tone} grid size-6 place-items-center rounded-full border-[1.5px] border-ink text-[0.65rem] font-bold`}
      >
        {no}
      </span>
      Bab {no} dari 05
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  aside,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className={`eyebrow ${dark ? "text-butter" : ""}`}>{eyebrow}</p>
        <h2
          className={`mt-3 text-3xl leading-[1.05] font-extrabold sm:text-4xl ${dark ? "text-white" : ""}`}
        >
          {title}
        </h2>
      </div>
      {aside && (
        <div
          className={`max-w-xs text-sm ${dark ? "text-white/70" : "text-muted"}`}
        >
          {aside}
        </div>
      )}
    </div>
  );
}

export function NextChapter({
  no,
  title,
  href,
  tone,
  art,
}: {
  no: string;
  title: string;
  href: string;
  tone: Tone;
  art: ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Link
          href={href}
          className={`tone-${tone} brutal lift group relative flex items-center justify-between gap-6 overflow-hidden rounded-[28px] px-6 py-8 sm:px-10`}
        >
          <div className="relative z-10">
            <p className="text-[0.7rem] font-bold tracking-[0.16em] uppercase">
              Bab berikutnya · {no}
            </p>
            <p className="mt-2 font-display text-2xl leading-tight font-extrabold sm:text-3xl">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden h-28 w-40 sm:block">{art}</div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-1">
              <LuArrowRight size={20} />
            </span>
          </div>
        </Link>
      </Container>
    </section>
  );
}

export function SpinningBadge({
  text = "RUANG AMAN • TANPA MENGHAKIMI •",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const pathId = useId();
  return (
    <div className={`size-28 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="spin-slow absolute inset-0"
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0"
          />
        </defs>
        <circle
          cx="60"
          cy="60"
          r="58"
          fill="#fff"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
        />
        <text
          fontSize="11"
          fontWeight="700"
          letterSpacing="2.4"
          fill="var(--color-ink)"
        >
          <textPath href={`#${pathId}`} textLength="270" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto grid size-11 place-items-center rounded-full border-[1.5px] border-ink bg-orange">
        <PiSparkleFill className="size-4" color="var(--color-ink)" />
      </span>
    </div>
  );
}
