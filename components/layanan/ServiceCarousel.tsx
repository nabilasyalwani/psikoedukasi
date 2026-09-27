"use client";

import { useCallback, useEffect, useState } from "react";
import { services, type Service } from "@/lib/content";
import {
  LuChevronLeft,
  LuChevronRight,
  LuInstagram,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

const telHref = (phone: string) =>
  `tel:+62${phone.replace(/\D/g, "").replace(/^0/, "")}`;

function Card({ s, active }: { s: Service; active: boolean }) {
  return (
    <article
      className={`tone-${s.tone} flex h-full flex-col overflow-hidden rounded-3xl border-[1.5px] border-ink`}
      style={{ boxShadow: `8px 8px 0 var(--color-${s.tone})` }}
    >
      <div className="flex items-center justify-between p-5">
        <span className="grid size-12 place-items-center rounded-full border-[1.5px] border-ink bg-white font-display font-extrabold">
          {s.initials}
        </span>
        <span className="chip">{s.badge}</span>
      </div>
      <div className="flex flex-1 flex-col bg-white p-5">
        <h3 className="text-xl leading-tight font-extrabold">{s.name}</h3>
        <p className="mt-3 flex gap-2 text-xs text-muted">
          <LuMapPin size={14} className="mt-0.5 shrink-0" />
          {s.address}
        </p>
        <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
          <LuPhone size={14} className="shrink-0" />
          {s.phone}
        </p>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
          <a
            href={telHref(s.phone)}
            tabIndex={active ? 0 : -1}
            className="btn btn-dark justify-center px-3! py-2.5! text-xs! shadow-none!"
          >
            <LuPhone size={13} /> Hubungi
          </a>
          <a
            href={`https://instagram.com/${s.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={active ? 0 : -1}
            className="btn btn-light justify-center overflow-hidden px-3! py-2.5! text-xs!"
            title={`@${s.instagram}`}
          >
            <LuInstagram size={13} className="shrink-0" />
            <span className="truncate">@{s.instagram}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ServiceCarousel() {
  const [idx, setIdx] = useState(1);
  const n = services.length;
  const go = useCallback((i: number) => setIdx((i + n) % n), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!(document.activeElement instanceof HTMLElement)) return;
      if (!document.activeElement.closest("[data-carousel]")) return;
      if (e.key === "ArrowLeft") go(idx - 1);
      if (e.key === "ArrowRight") go(idx + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, go]);

  return (
    <div
      data-carousel
      className="mt-12"
      aria-roledescription="carousel"
      aria-label="Daftar layanan psikologi"
    >
      <div className="relative mx-auto h-117.5 max-w-6xl perspective-[1400px]">
        {services.map((s, i) => {
          let off = i - idx;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          const abs = Math.abs(off);
          const hidden = abs > 2;
          return (
            <div
              key={s.initials}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} dari ${n}: ${s.name}`}
              aria-hidden={off !== 0}
              onClick={() => off !== 0 && go(i)}
              className={`absolute top-4 left-1/2 h-105 w-[min(20rem,82vw)] transition-all duration-500 ${
                off !== 0 ? "cursor-pointer" : ""
              }`}
              style={{
                transform: `translateX(calc(-50% + ${off * 78}%)) scale(${1 - abs * 0.12}) rotateY(${off * -14}deg)`,
                zIndex: 10 - abs,
                opacity: hidden ? 0 : 1,
                filter:
                  off === 0
                    ? "none"
                    : `grayscale(${0.4 * abs}) brightness(${1 - abs * 0.15})`,
                pointerEvents: hidden ? "none" : undefined,
              }}
            >
              <Card s={s} active={off === 0} />
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => go(idx - 1)}
          aria-label="Layanan sebelumnya"
          className="absolute top-1/2 left-0 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full border-[1.5px] border-ink bg-white sm:left-4"
        >
          <LuChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => go(idx + 1)}
          aria-label="Layanan berikutnya"
          className="absolute top-1/2 right-0 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full border-[1.5px] border-ink bg-orange sm:right-4"
        >
          <LuChevronRight size={18} />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5 text-white">
        <p className="font-display text-lg font-bold" aria-live="polite">
          {String(idx + 1).padStart(2, "0")}{" "}
          <span className="text-white/50">/ {String(n).padStart(2, "0")}</span>
        </p>
        <div className="flex items-center gap-2">
          {services.map((s, i) => (
            <button
              key={s.initials}
              type="button"
              onClick={() => go(i)}
              aria-label={`Tampilkan ${s.name}`}
              aria-current={i === idx}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-7 bg-orange" : "w-2 bg-white/40 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
