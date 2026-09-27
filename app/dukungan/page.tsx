import type { Metadata } from "next";
import {
  friendDont,
  friendDos,
  supportRoles,
  supportSources,
} from "@/lib/content";
import { ChapterBadge, Container, NextChapter } from "@/components/Shared";
import {
  LuCheck,
  LuMessageCircle,
  LuSearch,
  LuSun,
  LuUsers,
  LuX,
} from "react-icons/lu";
import {
  GroupHug,
  NightWindow,
  PeopleCircleNew,
} from "@/components/Illustrations";

export const metadata: Metadata = { title: "Dukungan dari Orang Sekitar" };

const roleIcons = {
  chat: LuMessageCircle,
  sun: LuSun,
  search: LuSearch,
  users: LuUsers,
};
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function Dukungan() {
  return (
    <>
      <section className="dots-bg border-b-[1.5px] border-ink bg-butter">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-16">
          <div>
            <ChapterBadge no="04" tone="butter" />
            <h1 className="mt-5 text-5xl leading-[0.98] font-extrabold sm:text-6xl">
              Dukungan dari Orang Sekitar
            </h1>
            <p className="mt-7 text-sm font-bold">
              Dukungan dapat berasal dari:
            </p>
            <ul className="mt-3 flex max-w-lg flex-wrap gap-2">
              {supportSources.map((s) => (
                <li
                  key={s.label}
                  className={`inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-3 py-1.5 text-xs font-semibold ${
                    s.dark ? "bg-ink text-white" : "bg-white"
                  }`}
                >
                  <span
                    className="size-2.5 rounded-full border border-ink"
                    style={{ background: s.dot }}
                    aria-hidden
                  />
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="brutal absolute inset-0 rounded-full bg-white" />
            <PeopleCircleNew
              className="spin-slower pause-on-hover absolute inset-0 m-auto w-[90%]"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <p className="eyebrow">Peran orang-orang di sekitarmu</p>
          <h2 className="mt-3 max-w-xl text-3xl leading-[1.05] font-extrabold sm:text-4xl">
            Empat cara orang terdekat bisa hadir.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportRoles.map((r, i) => {
              const Icon = roleIcons[r.icon];
              return (
                <article
                  key={r.title}
                  className={`tone-${r.tone} brutal lift reveal group relative rounded-[24px] p-6 transition-[rotate] duration-300 ${tilts[i]} hover:rotate-0`}
                >
                  <span className="absolute top-5 right-6 font-display text-3xl font-extrabold text-white/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="group-wiggle grid size-11 place-items-center rounded-xl border-[1.5px] border-ink bg-white">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-6 text-xl leading-tight font-extrabold">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{r.desc}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t-[1.5px] border-ink bg-white py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="brutal flex flex-col overflow-hidden rounded-[28px] bg-pink p-8">
            <p className="text-[0.7rem] font-bold tracking-[0.16em] uppercase">
              Panduan singkat
            </p>
            <h2 className="mt-3 text-3xl leading-[1.05] font-extrabold sm:text-4xl">
              Jika kamu ingin mendukung teman
            </h2>
            <GroupHug className="mx-auto mt-auto w-full max-w-72 pt-8" />
          </div>
          <ul className="grid content-center gap-3">
            {friendDos.map((d) => (
              <li
                key={d}
                className="reveal group flex items-center gap-4 rounded-2xl border-[1.5px] border-ink bg-cream px-4 py-4 text-sm font-medium transition-all duration-300 ease-spring hover:translate-x-1 hover:bg-white hover:shadow-[4px_4px_0_var(--color-ink)]"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border-[1.5px] border-ink bg-mint transition-transform duration-300 ease-spring group-hover:scale-115 group-hover:-rotate-12">
                  <LuCheck size={15} />
                </span>
                {d}
              </li>
            ))}
            <li className="reveal group flex items-center gap-4 rounded-2xl border-[1.5px] border-ink bg-ink px-4 py-4 text-sm font-medium text-white shadow-[4px_4px_0_var(--color-pink-deep)] transition-all duration-300 ease-spring hover:translate-x-1 hover:shadow-[7px_7px_0_var(--color-pink-deep)]">
              <span className="group-wiggle grid size-8 shrink-0 place-items-center rounded-lg border-[1.5px] border-ink bg-pink text-ink">
                <LuX size={15} />
              </span>
              <span>
                <span className="block text-[0.65rem] font-bold tracking-[0.16em] text-white/60 uppercase">
                  Hindari
                </span>
                {friendDont}
              </span>
            </li>
          </ul>
        </Container>
      </section>

      <NextChapter
        no="05"
        title="Mencari Bantuan Itu Bisa Dilakukan"
        href="/langkah-layanan"
        tone="periwinkle"
        art={<NightWindow className="h-full w-full" />}
      />
    </>
  );
}
