// Resizes the source illustrations in assets/img into light WebP files in public/illustrations.
// The originals are up to 4167px, far larger than any slot on the site. Run with `npm run images`.
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const drawkit = (n) =>
  `DrawKit Vector Illustration Mental Health & Psychology (${n}).png`;

const sources = {
  "rain-cloud": drawkit(1),
  "group-hug": drawkit(10),
  "night-window": drawkit(3),
  sleepless: drawkit(4),
  mirror: drawkit(5),
  "friends-arch": drawkit(6),
  doubts: drawkit(7),
  "tangled-study": drawkit(8),
  overwhelmed: drawkit(9),
  "people-circle": "a-diverse-group-of-people-standing-in-a-circle-hol (1).png",
  "people-ring": "a-diverse-group-of-people-standing-in-a-circle-hol.png",
  "heart-care": "a-heart-shape-surrounded-by-self-care-items--a-tea.png",
  "breaking-free": "a-person-breaking-free-from-a-dark-cloud-of-tangle.png",
  meditate: "a-person-sitting-cross-legged-in-meditation-with-e (1).png",
  "phone-talk": "a-person-sitting-on-a-small-stool-talking-into-an-.png",
  blanket: "a-person-wrapped-snugly-in-a-large-cozy-blanket--s.png",
  therapist: "a-therapist-and-a-client-sitting-face-to-face-in-c (1).png",
  "head-profile": "abstract-visualization-of-a-human-head-in-profile-.png",
  brain: "an-abstract-human-brain-made-of-tangled-swirling-l (1).png",
  "flower-book": "image.png",
  "people-circle-new": "people-circle-new.png",
  "student-happy": "student-happy.png",
  "student-sad": "student-sad.png",
  "old-lady": drawkit(2),
};

const SIZE = 1000;
await mkdir("public/illustrations", { recursive: true });

for (const [slug, file] of Object.entries(sources)) {
  const out = `public/illustrations/${slug}.webp`;
  await sharp(`assets/img/${file}`)
    .resize(SIZE, SIZE, { fit: "inside" })
    .webp({ quality: 82 })
    .toFile(out);
  console.log(`${file} -> ${out}`);
}
