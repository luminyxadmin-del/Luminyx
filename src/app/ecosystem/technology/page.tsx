"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Database,
  Users,
  Shield,
  BarChart2,
  Eye,
  Lock,
  FileText,
  Building,
  Globe,
  Briefcase,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";

const STATS = [
  { value: "1.4M+", label: "Data Points Daily" },
  { value: "99.97%", label: "Platform Uptime" },
  { value: "47", label: "Active Integrations" },
  { value: "<200ms", label: "API Response Time" },
  { value: "14", label: "Compliance Layers" },
  { value: "5", label: "Intelligence Modules" },
];

const MODULES = [
  {
    icon: Brain,
    title: "Ecosystem AI",
    description:
      "The central reasoning engine that synthesises insights across all five divisions and generates cross-divisional intelligence briefings in real time.",
  },
  {
    icon: Database,
    title: "Data Mesh Engine",
    description:
      "A distributed data architecture that enables each division to own its data while making it composable at the platform level for cross-divisional analysis.",
  },
  {
    icon: Users,
    title: "Talent Orchestrator",
    description:
      "The automated system coordinating candidate pipelines, job briefs, compliance checks, and onboarding workflows across all active markets simultaneously.",
  },
  {
    icon: Shield,
    title: "Compliance Navigator",
    description:
      "Real-time regulatory intelligence layer monitoring policy changes across 14 jurisdictions and flagging impacts on active engagements within hours.",
  },
  {
    icon: BarChart2,
    title: "Impact Analytics",
    description:
      "Longitudinal outcome tracking across all client engagements, generating dashboards and executive reports aligned to agreed KPIs and impact metrics.",
  },
];

const ARCH_LAYERS = [
  {
    number: "01",
    name: "Data Ingestion",
    description:
      "Structured and unstructured data flows from all divisions, client systems, and external market feeds are normalised and enriched in real time.",
  },
  {
    number: "02",
    name: "Intelligence Processing",
    description:
      "Machine learning models and rule-based engines analyse ingested data to generate signals, scores, and alerts that surface across all five divisions.",
  },
  {
    number: "03",
    name: "Orchestration Layer",
    description:
      "Workflow automation coordinates multi-step processes â€” from candidate pipelines to regulatory filings â€” without manual handoffs between systems.",
  },
  {
    number: "04",
    name: "Integration Gateway",
    description:
      "A unified API layer enables secure, authenticated connections to client systems, government databases, and third-party platforms across all corridors.",
  },
  {
    number: "05",
    name: "Compliance Framework",
    description:
      "Every data movement and process execution is logged, audited, and measured against the regulatory requirements of each active jurisdiction.",
  },
  {
    number: "06",
    name: "Feedback Loop",
    description:
      "Outcome data from completed engagements flows back into the intelligence models, continuously improving prediction accuracy across all modules.",
  },
];

const TRUST_CARDS = [
  {
    icon: ShieldCheck,
    title: "Data Residency",
    description:
      "Client data remains within the jurisdiction boundaries specified at engagement initiation, with contractual residency guarantees and audit-ready logs.",
  },
  {
    icon: Eye,
    title: "Model Transparency",
    description:
      "All AI-generated recommendations include full explainability outputs â€” no black-box decisions are ever surfaced in client-facing processes.",
  },
  {
    icon: Lock,
    title: "Access Controls",
    description:
      "Role-based access, multi-factor authentication, and zero-trust network architecture protect every touchpoint in the platform.",
  },
  {
    icon: FileText,
    title: "Audit Trails",
    description:
      "Complete, immutable audit logs of every data access, recommendation, and workflow execution â€” available for regulatory review on demand.",
  },
];

const STAKEHOLDERS = [
  {
    icon: Building,
    title: "Government Ministries",
    description:
      "Real-time policy impact dashboards, workforce intelligence, and cross-agency data sharing on a secure sovereign platform with full data residency controls.",
  },
  {
    icon: Briefcase,
    title: "Development Finance Institutions",
    description:
      "Portfolio company analytics, talent pipeline visibility, and regulatory risk flags across all active investment corridors and geographies.",
  },
  {
    icon: Globe,
    title: "Private Sector Anchors",
    description:
      "Integrated talent, compliance, and market intelligence unified into a single executive command view spanning all five divisions.",
  },
  {
    icon: GraduationCap,
    title: "Academic Institutions",
    description:
      "Outcome tracking, employer network analytics, and programme performance benchmarking against live industry demand signals.",
  },
];

function NodeDiagram() {
  const nodes = [
    { label: "Advisory", top: "8%", left: "50%" },
    { label: "Education", top: "34%", left: "88%" },
    { label: "Technology", top: "78%", left: "72%" },
    { label: "Mobility", top: "78%", left: "28%" },
    { label: "Talent", top: "34%", left: "12%" },
  ];

  return (
    <div className="relative w-full max-w-xs mx-auto h-64 select-none">
      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-14 h-14 rounded-full bg-gradient-primary-brand flex items-center justify-center shadow-[0_0_36px_rgba(109,40,217,0.5)]">
          <Brain className="w-6 h-6 text-navy" />
        </div>
        <div
          className="absolute inset-0 rounded-full border border-primary-brand/30 scale-150 animate-ping opacity-60"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute inset-0 rounded-full border border-accent-purple/15 scale-[2.8] animate-ping opacity-40"
          style={{ animationDuration: "3s", animationDelay: "0.6s" }}
        />
      </div>

      {nodes.map((node, i) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: node.top, left: node.left }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
            className="w-11 h-11 rounded-full bg-white border border-light-gray flex items-center justify-center shadow-[0_0_12px_rgba(167,139,250,0.15)]"
          >
            <span className="text-[8px] font-bold text-slate text-center leading-tight px-0.5">
              {node.label}
            </span>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default function TechnologyPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Group / <span className="text-white/50">Platform</span> / <span className="text-accent-purple">Technology</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Brain className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">TECHNOLOGY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                The Intelligence Layer Behind{" "}
                <span className="text-accent-purple">Every Luminyx Decision</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                A unified AI infrastructure that connects education, talent, mobility, and advisory into one continuously learning system â€” turning data from emerging markets into actionable intelligence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Request a Demo <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "3M+", label: "Profiles Indexed" },
                { value: "1,000+", label: "Institutions Mapped" },
                { value: "54", label: "Markets Covered" },
                { value: "94%", label: "Placement Rate" },
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

      {/* â”€â”€â”€ INTELLIGENCE MODULES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Modules</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Five Intelligence Modules
              </h2>
              <p className="text-ink-muted max-w-xl text-lg leading-relaxed">
                Each module is purpose-built for a specific intelligence function
                and fully composable with the others.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {MODULES.map((mod, i) => (
              <CapabilityCard
                key={mod.title}
                icon={mod.icon}
                title={mod.title}
                description={mod.description}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ ARCHITECTURE LAYERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-section-lg bg-bg-subtle">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Architecture</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1]">
                Platform Architecture
              </h2>
            </motion.div>
          </div>

          <div className="space-y-3">
            {ARCH_LAYERS.map((layer, i) => (
              <motion.div
                key={layer.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-white border border-light-gray hover:border-accent-purple/20 transition-colors group"
              >
                <div className="text-xs font-mono text-primary-brand font-bold tracking-widest mt-1 w-6 shrink-0">
                  {layer.number}
                </div>
                <div className="w-px self-stretch bg-accent-purple/20 group-hover:bg-accent-purple/40 transition-colors hidden sm:block" />
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-navy mb-1.5">{layer.name}</h3>
                  <p className="text-sm text-slate leading-relaxed">{layer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ TRUST & SECURITY (NEW SECTION) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Security</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Trust &amp; Security by Design
              </h2>
              <p className="text-ink-muted max-w-xl mx-auto text-lg leading-relaxed">
                Enterprise infrastructure requires enterprise-grade assurance.
                Every layer of the Luminyx Platform is designed for institutional
                accountability.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_CARDS.map((card, i) => (
              <CapabilityCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ STAKEHOLDER USE CASES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-section-lg bg-bg-subtle">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Use Cases</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1]">
                Built for Every Stakeholder
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STAKEHOLDERS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl p-7 bg-white border border-light-gray"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-brand/10 border border-primary-brand/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{s.description}</p>
                </motion.div>
              );
            })}
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
              See the Platform{" "}
              <span className="text-accent-purple">in Action.</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Book a platform walkthrough with our technical team. We will show you how the five modules would be configured for your specific operational context.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Request a Demo <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/ecosystem" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors">
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

