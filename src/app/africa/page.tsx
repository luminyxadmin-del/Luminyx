"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Zap,
  Building2,
  Globe2,
  Cpu,
  Plane,
  GraduationCap,
  Server,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";
import { IMAGES } from "@/lib/constants";

const PILLARS = [
  {
    icon: Users,
    title: "Youth Population",
    desc: "With over 70% of the population under 30, the region is home to a massive pool of future tech talent and digital consumers.",
  },
  {
    icon: Zap,
    title: "Digital Acceleration",
    desc: "Mobile penetration has skipped legacy infrastructure, creating a fertile ground for AI-first fintech, agritech, and logistics solutions.",
  },
  {
    icon: Building2,
    title: "Trade Synergy",
    desc: "Enhanced regional cooperation through the EAC and AfCFTA is unlocking cross-border trade like never before.",
  },
];

const PILLARS_STRATEGIC = [
  {
    icon: Globe2,
    title: "Digital Transformation",
    desc: "Modernizing legacy industries through cloud-native AI solutions and seamless digital ID protocols.",
    color: "from-primary-brand to-accent-purple",
  },
  {
    icon: Plane,
    title: "Tourism",
    desc: "Sustainable tourism platforms using AI for wildlife protection and culture-first guest experiences.",
    color: "from-indigo-accent to-primary-brand",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Localized learning management systems for rural connectivity and AI-driven skill mapping.",
    color: "from-accent-purple to-info",
  },
  {
    icon: Server,
    title: "Deep Tech R&D",
    desc: "Developing African LLMs and localized data centers across 12 strategic nodes.",
    color: "from-primary-dark to-primary-brand",
  },
];

const SUCCESS_STORIES = [
  {
    title: "Vertical Oasis Nairobi",
    location: "Kenya · AgriTech",
    desc: "Increased urban crop yield by 380% using Luminyx Edge AI controllers.",
    image: IMAGES.fintech,
  },
  {
    title: "Kigali Innovation City",
    location: "Rwanda · Smart City",
    desc: "Luminyx provided the core 5,000 backbone for the nation's premier tech hub.",
    image: IMAGES.techCity,
  },
  {
    title: "Abyssinia Solar Grid",
    location: "Ethiopia · Energy",
    desc: "Decentralized smart-grid management for 800,000 households.",
    image: IMAGES.solar,
  },
];

export default function AfricaPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Group / <span className="text-accent-purple">Africa</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Globe2 className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">AFRICA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Africa Is Not a Market.{" "}
                <span className="text-accent-purple">It&apos;s a Mandate.</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                Africa is the foundational context around which our entire firm was built. We are not a global firm with an Africa practice â€” we are an African-native intelligence infrastructure with global reach.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/ecosystem" className="btn-primary">
                  Explore Africa Strategy <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/partners" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "12", label: "Active Countries" },
                { value: "$4.2T", label: "Projected GDP 2030" },
                { value: "62M", label: "Formal Jobs by 2035" },
                { value: "240+", label: "Govt Engagements" },
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

      {/* WHY EAST AFRICA */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="The Opportunity"
            title="Why East Africa?"
            description="The region represents the world's most significant digital acceleration opportunity, fueled by a young, tech-native workforce and stable institutional growth."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="card card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                    <p.icon className="w-5 h-5 text-primary-brand" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {p.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATION CORRIDOR */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal direction="right" className="lg:col-span-6">
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-light-gray">
                <Image
                  src={IMAGES.africaMap}
                  alt="East African Innovation Corridor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-primary-brand/20" />

                {/* Map markers */}
                {[
                  { top: "35%", left: "55%", label: "Nairobi" },
                  { top: "30%", left: "48%", label: "Kampala" },
                  { top: "42%", left: "52%", label: "Kigali" },
                  { top: "22%", left: "58%", label: "Addis Ababa" },
                  { top: "48%", left: "60%", label: "Dar es Salaam" },
                ].map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="absolute"
                    style={{ top: m.top, left: m.left }}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-primary-brand ring-4 ring-primary-brand/30" />
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="glass rounded-md px-2 py-1 text-xs font-medium">
                          {m.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-6">
              <div className="chip mb-5">East African Corridor</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
                The East African{" "}
                <span className="gradient-text">Innovation Corridor</span>
              </h2>
              <div className="mt-10 space-y-7">
                {[
                  {
                    n: "01",
                    title: "Regional Connectivity",
                    desc: "Cross-border fiber optics projects led by Luminyx have reduced latency by 40% across the 5 core nations.",
                  },
                  {
                    n: "02",
                    title: "Policy Harmonization",
                    desc: "Working with EAC governments to create a unified data protection and AI governance framework.",
                  },
                  {
                    n: "03",
                    title: "Talent Incubation",
                    desc: "Our 'Future Builders' program has already certified 15,000 developers in AI and blockchain technologies.",
                  },
                ].map((p) => (
                  <div key={p.n} className="flex gap-5">
                    <div className="font-mono text-2xl font-bold text-primary-brand/30 flex-shrink-0">
                      {p.n}
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-semibold text-navy mb-1">
                        {p.title}
                      </h4>
                      <p className="text-slate">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-section bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-bg opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-primary-brand/15 blur-3xl" />

        <div className="container-xl relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "$1.4B", label: "Capital Velocity" },
              { value: "69%", label: "Internet Penetration" },
              { value: "75%", label: "Youth Literacy" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div>
                  <div className="font-display text-5xl md:text-7xl font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-widest text-white/60">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC PILLARS */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Strategic Pillars"
            title="Our Focus Areas"
            description="Four core focuses for regional integration and sustainable development."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS_STRATEGIC.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card card-hover p-7 h-full group">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 shadow-card-soft`}
                  >
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="max-w-xl">
              <div className="chip mb-5">Real Impact</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
                Success Stories
              </h2>
              <p className="mt-4 text-slate">
                Real partnerships, real results across the continent.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="text-xs uppercase tracking-widest text-accent-purple font-medium mb-2">
                      {s.location}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
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
              Let&apos;s Build Africa&apos;s Next-Generation{" "}
              <span className="text-accent-purple">Opportunity Infrastructure.</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              We are not a global firm with an Africa practice. We are an African-native intelligence infrastructure with global reach â€” and we are looking for partners who share that conviction.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Become a Partner <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors">
                Request Strategic Discussion
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
