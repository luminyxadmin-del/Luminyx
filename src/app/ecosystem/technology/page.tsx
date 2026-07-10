"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Cpu,
  Route,
  LineChart,
  BarChart3,
  Workflow,
  Plane,
  Globe,
  Database,
  Brain,
  Share2,
  Plug,
  Shield,
  RefreshCw,
  Landmark,
  Briefcase,
  Building2,
  User,
} from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";

const STATS = [
  { value: "3M+", label: "Profiles Indexed" },
  { value: "1,000+", label: "Institutions Mapped" },
  { value: "54", label: "Markets Covered" },
  { value: "94%", label: "Placement Rate" },
];

const MODULES = [
  {
    icon: Route,
    title: "AI-Driven Matching",
    description:
      "Proprietary matching engine connecting candidates, institutions, and employers with precision informed by real-time market signal.",
  },
  {
    icon: LineChart,
    title: "Skill Intelligence",
    description:
      "Continuous mapping of emerging and declining skills across markets — feeding curriculum, hiring, and policy decisions alike.",
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    description:
      "Dashboards and forecasting tools that give governments and enterprises a live view of labour market supply and demand.",
  },
  {
    icon: Workflow,
    title: "Education-to-Employment Mapping",
    description:
      "End-to-end tracking from institutional enrolment through graduate outcome, closing the loop between training and hiring.",
  },
  {
    icon: Plane,
    title: "Mobility Intelligence",
    description:
      "Corridor-level data on cross-border talent movement, visa trends, and relocation patterns across our active markets.",
  },
  {
    icon: Globe,
    title: "Cross-Border Intelligence",
    description:
      "Real-time data on corridor movement, visa patterns, and regional labour market shifts across all active markets.",
  },
];

const LAYERS = [
  { icon: Database, title: "Data Layer", description: "Ingests signals from institutions, employers, governments in real time." },
  { icon: Brain, title: "Intelligence Layer", description: "ML models trained on emerging-market workforce data." },
  { icon: Share2, title: "Orchestration Layer", description: "Coordinates actions across all five divisions." },
  { icon: Plug, title: "Integration Layer", description: "APIs for institutional systems and employer HR platforms." },
  { icon: Shield, title: "Compliance Layer", description: "Built-in regulatory requirements for all active markets." },
  { icon: RefreshCw, title: "Feedback Layer", description: "Continuous outcome tracking closes the improvement loop." },
];

const STAKEHOLDERS = [
  { icon: Landmark, eyebrow: "Governments", title: "Evidence-based workforce policy", description: "Real-time labour market data informs policy decisions instead of stale census figures." },
  { icon: Briefcase, eyebrow: "Employers", title: "Identify high-potential candidates", description: "Find the right talent before they enter the traditional job market." },
  { icon: Building2, eyebrow: "Institutions", title: "Understand graduate outcomes", description: "See which programmes produce the strongest employment results, and why." },
  { icon: User, eyebrow: "Individuals", title: "The right opportunity, matched", description: "Intelligent matching connects skills and ambitions to real market demand." },
];

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
            Luminyx Group / <span className="text-white/50">Ecosystem</span> / <span className="text-accent-purple">Technology</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Cpu className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">LUMINYX TECHNOLOGY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                The Intelligence Layer Behind{" "}
                <span className="text-accent-purple">Every Luminyx Decision</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                A unified AI platform that aggregates data across all divisions — surfacing insights, automating workflows, and ensuring every engagement benefits from the full weight of cross-divisional intelligence.
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

      {/* MODULES */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="mb-12">
            <div className="chip mb-4 inline-flex">Platform</div>
            <h2 className="font-display text-4xl md:text-[44px] font-bold tracking-tight leading-[1.1] mb-4" style={{ color: "#111827" }}>
              Six Platform Modules
            </h2>
            <p className="max-w-xl text-lg leading-relaxed" style={{ color: "#4B5563" }}>
              Every module shares the same data layer — so intelligence gathered
              in one division compounds across every other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MODULES.map((mod) => (
              <CapabilityCard
                key={mod.title}
                icon={mod.icon}
                title={mod.title}
                description={mod.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BUILT IN LAYERS */}
      <section className="py-16 bg-bg-subtle">
        <div className="container-xl">
          <div className="mb-12">
            <div className="chip mb-4 inline-flex">Architecture</div>
            <h2 className="font-display text-4xl md:text-[44px] font-bold tracking-tight leading-[1.1] mb-4" style={{ color: "#111827" }}>
              Built in Layers
            </h2>
            <p className="max-w-xl text-lg leading-relaxed" style={{ color: "#4B5563" }}>
              Six layers, each doing one job well — together they form a single
              intelligence stack.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-light-gray overflow-hidden">
            {LAYERS.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                    padding: "24px",
                    borderBottom: i < LAYERS.length - 1 ? "1px solid #E5E7EB" : "none",
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0 rounded-full font-mono text-xs font-bold"
                    style={{ width: "36px", height: "36px", background: "#F5F3FF", color: "#6D28D9" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Icon className="w-5 h-5 shrink-0 mt-1" style={{ color: "#6D28D9" }} />
                  <div>
                    <h3 className="font-display text-base font-semibold mb-1" style={{ color: "#111827" }}>{layer.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>{layer.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE FOR EVERY STAKEHOLDER */}
      <section className="py-16">
        <div className="container-xl">
          <div className="mb-12">
            <div className="chip mb-4 inline-flex">Impact</div>
            <h2 className="font-display text-4xl md:text-[44px] font-bold tracking-tight leading-[1.1] mb-4" style={{ color: "#111827" }}>
              Intelligence for Every Stakeholder
            </h2>
            <p className="max-w-xl text-lg leading-relaxed" style={{ color: "#4B5563" }}>
              The same platform, four different vantage points — each one gets
              exactly the intelligence it needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STAKEHOLDERS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.eyebrow}
                  whileHover={{ y: -4 }}
                  style={{ opacity: 1, background: "#ffffff", border: "1px solid rgba(109,40,217,0.1)", borderRadius: "1rem", padding: "1.75rem" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-4 h-4" style={{ color: "#6D28D9" }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6D28D9" }}>{s.eyebrow}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#111827" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563" }}>{s.description}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: "#6D28D9" }}>
                    Explore <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
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
              Ready to See the{" "}
              <span className="text-accent-purple">Platform in Action?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Whether you need workforce analytics, matching infrastructure, or a full cross-divisional data layer — we can show you what it looks like live.
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
