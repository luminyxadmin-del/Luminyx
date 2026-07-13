"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  ScrollText,
  Rocket,
  Users2,
  Search,
} from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";

const STATS = [
  { value: "18", label: "Govt Engagements" },
  { value: "$2B+", label: "Workforce Advised" },
  { value: "9", label: "Policy Frameworks" },
  { value: "35+", label: "Enterprise Clients" },
];

const CLIENT_TYPES = [
  { title: "Governments", description: "National and regional governments designing workforce and education policy." },
  { title: "Development Finance Institutions", description: "DFIs and multilaterals investing in human capital infrastructure." },
  { title: "Corporates", description: "Multinationals and regional enterprises building Africa-ready talent strategies." },
  { title: "Institutions", description: "Universities and training providers transforming for the future of work." },
];

const CAPABILITIES = [
  {
    icon: BrainCircuit,
    title: "Workforce Strategy",
    description:
      "Data-driven workforce planning for governments and enterprises — mapping current capability against future labour market demand.",
  },
  {
    icon: Building2,
    title: "Institutional Transformation",
    description:
      "Operating model redesign for ministries, agencies, and large institutions navigating digital and AI-led transformation.",
  },
  {
    icon: ScrollText,
    title: "Policy Advisory",
    description:
      "Evidence-based policy frameworks covering workforce regulation, education-to-employment pathways, and AI governance.",
  },
  {
    icon: Rocket,
    title: "Innovation Ecosystems",
    description:
      "Designing innovation zones, sovereign AI programmes, and public-private partnership structures that compound over time.",
  },
  {
    icon: Users2,
    title: "Leadership Development",
    description:
      "Executive and senior civil service development programmes built around real institutional transformation mandates.",
  },
  {
    icon: Search,
    title: "Research & Intelligence",
    description:
      "Proprietary labour market and policy research that underpins every recommendation with primary data, not assumption.",
  },
];

export default function AdvisoryPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Ventures / <span className="text-white/50">Ecosystem</span> / <span className="text-accent-purple">AI Advisory</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <BrainCircuit className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">LUMINYX AI ADVISORY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Strategic Intelligence for{" "}
                <span className="text-accent-purple">Workforce Transformation</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We advise governments, development finance institutions, and large enterprises on workforce strategy, policy frameworks, and AI-led transformation across emerging markets.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Partner With Us <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/ecosystem" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  View All Divisions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Capabilities</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Six Advisory Capabilities
              </h2>
              <p className="text-ink-muted max-w-xl text-lg leading-relaxed">
                From first diagnostic to embedded transformation — we cover the
                full arc of institutional change.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap, i) => (
              <CapabilityCard
                key={cap.title}
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-16 bg-bg-subtle">
        <div className="container-xl">
          <div className="mb-12">
            <div className="chip mb-4 inline-flex">Our Clients</div>
            <h2 className="font-display text-4xl md:text-[44px] font-bold tracking-tight leading-[1.1] mb-4" style={{ color: "#111827" }}>
              Who We Work With
            </h2>
            <p className="max-w-xl text-lg leading-relaxed" style={{ color: "#4B5563" }}>
              Four client types, one advisory model — calibrated to the mandate and
              pace of each institution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CLIENT_TYPES.map((c) => (
              <motion.div
                key={c.title}
                whileHover={{ y: -4 }}
                style={{ background: "#ffffff", border: "1px solid rgba(109,40,217,0.1)", borderRadius: "1rem", padding: "1.75rem", opacity: 1 }}
              >
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#111827" }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>{c.description}</p>
              </motion.div>
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
              Ready to Transform{" "}
              <span className="text-accent-purple">Your Institution?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a ministry, a development institution, or an enterprise navigating AI-led change, we have the intelligence to guide it.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Get Started <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/ecosystem" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors">
                Explore Other Divisions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
