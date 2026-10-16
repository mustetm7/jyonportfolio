import {
  ArrowRight,
  ArrowUpRight,
  Filter,
  Layers,
  LayoutDashboard,
  Mail,
  NotebookPen,
  Palette,
  ShoppingBag,
  Table2,
  Workflow,
  Send,
} from "lucide-react";
import { Nav } from "./components/Nav";
import { Reveal } from "./components/Reveal";
import { Hero } from "./components/Hero";
import { ContactForm } from "./components/ContactForm";
import { process, profile, services, stats, tools } from "./content";

const serviceIcons = {
  shopify: ShoppingBag,
  klaviyo: Send,
  mail: Mail,
  funnel: Filter,
  make: Workflow,
  notion: NotebookPen,
  canva: Palette,
  office: Table2,
};

function Heading({ a, b }: { a: string; b: string }) {
  return (
    <Reveal as="h2" className="mb-12 text-center font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl">
      {a}
      <br />
      <span className="text-white/15">{b}</span>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-24 sm:px-8">
        {/* INTRO */}
        <section className="scroll-mt-24">
          <div className="text-center">
            <Reveal as="p" className="mx-auto max-w-lg text-lg text-white/55">
              {profile.intro}
            </Reveal>

            <Reveal delay={100} className="mx-auto mt-12 flex max-w-xl justify-center gap-8 sm:gap-14">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-4xl font-bold sm:text-5xl">+{s.value}</div>
                  <div className="mx-auto mt-2 max-w-[8rem] text-xs uppercase tracking-wide text-white/45">{s.label}</div>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            <Reveal>
              <a href="#services" className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl bg-orange p-6 text-white">
                <svg aria-hidden viewBox="0 0 400 200" className="absolute inset-0 size-full opacity-25" preserveAspectRatio="none">
                  <path d="M-10 170 C 80 190, 120 20, 220 60 S 330 190, 420 40" fill="none" stroke="#161515" strokeWidth="2" />
                </svg>
                <Layers size={30} strokeWidth={1.6} className="relative" />
                <p className="relative text-2xl font-medium uppercase leading-tight">Email marketing, funnels, automation</p>
                <span className="absolute bottom-5 right-5 grid size-9 place-items-center rounded-lg border border-white/80 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <a href="#tools" className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl bg-lime p-6 text-ink">
                <svg aria-hidden viewBox="0 0 400 200" className="absolute inset-0 size-full opacity-30" preserveAspectRatio="none">
                  <path d="M-10 150 L 60 40 L 120 150 L 190 20 L 260 150 L 330 40 L 410 150" fill="none" stroke="#2f9e7a" strokeWidth="5" />
                </svg>
                <LayoutDashboard size={30} strokeWidth={1.6} className="relative" />
                <p className="relative text-2xl font-medium uppercase leading-tight">Shopify, Klaviyo, Make, Notion</p>
                <span className="absolute bottom-5 right-5 grid size-9 place-items-center rounded-lg border border-ink/80 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-32 scroll-mt-24">
          <Heading a="What" b="I do" />
          <ul className="mx-auto max-w-3xl">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              const tile = s.tone === "orange" ? "bg-orange text-white" : "bg-lime text-ink";
              return (
                <Reveal as="li" key={s.title} delay={(i % 3) * 60}>
                  <div className="group flex items-center gap-5 border-b border-white/8 py-5 first:pt-0 transition-colors">
                    <span className={`grid h-24 w-24 shrink-0 place-items-center rounded-xl sm:h-28 sm:w-28 ${tile} transition-transform group-hover:scale-[1.04]`}>
                      <Icon size={34} strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="mt-1 text-white/50">{s.sub}</p>
                    </div>
                    <ArrowUpRight className="shrink-0 text-orange transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </section>

        {/* PROCESS */}
        <section id="process" className="mt-32 scroll-mt-24">
          <Heading a="How I" b="work" />
          <ol className="mx-auto max-w-3xl">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60}>
                <div className="flex flex-col gap-2 border-b border-white/8 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 max-w-md text-white/50">{p.text}</p>
                  </div>
                  <span className="shrink-0 text-sm text-orange sm:pt-1.5">{p.step}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* TOOLS */}
        <section id="tools" className="mt-32 scroll-mt-24">
          <Heading a="Tools" b="I use" />
          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {tools.map((t, i) => (
              <Reveal as="li" key={t.name} delay={(i % 2) * 80}>
                <div className="flex items-center gap-4 rounded-2xl bg-ink-2 p-4 transition-colors hover:bg-[#2a2929]">
                  <span
                    className="grid size-14 place-items-center rounded-xl text-2xl font-bold text-ink"
                    style={{ background: t.tone }}
                  >
                    {t.name.slice(0, 1)}
                  </span>
                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm text-white/45">{t.kind}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-32 scroll-mt-24">
          <Heading a="Let’s work" b="together" />
          <Reveal>
            <ContactForm />
          </Reveal>
        </section>

        <footer className="mt-28 border-t border-white/8 pt-8 text-center text-sm text-white/40">
          © {profile.year} {profile.name}. All rights reserved.
        </footer>
      </main>
    </>
  );
}
