"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Globe,
  Users,
  BarChart2,
  Telescope,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";

const IMPACT_AREAS = [
  {
    icon: BrainCircuit,
    title: "Policy Architecture",
    description:
      "Structuring policy frameworks that align regulatory objectives with market realities across sectors and jurisdictions.",
  },
  {
    icon: Building2,
    title: "Institutional Capacity Building",
    description:
      "Strengthening the internal capabilities of public institutions to drive evidence-based, sustainable reform.",
  },
  {
    icon: Globe,
    title: "Digital Governance",
    description:
      "Designing governance models for AI adoption, data sovereignty, and digital public infrastructure at national scale.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Equipping senior officials and executives with the decision-making tools required for complex, cross-border mandates.",
  },
  {
    icon: BarChart2,
    title: "Regulatory Intelligence",
    description:
      "Continuous monitoring of regulatory shifts across 14 jurisdictions, delivered as actionable executive briefings.",
  },
  {
    icon: Telescope,
    title: "Strategic Foresight",
    description:
      "Scenario planning and futures research tailored to the strategic planning cycles of institutional leaders.",
  },
];

const ENGAGEMENT_MODELS = [
  {
    duration: "3–6 Weeks",
    title: "Diagnostic Sprint",
    description:
      "A rapid, focused assessment of your institutional capacity, regulatory position, and strategic gaps — delivered as an executive briefing and action roadmap. Ideal for organisations entering a new phase of reform or market engagement.",
    features: [
      "Institutional capacity audit",
      "Regulatory gap analysis",
      "Executive briefing document",
      "Action roadmap with 90-day priorities",
    ],
  },
  {
    duration: "3–12 Months",
    title: "Embedded Advisory",
    description:
      "A senior Luminyx advisor joins your leadership team on a part-time basis, providing continuous strategic guidance aligned to live decision cycles. Best suited for organisations navigating active transformation.",
    features: [
      "Dedicated senior advisor (2 days/week)",
      "Monthly strategy reviews",
      "Regulatory monitoring & alerts",
      "Leadership workshop series",
    ],
  },
  {
    duration: "12–36 Months",
    title: "Strategic Partnership",
    description:
      "A comprehensive, long-range engagement covering policy design, capacity building, and regulatory intelligence — structured around your institutional planning horizon and compounding in value over time.",
    features: [
      "Full advisory team deployment",
      "Custom programme design",
      "Stakeholder mapping & engagement",
      "Quarterly board-level reporting",
    ],
  },
];

const CLIENT_TYPES = [
  {
    title: "Ministries & Public Agencies",
    description:
      "Policy reform, digital government strategy, inter-agency alignment, and regulatory framework design.",
  },
  {
    title: "Development Finance Institutions",
    description:
      "Portfolio strategy, market-entry intelligence, investee capacity building, and impact measurement.",
  },
  {
    title: "Multilateral Organisations",
    description:
      "Programme design, country diagnostics, regional strategy, and stakeholder coordination support.",
  },
  {
    title: "Private Sector Anchors",
    description:
      "Market access advisory, regulatory navigation, government relations, and strategic stakeholder mapping.",
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
            Luminyx Group / <span className="text-white/50">Ecosystem</span> / <span className="text-accent-purple">AI Advisory</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <BrainCircuit className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">AI ADVISORY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Policy Intelligence and Institutional{" "}
                <span className="text-accent-purple">Readiness</span> at Scale
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We work with government ministries, development institutions, and private sector anchors to build the analytical capacity and decision-making infrastructure needed for the next decade.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Start an Engagement <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  Download Advisory Brief
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "42", label: "Govt Engagements" },
                { value: "19", label: "Countries" },
                { value: "380+", label: "Senior Leaders Trained" },
                { value: "94%", label: "Client Retention Rate" },
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

      {/* IMPACT AREAS */}
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
                Six Impact Areas
              </h2>
              <p className="text-ink-muted max-w-xl text-lg leading-relaxed">
                Our advisory practice is organised around the six capabilities
                that institutions most frequently need when navigating complex,
                cross-border mandates.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {IMPACT_AREAS.map((area, i) => (
              <CapabilityCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-section-lg bg-bg-subtle">
        <div className="container-xl">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">How We Work</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Engagement Models
              </h2>
              <p className="text-ink-muted max-w-xl mx-auto text-lg leading-relaxed">
                We structure our advisory relationships to match the scale and
                urgency of your mandate.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl p-8 bg-white border border-light-gray overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-brand/[0.06] blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-brand/15 text-accent-purple mb-5">
                    <Clock className="w-3 h-3" />
                    {model.duration}
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">{model.title}</h3>
                  <p className="text-sm text-slate leading-relaxed mb-6">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <CheckCircle2 className="w-4 h-4 text-primary-brand/70 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Our Clients</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1]">
                Who Engages Us
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLIENT_TYPES.map((client, i) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-6 bg-white border border-light-gray"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-brand/10 border border-primary-brand/20 mb-4" />
                <h3 className="font-display text-base font-semibold text-navy mb-2">{client.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{client.description}</p>
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
              Ready to Commission an{" "}
              <span className="text-accent-purple">Advisory Engagement?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              We begin every engagement with a structured intake session. Book your 60-minute intake call today — no obligation, no sales pitch.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Book an Intake Call <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/ecosystem" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
