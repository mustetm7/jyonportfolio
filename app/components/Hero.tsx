"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowDown, ArrowUpRight, Mail, ShoppingBag, Workflow, Zap, type LucideIcon } from "lucide-react";
import { profile } from "../content";

// The four stops on the orbit are a real email-automation path: a signup
// triggers a Klaviyo flow, which leads to a Shopify order, which Make syncs on.
const stops: { Icon: LucideIcon; tag: string; label: string; x: number; y: number; d: number }[] = [
  { Icon: Zap, tag: "Trigger", label: "New subscriber", x: 16.8, y: 17, d: 1500 },
  { Icon: Mail, tag: "Klaviyo", label: "Welcome flow", x: 83.2, y: 17, d: 1650 },
  { Icon: ShoppingBag, tag: "Shopify", label: "First order", x: 83.2, y: 83, d: 1800 },
  { Icon: Workflow, tag: "Make", label: "Synced to Notion", x: 16.8, y: 83, d: 1950 },
];

const ticker = [
  "Shopify",
  "Klaviyo",
  "Email marketing",
  "Funnel marketing",
  "Automation",
  "Make",
  "Notion",
  "Canva",
  "Microsoft Office",
  "Data entry",
];

const ORBIT = "M15 300 A235 280 0 1 1 485 300 A235 280 0 1 1 15 300";

const delay = (ms: number): CSSProperties => ({ ["--d" as string]: `${ms}ms` });

export function Hero() {
  const hero = useRef<HTMLElement>(null);
  const tilt = useRef<HTMLDivElement>(null);

  // cursor spotlight + portrait tilt; skipped for touch and reduced-motion
  function onMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const h = hero.current;
    if (h) {
      const r = h.getBoundingClientRect();
      h.style.setProperty("--mx", `${e.clientX - r.left}px`);
      h.style.setProperty("--my", `${e.clientY - r.top}px`);
    }
    const t = tilt.current;
    if (t) {
      const r = t.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      const cx = Math.max(-1, Math.min(1, px * 2));
      const cy = Math.max(-1, Math.min(1, py * 2));
      t.style.transform = `perspective(1100px) rotateY(${cx * 7}deg) rotateX(${-cy * 6}deg)`;
    }
  }

  function onLeave() {
    if (tilt.current) tilt.current.style.transform = "";
  }

  return (
    <section
      id="home"
      ref={hero}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink"
      style={{ ["--mx" as string]: "70%", ["--my" as string]: "30%" }}
    >
      {/* atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx) var(--my), rgba(255,92,53,0.16), transparent 70%), radial-gradient(900px 500px at 85% 0%, rgba(255,92,53,0.12), transparent 70%), radial-gradient(700px 500px at 0% 100%, rgba(187,255,79,0.07), transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1280px] flex-1 items-center gap-10 px-5 pb-10 pt-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pt-24">
        {/* copy */}
        <div className="relative z-10">
          <div className="h-fade inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-3 pr-4 text-[13px] text-white/75 backdrop-blur" style={delay(100)}>
            <span className="relative grid size-2.5 place-items-center">
              <span className="h-ping absolute inline-flex size-full rounded-full bg-lime" />
              <span className="relative size-2 rounded-full bg-lime" />
            </span>
            Open to new projects · {profile.role}
          </div>

          <h1 className="mt-7 font-display text-[clamp(2.9rem,7.4vw,5.9rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white [font-stretch:92%]">
            <span className="h-line"><span style={delay(250)}>I turn visitors</span></span>
            <span className="h-line">
              <span style={delay(370)}>
                into{" "}
                <span className="relative inline-block">
                  <span className="text-orange">repeat</span>
                  <svg
                    aria-hidden
                    viewBox="0 0 300 90"
                    className="pointer-events-none absolute -inset-x-[7%] -inset-y-[14%] h-[128%] w-[114%] overflow-visible"
                    fill="none"
                  >
                    <path
                      pathLength={1}
                      className="h-draw"
                      style={delay(1250)}
                      d="M30 58 C 8 30, 70 6, 160 6 C 250 6, 296 26, 288 50 C 280 76, 190 86, 120 82 C 60 78, 22 66, 48 46"
                      stroke="#bbff4f"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </span>
            <span className="h-line"><span style={delay(490)}>customers.</span></span>
          </h1>

          <p className="h-fade mt-8 max-w-[34rem] text-lg leading-relaxed text-white/60" style={delay(750)}>
            I’m {profile.name}. I build the Shopify stores, Klaviyo flows and Make automations behind that, and keep
            the data clean while I do it.
          </p>

          <div className="h-fade mt-9 flex flex-wrap items-center gap-3" style={delay(900)}>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange py-4 pl-7 pr-5 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start a project</span>
              <span className="relative z-10 grid size-8 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-medium text-white/85 transition-colors hover:border-white/40 hover:bg-white/5"
            >
              See what I do
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        {/* stage */}
        <div className="relative mx-auto w-full max-w-[460px] lg:max-w-[500px]">
          <div className="relative aspect-[5/6] w-full">
            {/* orbit + travelling signals */}
            <svg aria-hidden viewBox="0 0 500 600" className="absolute inset-0 size-full overflow-visible">
              <path d={ORBIT} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" />
              {[0, 1].map((i) => (
                <g key={i}>
                  <circle r="14" fill="#ff5c35" opacity="0.22">
                    <animateMotion dur="16s" begin={`${-i * 8}s`} repeatCount="indefinite" path={ORBIT} />
                  </circle>
                  <circle r="5" fill={i ? "#bbff4f" : "#ff5c35"}>
                    <animateMotion dur="16s" begin={`${-i * 8}s`} repeatCount="indefinite" path={ORBIT} />
                  </circle>
                </g>
              ))}
            </svg>

            {/* portrait */}
            <div className="absolute inset-x-[14%] inset-y-[8%]">
              <div ref={tilt} className="size-full transition-transform duration-300 ease-out will-change-transform">
                <div className="h-unmask relative size-full overflow-hidden rounded-[2rem] ring-1 ring-white/15" style={delay(450)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    className="h-settle size-full object-cover object-[55%_20%]"
                    style={delay(450)}
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* flow chips */}
            {stops.map(({ Icon, tag, label, x, y, d }, i) => (
              <div key={tag} className="absolute z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
                <div className="h-pop" style={delay(d)}>
                  <div className="h-bob" style={{ ["--b" as string]: `${-i * 1.2}s` }}>
                    <div className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.07] max-sm:scale-[0.78] py-2 pl-2 pr-3.5 shadow-[0_10px_40px_rgba(0,0,0,.45)] backdrop-blur-xl">
                      <span className={`grid size-8 shrink-0 place-items-center rounded-xl ${i % 2 ? "bg-lime text-ink" : "bg-orange text-white"}`}>
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      <span className="whitespace-nowrap leading-tight">
                        <span className="block text-[10px] font-medium uppercase tracking-wider text-white/50">{tag}</span>
                        <span className="block text-[13px] font-semibold">{label}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* skills ticker */}
      <div aria-hidden className="h-fade relative border-y border-white/10 bg-white/[0.02] py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" style={delay(1700)}>
        <div className="h-marquee flex w-max">
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center">
              {ticker.map((t) => (
                <li key={t} className="flex items-center font-display text-xl font-semibold uppercase tracking-wide text-white/45">
                  <span className="px-7">{t}</span>
                  <span className="text-orange">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
