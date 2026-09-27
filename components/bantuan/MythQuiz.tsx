"use client";

import { useState, type ReactNode } from "react";
import { quiz } from "@/lib/content";
import { LuCheck, LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";

export default function MythQuiz({ heading }: { heading: ReactNode }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    quiz.map(() => null),
  );

  const q = quiz[current];
  const chosen = answers[current];
  const answered = chosen !== null;
  const correct = answered && q.options[chosen].fact;
  const score = answers.reduce<number>(
    (s, a, i) => (a !== null && quiz[i].options[a].fact ? s + 1 : s),
    0,
  );

  const choose = (i: number) => {
    if (answered) return;
    setAnswers((prev) => prev.map((a, k) => (k === current ? i : a)));
  };
  const reset = () => {
    setAnswers(quiz.map(() => null));
    setCurrent(0);
  };

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        {heading}
        <div
          className="rounded-2xl border-[1.5px] border-white/60 px-4 py-3 text-white"
          aria-live="polite"
        >
          <span className="text-xs text-white/70">Skor kamu</span>{" "}
          <span className="font-display text-3xl font-extrabold">{score}</span>
          <span className="text-sm text-white/70">/{quiz.length}</span>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[18rem_1fr]">
        <ol className="flex min-w-0 flex-wrap gap-2 lg:grid lg:content-start lg:gap-2.5">
          {quiz.map((item, i) => {
            const a = answers[i];
            const state =
              a === null ? "idle" : item.options[a].fact ? "right" : "wrong";
            const on = i === current;
            return (
              <li key={item.statement}>
                <button
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-current={on ? "step" : undefined}
                  className={`flex items-center gap-3 rounded-full border-[1.5px] p-1 text-left text-[0.8rem] font-semibold transition-colors lg:w-full lg:rounded-2xl lg:px-3 lg:py-2.5 ${
                    on
                      ? "border-white bg-cream text-ink"
                      : "border-white/40 text-white hover:border-white"
                  }`}
                >
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full border-[1.5px] text-xs font-bold ${
                      state === "right"
                        ? "border-ink bg-mint text-ink"
                        : state === "wrong"
                          ? "border-ink bg-pink text-ink"
                          : on
                            ? "border-ink bg-white"
                            : "border-white/60"
                    }`}
                  >
                    {state === "right" ? (
                      <LuCheck size={13} />
                    ) : state === "wrong" ? (
                      <LuX size={13} />
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span className="sr-only lg:not-sr-only">
                    {item.statement}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="min-w-0 rounded-[26px] border-[1.5px] border-ink bg-paper p-5 shadow-[8px_8px_0_var(--color-orange)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="chip">
              Pernyataan {current + 1} dari {quiz.length}
            </span>
            <div className="flex gap-1.5" aria-hidden>
              {quiz.map((item, i) => {
                const a = answers[i];
                return (
                  <span
                    key={item.statement}
                    className={`h-2.5 w-7 rounded-full border-[1.5px] border-ink transition-colors ${
                      a !== null
                        ? item.options[a].fact
                          ? "bg-mint-deep"
                          : "bg-red-deep"
                        : i === current
                          ? "bg-butter"
                          : "bg-white"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          <p className="mt-6 font-display text-2xl leading-tight font-extrabold sm:text-3xl">
            “{q.statement}”
          </p>

          <div
            className="mt-6 grid gap-3"
            role="group"
            aria-label="Pilih pernyataan yang merupakan fakta"
          >
            {q.options.map((o, i) => {
              const letter = String.fromCharCode(65 + i);
              const reveal = answered;
              const tone = reveal
                ? o.fact
                  ? "bg-mint"
                  : "bg-pink"
                : "bg-white hover:-translate-y-0.5 hover:bg-cream hover:shadow-[3px_3px_0_var(--color-ink)] active:scale-[0.98]";
              return (
                <button
                  key={o.text}
                  type="button"
                  onClick={() => choose(i)}
                  disabled={answered}
                  className={`flex items-center gap-4 rounded-2xl border-[1.5px] border-ink p-4 text-left text-sm font-medium transition-all duration-300 ease-spring disabled:cursor-default ${tone} ${
                    chosen === i ? "shadow-[3px_3px_0_var(--color-ink)]" : ""
                  }`}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border-[1.5px] border-ink bg-white font-bold">
                    {letter}
                  </span>
                  <span className="flex-1">{o.text}</span>
                  {reveal && (
                    <span
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full border-[1.5px] border-ink px-2.5 py-1 text-xs font-bold ${
                        o.fact ? "bg-ink text-white" : "bg-white"
                      }`}
                    >
                      {o.fact ? <LuCheck size={12} /> : <LuX size={12} />}
                      {o.fact ? "Benar" : "Ini mitos"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div aria-live="polite">
            {answered && (
              <div className="fade-up mt-5 flex gap-3 rounded-2xl border-[1.5px] border-dashed border-ink bg-white p-4">
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-lg border-[1.5px] border-ink ${
                    correct ? "bg-mint" : "bg-butter"
                  }`}
                >
                  {correct ? <LuCheck size={15} /> : "!"}
                </span>
                <div className="text-sm">
                  <p className="font-bold">
                    {correct ? "Tepat! Itu faktanya." : "Itu sebenarnya mitos!"}
                  </p>
                  <p className="mt-1 text-muted">
                    <strong className="text-ink">Mari luruskan:</strong>{" "}
                    {q.explain}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="btn btn-light justify-center py-2! text-xs! disabled:opacity-40"
            >
              <LuChevronLeft size={14} /> Sebelumnya
            </button>
            <button
              type="button"
              onClick={reset}
              className="order-last col-span-2 text-xs font-semibold underline underline-offset-4 sm:order-none"
            >
              Ulangi kuis
            </button>
            <button
              type="button"
              onClick={() =>
                setCurrent((c) => Math.min(quiz.length - 1, c + 1))
              }
              disabled={current === quiz.length - 1}
              className="btn btn-dark justify-center py-2! text-xs! shadow-none! disabled:opacity-40"
            >
              Berikutnya <LuChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
