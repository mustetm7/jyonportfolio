"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { needOptions, profile } from "../content";

const field =
  "w-full rounded-xl border border-white/10 bg-ink-2 px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 transition-colors focus:border-orange focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Project enquiry: ${d.get("need")}`;
    const body = `Hi ${profile.name},\n\n${d.get("message")}\n\n— ${d.get("name")}\n${d.get("email")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto grid max-w-xl gap-5 text-left">
      <label className="grid gap-2 text-sm text-white/70">
        Name
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        What do you need help with?
        <select name="need" required defaultValue="" className={field}>
          <option value="" disabled>
            Select…
          </option>
          {needOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-white/70">
        Message
        <textarea name="message" required rows={5} className={`${field} resize-y`} placeholder="Tell me about your store, list or project." />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        Send message <ArrowUpRight size={18} />
      </button>
      <p role="status" className="min-h-5 text-center text-sm text-white/55">
        {sent ? "Your email app should open with the message ready to send." : ""}
      </p>
    </form>
  );
}
