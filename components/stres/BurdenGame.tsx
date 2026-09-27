"use client";

import { useState } from "react";
import { burdens } from "@/lib/content";
import { LuRefreshCw } from "react-icons/lu";
import { StudentHappy, StudentSad } from "../Illustrations";

const ROWS = [6, 5, 4, 3, 2, 1];
const PLANK_BOTTOM = 134;
const TAG_TONES = [
  "#fff",
  "#DCD2F6",
  "#C8F0DA",
  "#F8D0DD",
  "#FAE3A2",
  "#C9D4F8",
];

// Deterministic pile layout: rows get narrower toward the top.
const layout = (() => {
  const out: { left: number; row: number; rot: number }[] = [];
  let k = 0;
  ROWS.forEach((n, row) => {
    for (let j = 0; j < n; j++) {
      const spread = 14.5;
      out.push({
        left: 50 + (j - (n - 1) / 2) * spread + ((k * 7) % 5) - 2,
        row,
        rot: ((k * 37) % 17) - 8,
      });
      k++;
    }
  });
  return out;
})();

export default function BurdenGame() {
  const [released, setReleased] = useState<Set<number>>(new Set());
  const count = released.size;
  const total = burdens.length;
  const load = 1 - count / total;
  const done = count === total;
  const happy = load < 0.1;

  const release = (i: number) => setReleased((prev) => new Set(prev).add(i));

  return (
    <div>
      <div className="relative mx-auto h-105 max-w-4xl select-none">
        {/* burdens */}
        {burdens.map((b, i) => {
          const p = layout[i];
          const gone = released.has(i);
          return (
            <button
              key={b}
              type="button"
              disabled={gone}
              onClick={() => release(i)}
              aria-label={`Lepaskan beban: ${b}`}
              className="absolute rounded-full border-[1.5px] border-ink px-2.5 py-1.5 text-[0.55rem] font-extrabold tracking-wide whitespace-nowrap uppercase shadow-[2px_2px_0_var(--color-ink)] transition-transform hover:-translate-y-1 hover:scale-105 sm:px-3.5 sm:text-[0.68rem]"
              style={{
                left: `${p.left}%`,
                bottom: `calc(${150 + p.row * 32}px + ${(1 - load) * 20}px)`,
                transform: `translateX(-50%) rotate(${p.rot}deg)`,
                background: TAG_TONES[i % TAG_TONES.length],
                zIndex: 10 + p.row,
                animation: gone ? "release 0.7s ease-in forwards" : undefined,
                ["--dx" as string]: `${p.left > 50 ? 60 : -60}px`,
                ["--dr" as string]: `${p.rot * 3}deg`,
                pointerEvents: gone ? "none" : undefined,
              }}
            >
              {b}
            </button>
          );
        })}

        {/* figure */}
        <div
          className="absolute bottom-0 left-1/2 aspect-867/1000 -translate-x-1/2 transition-[height] duration-500"
          style={{
            height: `calc(${PLANK_BOTTOM + 8}px + ${(1 - load) * 20}px)`,
          }}
          aria-hidden
        >
          <StudentSad
            className={`absolute inset-0 size-full object-bottom transition-opacity duration-500 ${
              happy ? "opacity-0" : "opacity-100"
            }`}
          />
          <StudentHappy
            className={`absolute inset-0 size-full object-bottom transition-opacity duration-500 ${
              happy ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* plank */}
        <div
          className="absolute left-1/2 z-5 h-4 w-[92%] rounded-full border-[1.5px] border-ink bg-orange transition-all duration-500"
          style={{
            bottom: `calc(${PLANK_BOTTOM}px + ${(1 - load) * 20}px)`,
            transform: `translateX(-50%) rotate(${-3 * load}deg)`,
          }}
        />
      </div>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <h3 className="text-2xl leading-none font-extrabold text-white sm:text-4xl">
          Merasa Berat, Tapi Tidak Tahu Kenapa?
        </h3>
        <p className="mt-5 text-sm text-white/75">
          Stres akademik sering menumpuk pelan-pelan dari banyak hal kecil. Kamu
          tidak harus memikul semuanya sendiri.
        </p>
        <p
          className="mt-3 min-h-6 text-sm font-semibold text-butter"
          aria-live="polite"
        >
          {done
            ? "Lebih ringan, kan? Berbagi beban dengan orang lain juga bisa terasa seperti ini."
            : ""}
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-white">
          <span>
            Beban dilepas:{" "}
            <strong>
              {count} / {total}
            </strong>
          </span>
          <button
            type="button"
            onClick={() => setReleased(new Set())}
            className="btn btn-light py-2! text-xs!"
          >
            <LuRefreshCw size={13} /> Susun ulang
          </button>
        </div>
      </div>
    </div>
  );
}
