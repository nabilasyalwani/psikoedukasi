import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/lib/content";
import { ChapterBadge, Container } from "@/components/Shared";
import { LuArrowDown, LuInfo } from "react-icons/lu";
import { FriendsArch, GroupHug, Meditate } from "@/components/Illustrations";
import ServiceCarousel from "@/components/layanan/ServiceCarousel";

export const metadata: Metadata = {
  title: "Mencari Bantuan Itu Bisa Dilakukan",
};

const stepTones = [
  "lavender",
  "pink",
  "butter",
  "mint",
  "periwinkle",
  "lavender",
];

export default function LangkahLayanan() {
  return (
    <>
      <section className="dots-bg border-b-[1.5px] border-ink bg-periwinkle">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.2fr_1fr] lg:py-16">
          <div>
            <ChapterBadge no="05" tone="mint" />
            <h1 className="mt-5 text-5xl leading-[1.02] font-extrabold sm:text-6xl">
              Mencari Bantuan Itu{" "}
              <span className="highlight inline-block rotate-2 bg-white">
                Bisa
              </span>{" "}
              Dilakukan
            </h1>
            <p className="mt-6 max-w-lg text-muted">
              Tujuh langkah sederhana dari mengenali kebutuhanmu hingga
              menentukan langkah berikutnya bersama tenaga profesional.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#langkah" className="btn btn-dark !shadow-none">
                Lihat 7 langkah
              </a>
              <a href="#layanan" className="btn btn-light">
                Daftar layanan
              </a>
            </div>
          </div>
          <div className="brutal relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-full rounded-b-[32px] bg-white">
            <FriendsArch
              className="absolute inset-x-0 bottom-0 w-full"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section id="langkah" className="scroll-mt-10 py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="flex flex-col overflow-hidden rounded-[28px] border-[1.5px] border-ink bg-ink p-8 text-white shadow-[6px_6px_0_var(--color-orange)]">
            <p className="eyebrow !text-butter">Langkah-langkah</p>
            <h2 className="mt-3 text-4xl leading-[1.05] font-extrabold">
              Satu langkah kecil dalam satu waktu.
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Kamu tidak perlu menyelesaikan semuanya sekaligus. Mulailah dari
              langkah pertama.
            </p>
            <div className="relative mt-auto pt-8">
              <div
                className="absolute inset-x-6 bottom-0 aspect-square rounded-full bg-ink-soft"
                aria-hidden
              />
              <Meditate className="floaty relative w-full" />
            </div>
          </div>

          <ol className="relative grid gap-3">
            <span
              className="absolute top-6 bottom-6 left-[21px] border-l-2 border-dashed border-ink/40"
              aria-hidden
            />
            {steps.map((s, i) => {
              const last = i === steps.length - 1;
              return (
                <li key={s} className="reveal group relative flex items-center gap-4">
                  <span
                    className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full border-[1.5px] border-ink font-display font-extrabold transition-transform duration-300 ease-spring group-hover:scale-115 ${
                      last ? "bg-orange" : `tone-${stepTones[i]}`
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div
                    className={`flex flex-1 flex-wrap items-center justify-between gap-2 rounded-2xl border-[1.5px] border-ink px-5 py-4 text-sm font-semibold transition-all duration-300 ease-spring group-hover:translate-x-1 ${
                      last
                        ? "bg-ink text-white shadow-[4px_4px_0_var(--color-orange)] group-hover:shadow-[6px_6px_0_var(--color-orange)]"
                        : "bg-white group-hover:shadow-[4px_4px_0_var(--color-ink)]"
                    }`}
                  >
                    {s}
                    {i === 0 && (
                      <span className="rounded-full border-[1.5px] border-ink bg-butter px-2.5 py-0.5 text-[0.68rem]">
                        Mulai di sini
                      </span>
                    )}
                    {i === 2 && (
                      <a
                        href="#layanan"
                        className="inline-flex items-center gap-1 text-xs text-indigo underline underline-offset-2"
                      >
                        Lihat direktori <LuArrowDown size={12} />
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* Services */}
      <section
        id="layanan"
        className="scroll-mt-16 overflow-hidden bg-ink py-20"
      >
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-butter!">Informasi layanan</p>
              <h2 className="mt-3 max-w-xl text-3xl leading-[1.05] font-extrabold text-white sm:text-4xl">
                Layanan psikologi di{" "}
                <span className="text-periwinkle">
                  Makassar &amp; Sulawesi Selatan
                </span>
              </h2>
            </div>
            <p className="flex max-w-xs gap-2 rounded-2xl border-[1.5px] border-dashed border-white/50 p-3 text-xs text-white/80">
              <LuInfo size={16} className="shrink-0 text-orange" />
              Hubungi layanan terlebih dahulu untuk menanyakan jadwal dan
              ketentuan.
            </p>
          </div>
        </Container>
        <ServiceCarousel />
      </section>

      {/* Closing CTA */}
      <section className="py-20">
        <Container>
          <div className="brutal relative grid items-center gap-6 overflow-hidden rounded-4xl bg-orange p-8 sm:p-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-4xl leading-[1.02] font-extrabold sm:text-5xl">
                Tidak harus menghadapi semuanya sendiri.
              </h2>
              <p className="mt-4 max-w-lg">
                Mencari bantuan bukan tanda kelemahan, melainkan langkah aktif
                yang berani untuk merawat dirimu.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/" className="btn btn-dark shadow-none!">
                  Kembali ke Beranda
                </Link>
                <Link href="/stres-akademik#refleksi" className="btn btn-light">
                  Coba refleksi diri
                </Link>
              </div>
            </div>
            <GroupHug className="mx-auto w-full max-w-72" />
          </div>
        </Container>
      </section>
    </>
  );
}
