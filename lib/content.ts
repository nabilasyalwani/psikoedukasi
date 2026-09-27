export const DISCLAIMER =
  "Website ini bukan alat diagnosis dan tidak menggantikan konsultasi dengan psikolog atau tenaga profesional.";

export const SITE_DESC =
  "Website ini membantu mahasiswa memahami stres akademik, hambatan mencari bantuan, serta langkah mendapatkan dukungan profesional.";

export type Tone = "lavender" | "mint" | "pink" | "butter" | "periwinkle";

export const chapters: {
  no: string;
  href: string;
  nav: string;
  title: string;
  desc: string;
  tone: Tone;
}[] = [
  {
    no: "01",
    href: "/stres-akademik",
    nav: "Stres Akademik",
    title: "Mengenali Stres Akademik",
    desc: "Pengertian, penyebab, dampak, dan refleksi singkat tentang apa yang sedang kamu alami.",
    tone: "mint",
  },
  {
    no: "02",
    href: "/mencari-bantuan",
    nav: "Mencari Bantuan",
    title: "Mengapa Mencari Bantuan Itu Penting?",
    desc: "Help-seeking, tenaga profesional, manfaatnya, dan kuis mitos atau fakta.",
    tone: "lavender",
  },
  {
    no: "03",
    href: "/hambatan",
    nav: "Hambatan",
    title: "Apa yang Membuat Ragu Mencari Bantuan?",
    desc: "Enam hambatan yang sering dirasakan, dan cara lain untuk melihatnya.",
    tone: "periwinkle",
  },
  {
    no: "04",
    href: "/dukungan",
    nav: "Dukungan",
    title: "Dukungan dari Orang Sekitar",
    desc: "Siapa saja yang bisa mendukungmu, dan bagaimana mendukung teman.",
    tone: "butter",
  },
  {
    no: "05",
    href: "/langkah-layanan",
    nav: "Langkah & Layanan",
    title: "Mencari Bantuan Itu Bisa Dilakukan",
    desc: "Tujuh langkah sederhana dan daftar layanan psikologi di Makassar.",
    tone: "pink",
  },
];

export const footerLinks = [
  { href: "/stres-akademik", label: "Mengenali Stres Akademik" },
  { href: "/mencari-bantuan", label: "Mengapa Mencari Bantuan" },
  { href: "/hambatan", label: "Hambatan Mencari Bantuan" },
  { href: "/dukungan", label: "Dukungan dari Orang Sekitar" },
  { href: "/langkah-layanan", label: "Langkah & Layanan" },
];

/* ---------- Bab 01 ---------- */

export const causes: {
  key: string;
  label: string;
  tone: Tone;
  items: string[];
}[] = [
  {
    key: "A",
    label: "Akademik",
    tone: "lavender",
    items: [
      "Beban tugas yang banyak",
      "Ujian dan tenggat waktu yang berdekatan",
      "Tuntutan nilai yang tinggi",
      "Kesulitan mengikuti metode pembelajaran",
    ],
  },
  {
    key: "B",
    label: "Pribadi",
    tone: "pink",
    items: [
      "Perfeksionisme",
      "Kesulitan mengatur waktu",
      "Kurangnya kepercayaan diri",
      "Kesulitan mengelola emosi",
      "Kebiasaan menunda pekerjaan",
    ],
  },
  {
    key: "C",
    label: "Sosial",
    tone: "mint",
    items: [
      "Tekanan dari keluarga",
      "Perbandingan dengan teman",
      "Konflik dengan teman atau kelompok",
      "Kurangnya dukungan sosial",
      "Kekhawatiran terhadap penilaian orang lain",
    ],
  },
  {
    key: "D",
    label: "Lingkungan & Kondisi Hidup",
    tone: "butter",
    items: [
      "Masalah keuangan",
      "Masalah keluarga",
      "Kondisi tempat tinggal yang kurang nyaman",
      "Akses terhadap fasilitas atau layanan bantuan yang terbatas",
    ],
  },
];

export const reflections = [
  "Sulit berkonsentrasi saat belajar atau kuliah",
  "Merasa kewalahan dengan tugas yang ada",
  "Sulit tidur atau sering terbangun malam",
  "Mudah marah atau mudah merasa sedih",
  "Kehilangan motivasi untuk kuliah",
  "Menghindari aktivitas perkuliahan",
  "Merasa lelah terus-menerus",
  "Menarik diri dari teman atau kegiatan sosial",
  "Sering sakit kepala atau keluhan fisik lainnya",
  "Merasa cemas tentang nilai atau masa depan",
];

export const burdens = [
  "Beban tugas",
  "Tenggat waktu",
  "Tuntutan nilai",
  "Ujian beruntun",
  "Perfeksionisme",
  "Menunda pekerjaan",
  "Kurang percaya diri",
  "Sulit atur waktu",
  "Tekanan keluarga",
  "Dibandingkan teman",
  "Takut dinilai",
  "Konflik kelompok",
  "Masalah keuangan",
  "Sulit tidur",
  "Kelelahan",
  "Sulit konsentrasi",
  "Cemas masa depan",
  "Hilang motivasi",
  "Mudah marah",
  "Menarik diri",
  "Kewalahan",
];

/* ---------- Bab 02 ---------- */

export const professionals = [
  {
    no: "01",
    title: "Psikolog",
    desc: "Membantu memahami pikiran, emosi, dan perilaku melalui asesmen dan konseling/intervensi psikologis.",
    tag: "Tidak meresepkan obat",
    tagIcon: "x" as const,
    tone: "lavender" as Tone,
    icon: "chat" as const,
  },
  {
    no: "02",
    title: "Konselor",
    desc: "Memberikan bimbingan dan dukungan untuk permasalahan personal, akademik, atau karier.",
    tag: "Personal · Akademik · Karier",
    tagIcon: null,
    tone: "butter" as Tone,
    icon: "compass" as const,
  },
  {
    no: "03",
    title: "Psikiater",
    desc: "Dokter spesialis kesehatan jiwa yang dapat memberikan resep obat bila diperlukan.",
    tag: "Dapat meresepkan obat",
    tagIcon: "check" as const,
    tone: "periwinkle" as Tone,
    icon: "stetho" as const,
  },
];

export const benefits = [
  {
    title: "Ruang yang aman untuk bercerita",
    desc: "Kamu dapat membicarakan masalah, perasaan, dan pengalaman tanpa harus merasa dihakimi.",
  },
  {
    title: "Memahami masalah dengan lebih jelas",
    desc: "Profesional membantu melihat hubungan antara pikiran, emosi, perilaku, dan situasi yang sedang dihadapi.",
  },
  {
    title: "Strategi menghadapi masalah",
    desc: "Belajar mengelola stres, mengatur waktu, menghadapi pikiran negatif, berkomunikasi, dan mengambil keputusan.",
  },
  {
    title: "Dukungan yang sesuai",
    desc: "Bantuan disesuaikan dengan kebutuhan dan kondisimu. Tidak semua orang membutuhkan bentuk bantuan yang sama.",
  },
  {
    title: "Mencegah masalah makin berat",
    desc: "Mencari bantuan sejak awal membantu mengurangi beban sebelum masalah semakin mengganggu kehidupan sehari-hari.",
  },
  {
    title: "Membantu mengambil keputusan",
    desc: "Profesional membantu mempertimbangkan pilihan dan menentukan langkah yang lebih aman serta realistis.",
  },
];

export const quiz: {
  statement: string;
  options: { text: string; fact: boolean }[];
  explain: string;
}[] = [
  {
    statement: "Mencari bantuan berarti lemah",
    options: [
      {
        text: "Mencari bantuan adalah bentuk tanggung jawab dan keberanian untuk merawat diri sendiri.",
        fact: true,
      },
      {
        text: "Mencari bantuan berarti kamu tidak kuat menghadapi masalah.",
        fact: false,
      },
    ],
    explain:
      "Mencari bantuan merupakan bentuk keberanian dan kepedulian terhadap diri sendiri. Pernyataan “Kalau mencari bantuan berarti saya lemah” adalah mitos.",
  },
  {
    statement: "Harus menunggu masalah menjadi berat",
    options: [
      {
        text: "Saya harus mengalami masalah yang sangat berat terlebih dahulu sebelum mencari bantuan.",
        fact: false,
      },
      {
        text: "Saya dapat mencari bantuan ketika mulai merasa kesulitan atau ingin memahami diri sendiri.",
        fact: true,
      },
    ],
    explain:
      "Kamu tidak harus menunggu masalah menjadi berat untuk mencari bantuan. Bantuan dapat dicari sejak mulai merasa kesulitan atau ketika ingin lebih memahami diri sendiri.",
  },
  {
    statement: "Psikolog hanya untuk gangguan mental",
    options: [
      {
        text: "Psikolog hanya membantu orang yang mengalami gangguan mental.",
        fact: false,
      },
      {
        text: "Psikolog dapat membantu menghadapi stres, masalah akademik, kesulitan relasi, adaptasi, dan tantangan kehidupan.",
        fact: true,
      },
    ],
    explain:
      "Psikolog tidak hanya membantu orang yang mengalami gangguan mental. Psikolog juga dapat membantu menghadapi berbagai masalah dan tantangan dalam kehidupan sehari-hari.",
  },
  {
    statement: "Bercerita kepada teman sama dengan konsultasi profesional",
    options: [
      {
        text: "Bercerita kepada teman sudah pasti sama dengan berkonsultasi kepada profesional.",
        fact: false,
      },
      {
        text: "Teman dapat memberikan dukungan, tetapi profesional memiliki pengetahuan dan keterampilan khusus untuk memberikan bantuan psikologis.",
        fact: true,
      },
    ],
    explain:
      "Bercerita kepada teman dapat membantu memberikan dukungan emosional. Namun, profesional memiliki pengetahuan dan keterampilan khusus untuk memberikan bantuan psikologis secara profesional.",
  },
  {
    statement: "Mencari bantuan membuat orang lain menganggap kita bermasalah",
    options: [
      {
        text: "Mencari bantuan berarti orang lain akan menganggap saya bermasalah.",
        fact: false,
      },
      {
        text: "Memerlukan bantuan merupakan hal yang manusiawi dan tidak menentukan nilai diri seseorang.",
        fact: true,
      },
    ],
    explain:
      "Setiap orang dapat membutuhkan bantuan pada waktu tertentu. Penilaian orang lain tidak menentukan nilai diri seseorang.",
  },
  {
    statement: "Harus tahu masalah sebelum menemui psikolog",
    options: [
      {
        text: "Saya harus mengetahui masalah saya terlebih dahulu sebelum menemui psikolog.",
        fact: false,
      },
      {
        text: "Saya dapat datang ketika masih bingung karena memahami masalah merupakan bagian dari proses konsultasi.",
        fact: true,
      },
    ],
    explain:
      "Kamu tidak harus sudah mengetahui atau memahami masalahmu secara jelas sebelum menemui psikolog. Membantu memahami apa yang sedang dialami merupakan bagian dari proses konsultasi.",
  },
];

/* ---------- Bab 03 ---------- */

export const barriers: {
  title: string;
  felt: string;
  reframe: string;
  tone: Tone;
}[] = [
  {
    title: "Takut dianggap lemah",
    felt: "Mahasiswa merasa harus menyelesaikan semua masalah sendiri.",
    reframe:
      "Meminta bantuan merupakan langkah aktif untuk menghadapi masalah.",
    tone: "pink",
  },
  {
    title: "Takut dinilai orang lain",
    felt: "Khawatir dianggap berlebihan atau tidak mampu.",
    reframe: "Tenaga profesional bertugas membantu, bukan menghakimi.",
    tone: "mint",
  },
  {
    title: "Malu bercerita",
    felt: "Merasa tidak nyaman membicarakan masalah pribadi.",
    reframe: "Kamu bisa mulai dari cerita yang paling mudah disampaikan.",
    tone: "lavender",
  },
  {
    title: "Stigma",
    felt: "Anggapan negatif terhadap orang yang mencari bantuan.",
    reframe: "Mencari bantuan merupakan perilaku yang wajar.",
    tone: "butter",
  },
  {
    title: "Tidak tahu harus menghubungi siapa",
    felt: "Kurangnya informasi tentang layanan.",
    reframe:
      "Website ini memberikan panduan sumber bantuan yang bisa kamu akses.",
    tone: "periwinkle",
  },
  {
    title: "Khawatir masalah tidak cukup serius",
    felt: "Merasa masalahnya belum pantas dibicarakan.",
    reframe:
      "Jika masalah mulai mengganggu aktivitas harianmu, hal itu sudah cukup menjadi alasan untuk mencari bantuan.",
    tone: "pink",
  },
];

/* ---------- Bab 04 ---------- */

export const supportSources: { label: string; dot: string; dark?: boolean }[] =
  [
    { label: "Teman dekat", dot: "var(--color-pink-deep)" },
    { label: "Keluarga", dot: "var(--color-orange)" },
    { label: "Dosen Pembimbing", dot: "var(--color-indigo-soft)" },
    { label: "Organisasi atau komunitas", dot: "var(--color-mint-deep)" },
    { label: "Konselor", dot: "var(--color-lavender)", dark: true },
    { label: "Psikolog", dot: "var(--color-mint)", dark: true },
    {
      label: "Tenaga kesehatan lainnya",
      dot: "var(--color-butter)",
      dark: true,
    },
  ];

export const supportRoles: {
  title: string;
  desc: string;
  tone: Tone;
  icon: "chat" | "sun" | "search" | "users";
}[] = [
  {
    title: "Mendengarkan",
    desc: "Menyediakan ruang untuk bercerita tanpa menghakimi atau langsung memberi solusi.",
    tone: "pink",
    icon: "chat",
  },
  {
    title: "Memberikan Semangat",
    desc: "Mendukung keputusan mencari bantuan dan mengingatkan bahwa itu hal yang baik.",
    tone: "butter",
    icon: "sun",
  },
  {
    title: "Memberikan Informasi",
    desc: "Membantu mencari tahu tentang layanan atau sumber bantuan yang tersedia.",
    tone: "periwinkle",
    icon: "search",
  },
  {
    title: "Menemani",
    desc: "Bersedia menemani saat mengunjungi layanan kesehatan mental jika diinginkan.",
    tone: "mint",
    icon: "users",
  },
];

export const friendDos = [
  "Dengarkan tanpa langsung memberikan solusi",
  "Validasi perasaannya, namun tidak harus selalu setuju",
  "Berikan ruang untuk bercerita sesuai keinginannya",
  "Bantu cari informasi layanan jika ia tertarik",
  "Sampaikan bahwa kamu peduli tanpa membuatnya merasa terbebani",
];

export const friendDont = "Jangan memaksanya bercerita atau mencari bantuan";

/* ---------- Bab 05 ---------- */

export const steps = [
  "Mengenali bahwa saya membutuhkan bantuan",
  "Menentukan orang atau layanan yang dapat dihubungi",
  "Mencari informasi layanan",
  "Menghubungi layanan",
  "Menjelaskan kondisi yang sedang dialami",
  "Mengikuti proses konsultasi",
  "Menentukan langkah berikutnya bersama tenaga profesional",
];

export type Service = {
  initials: string;
  name: string;
  address: string;
  phone: string;
  instagram: string;
  badge: string;
  tone: Tone;
};

export const services: Service[] = [
  {
    initials: "PS",
    name: "Pusat Pembelajaran Keluarga (Puspaga) Provinsi Sulawesi Selatan",
    address:
      "Jl. Letjen Hertasning, Pandang, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222",
    phone: "0838-2200-7680",
    instagram: "puspagasulsel",
    badge: "Biaya: Gratis",
    tone: "lavender",
  },
  {
    initials: "UH",
    name: "Pusat Layanan Psikologi Universitas Hasanuddin",
    address:
      "Lantai 1 Perpustakaan Pusat Universitas Hasanuddin, samping Pojok Statistika",
    phone: "0882-4246-1585",
    instagram: "pusatlayananpsikologiunhas",
    badge: "Layanan kampus",
    tone: "mint",
  },
  {
    initials: "BP",
    name: "Bermakna Psychological Center",
    address:
      "Jl. Delta Mas II Blok A4, Batua, Kec. Manggala, Kota Makassar, Sulawesi Selatan 90233",
    phone: "0895-1069-6112",
    instagram: "bermakna.center",
    badge: "Manggala",
    tone: "butter",
  },
  {
    initials: "PM",
    name: "Psikomorfosa",
    address:
      "Jalan Kompleks Agraria Blok Q2 A, Karunrung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222",
    phone: "0822-9231-8587",
    instagram: "psikomorfosa",
    badge: "Rappocini",
    tone: "pink",
  },
  {
    initials: "DP",
    name: "Daya Potensia",
    address:
      "Permata Hijau Permai No.39 Blok J, Kassi-Kassi, Rappocini, Kota Makassar, Sulawesi Selatan 90222",
    phone: "0811-430-253",
    instagram: "dayapotensiaind",
    badge: "Rappocini",
    tone: "periwinkle",
  },
  {
    initials: "MP",
    name: "Master Psikologi",
    address:
      "Jl. Perumahan Dosen Unhas, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245",
    phone: "0853-9987-0973",
    instagram: "master_psikologi",
    badge: "Tamalanrea",
    tone: "mint",
  },
];
