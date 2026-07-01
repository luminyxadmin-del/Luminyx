"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Lightbulb,
  TrendingUp,
  Target,
  Eye,
  ArrowUpRight,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/constants";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We don't just follow trends; we define them. Our team consistently pushes the boundaries of what AI can achieve in a hybrid context.",
  },
  {
    icon: Target,
    title: "Integrity",
    desc: "Trust is our primary currency. We operate with radical transparency, and a commitment to data ethics and sovereignty.",
  },
  {
    icon: TrendingUp,
    title: "Regional Growth",
    desc: "Our success is measured by the prosperity of the communities we serve. Local empowerment is at the heart of every algorithm.",
  },
];

const FOUNDERS = [
  {
    name: "Dr. Amara Okafor",
    role: "CEO & Co-Founder",
    bio: "Former AI Lead at Global Tech, driving regional strategy.",
    image: IMAGES.founder1,
  },
  {
    name: "Kofi Mensah",
    role: "CTO",
    bio: "Pioneer in decentralized cloud systems and data security.",
    image: IMAGES.founder2,
  },
  {
    name: "Sarah van Wyk",
    role: "Head of Design",
    bio: "Architect of the Lumina design system and user experience.",
    image: IMAGES.founder3,
  },
  {
    name: "Babajide Adeyemi",
    role: "Head of Operations",
    bio: "Scaling logistics and partnerships across the SADC region.",
    image: IMAGES.founder4,
  },
];

const ROADMAP = [
  { phase: "Phase 01", title: "Pan-African AI", desc: "Universal translation and context-aware AI models for every African language." },
  { phase: "Phase 02", title: "Green Infra", desc: "100% solar-powered regional data centers launched across the Sahara." },
  { phase: "Phase 03", title: "Quantum Nodes", desc: "Implementing quantum-resistant encryption for all enterprise financial data." },
  { phase: "Phase 04", title: "Space-Sync", desc: "Satellite-terrestrial networks for 99.9% uptime in remote regions." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-bg opacity-40 -z-10" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-primary-brand/10 rounded-full blur-3xl -z-10" />

        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="chip mb-6">
                <Eye className="w-3.5 h-3.5" />
                Our Vision
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-navy">
                Our Vision for a Connected{" "}
                <span className="gradient-text">Africa</span>
              </h1>
              <p className="mt-6 text-lg text-slate max-w-xl leading-relaxed">
                Luminyx is architecting the digital backbone for Africa&apos;s
                enterprise ecosystem. We leverage advanced AI to transform
                complexity into opportunity, empowering a new generation of
                regional leaders.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/ecosystem" className="btn-primary">
                  Explore the Ecosystem
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="#story" className="btn-secondary">
                  Watch the Story
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-light-gray shadow-elevated">
                <Image
                  src={IMAGES.techCity}
                  alt="African city skyline at sunset"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-widest text-slate mb-1">
                    Impact Report 2024
                  </div>
                  <div className="font-display text-2xl font-bold gradient-text">
                    +240% Growth in Regional Connectivity
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-section bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card p-10 h-full relative overflow-hidden group">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-brand/5 rounded-full blur-2xl group-hover:bg-primary-brand/15 transition-colors" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                    <Rocket className="w-6 h-6 text-primary-brand" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-navy mb-4">
                    Our Mission
                  </h3>
                  <p className="text-slate leading-relaxed text-lg">
                    To bridge the technological gap by providing high-fidelity,
                    AI-driven infrastructure that accelerates enterprise growth
                    across all African borders, ensuring no industry is left behind
                    in the digital age.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="p-10 h-full rounded-3xl bg-primary-dark text-white relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-brand/30 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4">
                    Our Vision
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    A future where Africa is the global hub for innovation, where
                    technology flows as freely as opportunity, and where Luminyx
                    serves as the central nervous system for a thriving,
                    interconnected continent.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Foundation"
            title="Our Core Values"
            description="The principles that anchor every decision and every line of code we ship."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="card card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary-brand flex items-center justify-center mb-6">
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {v.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS JOURNEY */}
      <section id="story" className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="chip mb-5">Founder&apos;s Journey</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-navy leading-[1.05]">
                  The <span className="gradient-text">Founders&apos;</span> Journey
                </h2>
                <p className="mt-5 text-slate leading-relaxed">
                  From a single Nairobi co-working space to the continent&apos;s
                  most influential ecosystem — every line of our story is written
                  with purpose.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-10">
              {[
                {
                  year: "2018",
                  title: "The Genesis",
                  desc: "Founded in a small lab in Nairobi with a vision to automate logistics via neural networks.",
                  image: IMAGES.nairobi,
                },
                {
                  year: "2021",
                  title: "Continental Pivot",
                  desc: "Expansion into West Africa and the launch of our proprietary AI-core, Luminyx Lumina.",
                  image: IMAGES.africaGlobe,
                },
                {
                  year: "2024",
                  title: "Market Leadership",
                  desc: "Named the #1 Enterprise AI Ecosystem in Africa, serving over 500 major corporations across 12 countries.",
                  image: IMAGES.dashboard,
                },
              ].map((event, i) => (
                <Reveal key={event.year} delay={i * 0.1}>
                  <div className="card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-full md:w-48 h-40 md:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 192px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-sm font-bold text-primary-brand mb-1">
                        {event.year}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-navy mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate">{event.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <div className="chip mb-5">Leadership</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
                Meet the Team
              </h2>
              <p className="mt-4 text-lg text-slate">
                Guided by a diverse team of industry veterans, engineers, and
                visionaries committed to Africa&apos;s potential.
              </p>
            </div>
            <Link href="/partners" className="btn-secondary self-start">
              View All Team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <div className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-navy"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-navy"
                      >
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <h4 className="font-display text-lg font-bold text-navy">
                    {f.name}
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-primary-brand font-medium mt-0.5">
                    {f.role}
                  </p>
                  <p className="text-sm text-slate mt-2 leading-relaxed">
                    {f.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKING AHEAD - ROADMAP */}
      <section className="py-section-lg bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-purple/20 blur-[120px] rounded-full" />

        <div className="container-xl relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="chip !bg-white/10 !text-white mb-5 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              The Future
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Looking <span className="text-accent-purple">Ahead</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Our roadmap is ambitious. We are building the future of African
              commerce, one node at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROADMAP.map((r, i) => (
              <Reveal key={r.phase} delay={i * 0.08}>
                <div className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-brand/40 transition-all">
                  <div className="font-mono text-xs text-accent-purple font-bold tracking-widest mb-4">
                    {r.phase}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Build the Future With Us"
        description="Whether you're looking to partner, invest, or join our world-class team — we're ready to connect."
        primaryCta={{ label: "Contact Our Team", href: "/contact" }}
        secondaryCta={{ label: "Join the Career Portal", href: "/partners" }}
      />
    </>
  );
}
