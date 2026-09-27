"use client";

import Link from "next/link";
import { useState } from "react";
import { reflections } from "@/lib/content";
import { LuArrowRight, LuCheck, LuRefreshCw } from "react-icons/lu";
import { HeartCare } from "../Illustrations";

export default function Reflection() {
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const count = picked.size;
  const total = reflections.length;

  const toggle = (i: number) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_20rem]">
      <fieldset className="grid content-start gap-3 sm:grid-cols-2">
        <legend className="sr-only">
          Pilih yang sesuai dengan pengalamanmu
        </legend>
        {reflections.map((r, i) => {
          const on = picked.has(i);
          return (
            <label
              key={r}
              className={`flex cursor-pointer items-start gap-3 rounded-2xl border-[1.5px] border-ink px-4 py-3.5 text-sm font-medium transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-ink)] active:scale-[0.98] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo ${
                on ? "bg-mint" : "bg-white hover:bg-cream"
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={on}
                onChange={() => toggle(i)}
              />
              <span
                className={`mt-px grid size-5 shrink-0 place-items-center rounded-md border-[1.5px] border-ink transition-all duration-300 ease-spring ${
                  on ? "bg-ink text-white" : "bg-white"
                }`}
                aria-hidden
              >
                {on && <LuCheck size={12} strokeWidth={3} />}
              </span>
              {r}
            </label>
          );
        })}
      </fieldset>

      <aside
        className="brutal flex flex-col rounded-3xl bg-white p-6"
        aria-live="polite"
      >
        <div className="flex items-center justify-between">
          <p className="text-[0.7rem] font-bold tracking-[0.16em] uppercase">
            Hasil refleksimu
          </p>
          <button
            type="button"
            onClick={() => setPicked(new Set())}
            className="inline-flex items-center gap-1 rounded-full border-[1.5px] border-ink px-2.5 py-1 text-xs font-semibold hover:bg-cream"
          >
            <LuRefreshCw size={12} /> Ulangi
          </button>
        </div>
        <p className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-6xl font-extrabold">{count}</span>
          <span className="text-sm text-muted">dari {total} dipilih</span>
        </p>
        <div className="mt-3 h-3 overflow-hidden rounded-full border-[1.5px] border-ink bg-cream">
          <div
            className="h-full bg-orange transition-all duration-500"
            style={{ width: `${(count / total) * 100}%` }}
          />
        </div>

        {count === 0 ? (
          <div className="fade-up mt-5">
            <p className="font-display text-xl leading-tight font-extrabold">
              Mulai dengan jujur pada dirimu.
            </p>
            <p className="mt-2 text-sm text-muted">
              Pilih pernyataan yang sesuai dengan yang kamu alami. Tidak ada
              jawaban benar atau salah.
            </p>
          </div>
        ) : count < 4 ? (
          <div key="sedang" className="fade-up mt-5">
            <p className="font-display text-xl leading-tight font-extrabold">
              Terima kasih sudah memperhatikan dirimu.
            </p>
            <p className="mt-2 text-sm text-muted">
              Mengenali stres lebih awal adalah langkah penting untuk merawat
              diri. Perhatikan apakah hal-hal ini mulai mengganggu harimu.
            </p>
          </div>
        ) : (
          <div key="tinggi" className="fade-up mt-5">
            <p className="font-display text-xl leading-tight font-extrabold">
              Kamu tidak harus menghadapinya sendiri.
            </p>
            <p className="mt-2 text-sm text-muted">
              Jika masalah mulai mengganggu aktivitas harianmu, hal itu sudah
              cukup menjadi alasan untuk mencari bantuan.
            </p>
            <Link
              href="/langkah-layanan"
              className="btn btn-dark mt-4 py-2! text-xs!"
            >
              Lihat langkah mencari bantuan <LuArrowRight />
            </Link>
          </div>
        )}

        <div className="mt-4 flex items-end gap-3 border-t border-dashed border-ink/30 pt-5">
          <p className="text-xs text-muted">
            Refleksi ini bukan alat diagnosis, melainkan ajakan untuk mengenali
            diri.
          </p>
          <HeartCare className="w-24 shrink-0" />
        </div>
      </aside>
    </div>
  );
}
