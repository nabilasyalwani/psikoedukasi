"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

const trim = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);

export function ScrollLink({
  href,
  onClick,
  ...props
}: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const pathname = usePathname() || "/";
  const [path, id] = href.split("#");

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || !id) return;
        if (path && trim(path) !== trim(pathname)) return;
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView();
        if (window.location.hash) {
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
          );
        }
      }}
      {...props}
    />
  );
}
