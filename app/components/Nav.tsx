"use client";

import { useEffect, useState } from "react";
import { Home, FolderOpen, Briefcase, Wrench, PenSquare } from "lucide-react";

const items = [
  { id: "home", label: "Home", Icon: Home },
  { id: "services", label: "What I do", Icon: FolderOpen },
  { id: "process", label: "How I work", Icon: Briefcase },
  { id: "tools", label: "Tools", Icon: Wrench },
  { id: "contact", label: "Contact", Icon: PenSquare },
];

export function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed left-1/2 top-5 z-50 flex -translate-x-1/2 gap-1 rounded-2xl bg-ink-2/90 p-2 shadow-[0_8px_30px_rgba(0,0,0,.45)] backdrop-blur"
    >
      {items.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          title={label}
          aria-current={active === id ? "true" : undefined}
          className={`grid size-10 place-items-center rounded-xl transition-colors ${
            active === id
              ? "bg-orange text-white"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Icon size={19} strokeWidth={1.8} />
        </a>
      ))}
    </nav>
  );
}
