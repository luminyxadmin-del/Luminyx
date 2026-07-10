"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Monitor,
  Award,
  Handshake,
  LineChart,
  CheckCircle2,
} from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";

const CAPABILITIES = [
  {
    icon: GraduationCap,
    title: "Curriculum Architecture",
    description:
      "Evidence-based redesign of degree and diploma programmes aligned to industry demand signals and emerging skills gaps across target markets.",
  },
  {
    icon: Briefcase,
    title: "Industry Alignment",
    description:
      "Building structured linkages between institutions and employer networks to ensure graduates meet actual hiring requirements in priority sectors.",
  },
  {
    icon: Monitor,
    title: "Digital Delivery",
    description:
      "Deploying blended and fully online learning environments that extend institutional reach without compromising academic quality or learner outcomes.",
  },
  {
    icon: Award,
    title: "Micro-Credentialing",
    description:
      "Designing stackable, industry-recognised credentials that allow learners to signal competence at every career stage — not just at graduation.",
  },
  {
    icon: Handshake,
    title: "Employer Integration",
    description:
      "Embedding employers into curriculum design, assessment panels, and placement processes from day one to ensure graduates are ready on arrival.",
  },
  {
    icon: LineChart,
    title: "Outcomes Measurement",
    description:
      "Designing graduate tracking systems and employer feedback loops that provide institutions with longitudinal impact data to drive continuous improvement.",
  },
];

const HOW_STEPS = [
  {
    number: "01",
    title: "Diagnostic",
    description:
      "We map the current state of your programme portfolio against market demand, employer expectations, and graduate outcome data.",
  },
  {
    number: "02",
    title: "Co-design",
    description:
      "Luminyx facilitators work with faculty, industry councils, and employer partners to rebuild curriculum from evidence-based first principles.",
  },
  {
    number: "03",
    title: "Pilot",
    description:
      "A selected cohort runs the redesigned programme with real-time feedback loops, employer mentoring, and weekly outcome tracking.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Successful pilots are systematically deployed across the institution with staff training, quality assurance, and monitoring infrastructure.",
  },
];

const PARTNERS = [
  {
    name: "Ashoka Business Consortium",
    tag: "Strategy & Management programmes",
  },
  {
    name: "East African Skills Authority",
    tag: "Technical & vocational frameworks",
  },
  {
    name: "Southern Universities Network",
    tag: "Research & postgraduate alignment",
  },
  {
    name: "GCC Employment Council",
    tag: "Industry connector for Gulf-market placements",
  },
];

const OUTCOME_KPIS = [
  {
    value: "87%",
    label: "Graduate Placement Rate",
    trend: "12pp vs prior cohort",
    trendUp: true,
  },
  {
    value: "4.2 mo",
    label: "Avg Time-to-Employment",
    trend: "1.8 months faster",
    trendUp: false,
  },
  {
    value: "140+",
    label: "Programmes Redesigned",
    trend: "across 6 sectors",
    trendUp: true,
  },
  {
    value: "94%",
    label: "Employer Satisfaction",
    trend: "across 220 hiring partners",
    trendUp: true,
  },
];

export default function EducationPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Group / <span className="text-white/50">Ecosystem</span> / <span className="text-accent-purple">Education Advisory</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <GraduationCap className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">EDUCATION ADVISORY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connecting Institutions to{" "}
                <span className="text-accent-purple">Employment Outcomes</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We map the full journey from academic programme to employed graduate — using AI to align institutional supply with real employer demand across Africa, India, and the Middle East.
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
              {[
                { value: "1,000+", label: "Partner Institutions" },
                { value: "54", label: "African Markets" },
                { value: "3x", label: "Employment Improvement" },
                { value: "12", label: "Active Countries" },
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

      {/* CAPABILITIES */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">What We Do</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Six Core Capabilities
              </h2>
              <p className="text-ink-muted max-w-xl text-lg leading-relaxed">
                Every institution we work with receives a tailored combination of
                these capabilities, sequenced to match their maturity and goals.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((c, i) => (
              <CapabilityCard
                key={c.title}
                icon={c.icon}
                title={c.title}
                description={c.description}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES SNAPSHOT */}
      <section className="py-section-lg bg-bg-subtle">
        <div className="container-xl">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Outcomes Snapshot</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Results That Speak
              </h2>
              <p className="text-ink-muted max-w-xl mx-auto text-lg leading-relaxed">
                Illustrative metrics from programmes delivered over the last 24 months.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OUTCOME_KPIS.map((kpi) => (
              <motion.div
                key={kpi.label}
                whileHover={{ y: -4 }}
                style={{ opacity: 1 }}
                className="rounded-2xl p-6 bg-white border border-light-gray backdrop-blur-sm"
              >
                <div className="font-display text-3xl md:text-4xl font-bold mb-1" style={{ color: "#6D28D9" }}>
                  {kpi.value}
                </div>
                <div className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: "#4B5563" }}>
                  {kpi.label}
                </div>
                <div className={`text-xs font-medium flex items-center gap-1 ${kpi.trendUp ? "text-success" : "text-amber"}`}>
                  {kpi.trendUp ? "↑" : "↓"} {kpi.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Our Process</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1]">
                How It Works
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              {HOW_STEPS.map((step) => (
                <motion.div
                  key={step.number}
                  whileHover={{ x: 4 }}
                  style={{ opacity: 1 }}
                  className="flex gap-5 p-6 rounded-2xl bg-white border border-light-gray"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full shrink-0 font-mono text-xs font-bold" style={{ background: "#F5F3FF", color: "#6D28D9" }}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold mb-1.5" style={{ color: "#111827" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-5">
              <h3 className="font-display text-xl font-bold mb-6" style={{ color: "#111827" }}>
                Institutional Partners
              </h3>
              <div className="space-y-3">
                {PARTNERS.map((p) => (
                  <motion.div
                    key={p.name}
                    whileHover={{ x: 4 }}
                    style={{ opacity: 1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-light-gray"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0" style={{ background: "#F5F3FF" }}>
                      <CheckCircle2 className="w-4 h-4" style={{ color: "#6D28D9" }} />
                    </div>
                    <div>
                      <div className="font-display text-sm font-semibold" style={{ color: "#111827" }}>{p.name}</div>
                      <div className="text-xs mt-0.5 italic" style={{ color: "#6B7280" }}>{p.tag}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Ready to Connect Your Institution to{" "}
              <span className="text-accent-purple">Africa&apos;s Opportunity?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              We offer a complimentary diagnostic assessment for qualified institutions. Learn what a Luminyx partnership could unlock for your learners and employer partners.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Start a Conversation <ArrowUpRight className="w-4 h-4" />
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
