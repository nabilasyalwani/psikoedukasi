import { LuSprout } from "react-icons/lu";

export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full border-[1.5px] border-ink bg-orange transition-transform duration-500 ease-spring group-hover:scale-110 group-hover:-rotate-20"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <LuSprout size={size * 0.5} strokeWidth={2.2} />
    </span>
  );
}
