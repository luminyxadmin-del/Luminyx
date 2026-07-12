import type { Metadata } from "next";
import {
  Mail,
  Download,
  Paperclip,
  ChevronDown,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: "Contact — Let's Build the Future Together",
  description:
    "Get in touch with the Luminyx team — partnerships, talent, and travel inquiries handled by dedicated specialists.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">

      {/* HERO — full width dark banner */}
      <section className="relative overflow-hidden bg-primary-dark py-20 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative container-xl">
          <div className="chip mb-6" style={{ background: "rgba(59,7,100,0.6)", color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}>
            Get in Touch
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
            Let&apos;s Build the <br />
            <span className="text-accent-purple">Future Together</span>
          </h1>
          <p className="mt-5 text-white/60 text-lg max-w-xl leading-relaxed">
            Whether you&apos;re exploring a partnership, joining the talent network,
            or just curious — we answer every message personally.
          </p>

          {/* 3 quick stat pills */}
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { value: "< 24hr", label: "Response time" },
              { value: "Dubai HQ", label: "Headquartered" },
              { value: "14 countries", label: "Active operations" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.08] border border-white/10">
                <span className="font-display font-bold text-white">{s.value}</span>
                <span className="text-white/40 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* RIGHT: Channels + Deck + Office */}
          <div className="lg:col-span-5 space-y-5">

            {/* Direct Channels */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-display text-base font-bold text-ink mb-4">Direct Channels</h3>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: "EMAIL", value: "partnership@luminyx.net", href: "mailto:partnership@luminyx.net" },
                ].map((c) => (
                  <a key={c.label} href={c.href}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-primary-brand/20 hover:bg-primary-light/30 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4 text-primary-brand" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-muted uppercase tracking-wider">{c.label}</div>
                      <div className="text-sm font-semibold text-ink">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Partnership Deck */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-primary-brand to-accent-purple">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                <Download className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">Partnership Deck</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-5">
                Twenty pages on the Luminyx ecosystem, strategy and partnership formats. Updated quarterly.
              </p>
              <button type="button" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary-brand text-sm font-semibold hover:scale-105 transition-transform shadow-sm">
                Download Deck <Download className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Office location card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary-brand" />
                </div>
                <div>
                  <div className="text-xs text-ink-muted uppercase tracking-wider mb-1">Headquarters</div>
                  <div className="font-display text-base font-bold text-ink">Luminyx Ventures FZ-LLC</div>
                  <div className="text-sm text-ink-muted mt-1">Compass Building, Al Hulaila<br />Al Hulaila Industrial Zone-FZ<br />Ras Al Khaimah, United Arab Emirates</div>
                  <div className="mt-3 flex gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">● Open</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary-light text-primary-brand border border-primary-brand/10 font-medium">GST +4</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-bg-subtle">
        <div className="container-xl">
          <div className="chip mb-4">Common Inquiries</div>
          <h2 className="font-display text-2xl font-bold text-ink mb-8">Frequent questions</h2>
          <div className="max-w-3xl space-y-3">
            {[
              { q: "How quickly does the Luminyx team respond?", a: "Most inquiries receive a personal reply within one business day. Strategic partnerships may take up to three business days." },
              { q: "Do you work outside East Africa?", a: "We operate primarily across East Africa and the GCC corridor, with active operations in 14 countries across Africa, India, and the Middle East." },
              { q: "Is Luminyx hiring?", a: "We're consistently recruiting across all five verticals. The Luminyx Talent platform is the fastest way to engage." },
              { q: "Can I request a tailored partnership proposal?", a: "Absolutely — share a short paragraph about your goals and we'll prepare a custom proposal within one week." },
            ].map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-gray-100 p-5 cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between list-none gap-4">
                  <span className="font-display text-base font-semibold text-ink">{f.q}</span>
                  <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180 shrink-0" />
                </summary>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
