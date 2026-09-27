import { LuSprout } from "react-icons/lu";

export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full border-[1.5px] border-ink bg-orange"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <LuSprout size={size * 0.5} strokeWidth={2.2} />
    </span>
  );
}
