import type { Metadata } from "next";
import Image from "next/image";
import {
  Landmark,
  GraduationCap,
  Building2,
  HeartHandshake,
  Shield,
  Infinity as InfinityIcon,
  Compass,
  MessageCircle,
  Handshake,
  Plug,
  TrendingUp,
  Quote,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partners — Partnerships for Progress",
  description:
    "Luminyx partners with governments, universities, corporates and NGOs to deliver compounding impact across East Africa.",
};

const ecosystems = [
  {
    icon: Landmark,
    title: "Government",
    bullets: [
      "Sovereign AI programs",
      "Public-sector modernisation",
      "Smart-city infrastructure",
    ],
  },
  {
    icon: GraduationCap,
    title: "University",
    bullets: [
      "Curriculum co-design",
      "Joint research labs",
      "Faculty exchange programs",
    ],
  },
  {
    icon: Building2,
    title: "Corporate",
    bullets: [
      "Innovation studios",
      "Co-investment vehicles",
      "Talent pipelines",
    ],
  },
  {
    icon: HeartHandshake,
    title: "NGO",
    bullets: [
      "Impact measurement",
      "Tech-for-good programs",
      "Capacity building",
    ],
  },
];

const whyPartner = [
  {
    icon: Shield,
    title: "Unparalleled Trust",
    description:
      "Long-tenured relationships with regulators, ministries and operators across the continent.",
  },
  {
    icon: InfinityIcon,
    title: "Infinite Scale",
    description:
      "Five integrated verticals mean every partnership compounds across the ecosystem.",
  },
  {
    icon: Compass,
    title: "Regional Expertise",
    description:
      "Local teams, local context, global standards — wherever you choose to operate.",
  },
];

const roadmap = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Inquiry",
    description: "An initial conversation to understand fit and ambition.",
  },
  {
    step: "02",
    icon: Handshake,
    title: "Alignment",
    description: "Shared goals, success metrics and governance structures.",
  },
  {
    step: "03",
    icon: Plug,
    title: "Integration",
    description: "Embedded teams, joint tooling and shared operating cadence.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Growth",
    description: "Compounding outcomes measured quarterly, reported openly.",
  },
];

const partnerLogos = ["TECHCORP", "GLOBALSYS", "AFRLINK", "INNOV8", "COREBASE"];

const inquiries = [
  {
    quote:
      "Within thirty days we had a co-investment vehicle on paper and a launch plan in market. Velocity matters.",
    name: "Mariam Diallo",
    role: "Head of Strategy, ContinentalBank",
  },
  {
    quote:
      "Luminyx convened the regulator, the ministry and three corporates in the same room within a week. That is the partnership we were missing.",
    name: "Stephen Mutua",
    role: "Director, National AI Office",
  },
];

const successStories = [
  {
    title: "Pan-East-African Innovation Corridor",
    description:
      "Co-designed with three governments and four universities to seed venture-grade research from Nairobi to Addis.",
    image: IMAGES.techCity,
  },
  {
    title: "AgriTech Drone Network",
    description:
      "A consortium of five corporates and two NGOs deploying drone-led precision farming across 180k hectares.",
    image: IMAGES.drone,
  },
];

export default function PartnersPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Group / <span className="text-accent-purple">Partners</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Handshake className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">PARTNERS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Build the Future{" "}
                <span className="text-accent-purple">With Luminyx</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We partner with governments, universities, corporates and NGOs to deliver compounding impact across East Africa, India, and the GCC corridor.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Become a Partner <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="#stories" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "18+", label: "Govt Partnerships" },
                { value: "1,000+", label: "Institutional Partners" },
                { value: "14", label: "Countries" },
                { value: "$1.8B", label: "Advisory Influence" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Ecosystems */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Ecosystems"
            title="Four partner categories, one operating model"
            description="We design every relationship around clarity of role, shared incentives and measurable outcomes."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ecosystems.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="card card-hover h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary-brand flex items-center justify-center mb-6">
                    <e.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-4">
                    {e.title}
                  </h3>
                  <ul className="space-y-2">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-slate flex gap-2 items-start"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary-brand mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-section-lg">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Why Partner with Luminyx"
            title="Trust, scale and depth — by design"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyPartner.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="card h-full text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-light flex items-center justify-center mb-5">
                    <w.icon className="w-8 h-8 text-primary-brand" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {w.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Roadmap (dark section) */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-dark p-10 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-brand/20 via-transparent to-violet/20" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-brand/20 blur-3xl" />
            <div className="relative">
              <div className="max-w-2xl">
                <div className="chip glass-dark text-white border-white/10 mb-6">
                  <Compass className="w-3.5 h-3.5" />
                  Collaborative Roadmap
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight text-balance">
                  Four phases from first conversation to compounding growth
                </h2>
              </div>
              <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4">
                {roadmap.map((r, i) => (
                  <Reveal key={r.step} delay={i * 0.1}>
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 h-full">
                      <div className="text-xs font-mono text-primary-light mb-3">
                        {r.step}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-primary-brand/20 flex items-center justify-center mb-4">
                        <r.icon className="w-6 h-6 text-primary-light" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white mb-2">
                        {r.title}
                      </h3>
                      <p className="text-sm text-white/60">{r.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-section-lg bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Success Stories"
            title="Partnerships that have already shipped"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <article className="card card-hover overflow-hidden p-0 h-full">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold text-navy mb-3">
                      {s.title}
                    </h3>
                    <p className="text-slate leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-section">
        <div className="container-xl">
          <Reveal>
            <p className="text-center text-sm uppercase tracking-wider text-slate mb-10">
              In partnership with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {partnerLogos.map((p) => (
                <div
                  key={p}
                  className="font-display text-xl font-bold tracking-wider text-slate/60 hover:text-navy transition-colors"
                >
                  {p}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Common Inquiries */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Common Inquiries"
            title="What partners ask us first"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {inquiries.map((q, i) => (
              <Reveal key={q.name} delay={i * 0.1}>
                <div className="card h-full">
                  <Quote className="w-8 h-8 text-primary-brand/40 mb-4" />
                  <p className="text-navy text-lg leading-relaxed mb-6 text-balance">
                    "{q.quote}"
                  </p>
                  <div className="pt-4 border-t border-light-gray">
                    <div className="font-semibold text-navy">{q.name}</div>
                    <div className="text-sm text-slate">{q.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner form */}
      <section id="become" className="py-section-lg">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Become a Partner"
                title="Start the conversation"
                description="Tell us a little about your organisation and what you're hoping to build. A partnership lead will follow up within two business days."
              />
            </div>
            <Reveal className="lg:col-span-7">
              <form className="card space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-light-gray bg-white focus:outline-none focus:ring-2 focus:ring-primary-brand/30 focus:border-primary-brand"
                      placeholder="Your organisation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Sector
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-light-gray bg-white focus:outline-none focus:ring-2 focus:ring-primary-brand/30 focus:border-primary-brand">
                      <option>Government</option>
                      <option>University</option>
                      <option>Corporate</option>
                      <option>NGO</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-light-gray bg-white focus:outline-none focus:ring-2 focus:ring-primary-brand/30 focus:border-primary-brand"
                    placeholder="name@organisation.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Tell us about the partnership you have in mind
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-light-gray bg-white focus:outline-none focus:ring-2 focus:ring-primary-brand/30 focus:border-primary-brand resize-none"
                    placeholder="A short paragraph is enough — we'll take it from there."
                  />
                </div>
                <button
                  type="button"
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  Submit Inquiry
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      
      {/* DARK CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 grid-pattern-bg opacity-[0.03] pointer-events-none" />

          <div className="relative container-xl py-20 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Build the Next Chapter{" "}
              <span className="text-accent-purple">With Us.</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Partner with Luminyx to compound impact across the African ecosystem â€” across sectors, geographies and generations.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Contact Partnerships <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/ecosystem" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors">
                Explore Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
