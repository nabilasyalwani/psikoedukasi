"use client";

import { useState } from "react";
import { barriers } from "@/lib/content";
import { LuArrowDown, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import {
  Blanket,
  OldLady,
  PeopleRing,
  PhoneTalk,
  RainCloud,
  Therapist,
} from "../Illustrations";

const art = [OldLady, Therapist, RainCloud, PeopleRing, PhoneTalk, Blanket];

export default function BarrierExplorer() {
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<Set<number>>(new Set([0]));
  const b = barriers[active];
  const Art = art[active];

  const go = (i: number) => {
    const n = (i + barriers.length) % barriers.length;
    setActive(n);
    setSeen((prev) => new Set(prev).add(n));
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Hambatan yang sering dirasakan</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Enam hal yang sering bikin ragu.
          </h2>
        </div>
        <div className="text-right" aria-live="polite">
          <p className="text-xs text-muted">
            Sudah kamu lihat:{" "}
            <strong className="text-ink">
              {seen.size} dari {barriers.length}
            </strong>
          </p>
          <div className="mt-2 flex gap-1.5" aria-hidden>
            {barriers.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-7 rounded-full border-[1.5px] border-ink ${seen.has(i) ? "bg-ink" : "bg-white"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[22rem_1fr]">
        <ul className="flex flex-wrap gap-2 lg:grid lg:content-start lg:gap-3">
          {barriers.map((x, i) => {
            const on = i === active;
            return (
              <li key={x.title}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-pressed={on}
                  className={`flex items-center gap-4 rounded-xl border-[1.5px] border-ink p-1 text-left text-sm font-bold transition-all duration-300 ease-spring active:scale-95 lg:w-full lg:rounded-2xl lg:px-4 lg:py-3.5 ${
                    on
                      ? "bg-ink text-white shadow-[5px_5px_0_var(--color-lavender)]"
                      : "bg-white hover:-translate-y-0.5"
                  }`}
                >
                  <span
                    className={`tone-${x.tone} grid size-8 shrink-0 place-items-center rounded-lg border-[1.5px] border-ink text-xs text-ink`}
                  >
                    {i + 1}
                  </span>
                  <span className="sr-only lg:not-sr-only lg:flex-1">
                    {x.title}
                  </span>
                  <LuChevronRight size={16} className="hidden lg:block" />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="brutal grid overflow-hidden rounded-[28px] bg-white md:grid-cols-[1.4fr_1fr]">
          <div
            key={active}
            className={`tone-${b.tone} fade-up border-b-[1.5px] border-ink p-6 sm:p-8 md:border-r-[1.5px] md:border-b-0`}
          >
            <span className="chip">Hambatan {active + 1}</span>
            <h3 className="mt-4 text-3xl leading-tight font-extrabold">
              {b.title}
            </h3>
            <div className="mt-5 rounded-2xl border-[1.5px] border-ink bg-white p-4">
              <p className="text-[0.65rem] font-bold tracking-[0.16em] text-muted uppercase">
                Yang sering dirasakan
              </p>
              <p className="mt-1.5 text-sm font-medium">{b.felt}</p>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs font-semibold">
              <span className="grid size-6 place-items-center rounded-full bg-ink text-white">
                <LuArrowDown size={12} />
              </span>
              Coba lihat dari sisi lain
            </p>
            <p className="mt-3 rounded-2xl bg-ink p-5 font-display text-md leading-snug font-bold text-white shadow-[4px_4px_0_#fff]">
              {b.reframe}
            </p>
          </div>
          <div className="relative flex min-h-fit flex-col justify-between p-6">
            <span
              className="font-display hidden md:block md:text-8xl leading-none font-extrabold text-ink/10"
              aria-hidden
            >
              {String(active + 1).padStart(2, "0")}
            </span>
            <Art key={active} className="fade-up mx-auto w-[90%] max-w-full" />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Hambatan sebelumnya"
                className="grid size-10 place-items-center rounded-full border-[1.5px] border-ink bg-white hover:bg-cream"
              >
                <LuChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Hambatan berikutnya"
                className="grid size-10 place-items-center rounded-full bg-ink text-white"
              >
                <LuChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
