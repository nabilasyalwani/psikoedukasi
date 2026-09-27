import type { Metadata } from "next";
import { ChapterBadge, Container, NextChapter } from "@/components/Shared";
import { LuArrowDown } from "react-icons/lu";
import { Doubts, PeopleCircle } from "@/components/Illustrations";
import BarrierExplorer from "@/components/hambatan/BarrierExplorer";

export const metadata: Metadata = {
  title: "Apa yang Membuat Ragu Mencari Bantuan?",
};

const bubbles = [
  { text: "Nanti dianggap lemah?", cls: "top-[8%] -left-2 -rotate-6 bg-white" },
  {
    text: "Masalahku belum serius…",
    cls: "top-[36%] -right-4 rotate-6 bg-butter",
  },
  {
    text: "Harus hubungi siapa?",
    cls: "bottom-[10%] left-0 -rotate-3 bg-mint",
  },
];

export default function Hambatan() {
  return (
    <>
      <section className="dots-bg border-b-[1.5px] border-ink">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-16">
          <div>
            <ChapterBadge no="03" tone="pink" />
            <h1 className="mt-5 text-5xl leading-[1.02] font-extrabold sm:text-6xl">
              Apa yang Membuat{" "}
              <span className="highlight bg-pink inline-block -rotate-2">
                Ragu
              </span>{" "}
              Mencari Bantuan?
            </h1>
            <p className="mt-6 max-w-lg text-muted">
              Hambatan yang sering dirasakan mahasiswa. Pilih salah satu
              hambatan di bawah untuk melihatnya dari sudut pandang lain.
            </p>
            <a href="#hambatan" className="btn btn-dark mt-7">
              Jelajahi hambatan <LuArrowDown />
            </a>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="brutal absolute inset-4 rounded-full bg-pink" />
            <Doubts className="floaty absolute inset-0 m-auto w-[92%]" priority />
            {bubbles.map((b, i) => (
              <span
                key={b.text}
                className={`brutal-sm floaty absolute rounded-xl px-3 py-1.5 text-xs font-bold ${b.cls}`}
                style={{ animationDelay: `${i * -1.6}s` }}
              >
                {b.text}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="hambatan" className="scroll-mt-10 bg-white py-20">
        <Container>
          <BarrierExplorer />
        </Container>
      </section>

      <NextChapter
        no="04"
        title="Dukungan dari Orang Sekitar"
        href="/dukungan"
        tone="butter"
        art={<PeopleCircle className="spin-slower h-full w-full" />}
      />
    </>
  );
}
