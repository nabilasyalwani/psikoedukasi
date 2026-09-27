"use client";

import { useState } from "react";
import { causes } from "@/lib/content";
import {
  RainCloud,
  Sleepless,
  TangledStudy,
  MirrorPerson,
} from "../Illustrations";

const art = [TangledStudy, MirrorPerson, Sleepless, RainCloud];

export default function CauseTabs() {
  const [active, setActive] = useState(0);
  const c = causes[active];
  const Art = art[active];

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Faktor penyebab stres"
        className="grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        {causes.map((f, i) => {
          const on = i === active;
          return (
            <button
              key={f.key}
              role="tab"
              id={`tab-${f.key}`}
              aria-selected={on}
              aria-controls="cause-panel"
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 rounded-2xl border-[1.5px] border-ink px-4 py-3 text-left transition-all duration-300 ease-spring active:scale-95 ${
                on
                  ? "bg-ink text-white shadow-[4px_4px_0_var(--color-lavender)]"
                  : "bg-white hover:-translate-y-0.5"
              }`}
            >
              <span
                className={`tone-${f.tone} grid size-8 shrink-0 place-items-center rounded-full border-[1.5px] border-ink text-sm font-bold text-ink`}
              >
                {f.key}
              </span>
              <span className="leading-tight">
                <span
                  className={`block text-[0.7rem] ${on ? "text-white/60" : "text-muted"}`}
                >
                  Faktor
                </span>
                <span className="block text-sm font-bold">{f.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="cause-panel"
        role="tabpanel"
        aria-labelledby={`tab-${c.key}`}
        key={c.key}
        className="fade-up mt-6 grid gap-6 md:grid-cols-[0.7fr_1.3fr] "
      >
        <div
          className={`hidden md:block tone-${c.tone} brutal relative aspect-square overflow-hidden rounded-[28px]`}
        >
          <Art className="absolute inset-0 m-auto w-[80%]" />
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Faktor {c.label}
            </h3>
          </div>
          <ol className="mt-5 grid gap-3">
            {c.items.map((item, i) => (
              <li
                key={item}
                className="fade-up flex items-center gap-4 rounded-2xl border-[1.5px] border-ink bg-paper px-4 py-3.5 text-sm font-medium transition-all duration-300 ease-spring hover:translate-x-1 hover:bg-white hover:shadow-[3px_3px_0_var(--color-ink)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span
                  className={`tone-${c.tone} grid size-7 shrink-0 place-items-center rounded-lg border-[1.5px] border-ink text-xs font-bold`}
                >
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
