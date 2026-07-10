"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Monitor,
  Globe,
  MapPin,
  Handshake,
  LineChart,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Market Entry Strategy",
    description:
      "You want to grow in a new country but don't know where to start. We've done it across nine African markets already. We help you understand the regulatory landscape, competitive positioning, and realistic enrollment potential before you commit.",
  },
  {
    icon: LineChart,
    title: "Enrollment Growth",
    description:
      "We built a sales organisation from 30 to 750 people that drove ZAR 1.5 billion in billing. We know how to build the teams, processes, and conversion systems that turn interest into enrolled students.",
  },
  {
    icon: MapPin,
    title: "Local Market Intelligence",
    description:
      "We have people on the ground in East Africa who understand what students in these markets actually want, what they can pay, and what competitors are offering. No guesswork, no desk research from another continent.",
  },
  {
    icon: Handshake,
    title: "Institutional Partnerships",
    description:
      "We've built relationships with government departments, corporates, and MNCs for institutional enrollment. We help universities land B2B partnerships that deliver cohorts, not just individual applicants.",
  },
  {
    icon: Briefcase,
    title: "Sales Infrastructure Setup",
    description:
      "Most institutions know how to teach but struggle to sell. We help build the sales function from scratch: team structure, KPIs, incentive models, CRM workflows, and training, all based on what we've actually run at scale.",
  },
  {
    icon: Monitor,
    title: "Digital & EdTech Strategy",
    description:
      "Our founding team comes from BYJU'S, WhiteHat Jr, and Regenesys online programmes. We advise institutions on blended delivery, online program launches, and digital student acquisition without overselling what technology can do.",
  },
];

const HOW_STEPS = [
  {
    number: "01",
    title: "Growth Diagnostic",
    description:
      "We look at where your institution stands today: enrollment numbers, conversion rates, market positioning, competitive landscape, and revenue structure. No assumptions, no predetermined solutions. Just an honest read of what's working and what isn't.",
  },
  {
    number: "02",
    title: "Strategy Build",
    description:
      "Based on the diagnostic, we build a growth plan specific to your institution. That could mean entering a new geography, restructuring your sales function, launching online programmes, or fixing collections. We scope what's realistic, not what looks impressive on a slide.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We don't hand you a strategy document and leave. We help build the teams, processes, and systems to execute it. Sales infrastructure, CRM setup, KPI frameworks, training, incentive models — whatever the plan calls for.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Once the model works in one market or one programme, we help you replicate it. Our founding team scaled one institution from ZAR 100M to ZAR 1.5B across nine countries. We know what breaks when you grow fast, and how to prevent it.",
  },
];

const OUTCOME_KPIS = [
  {
    value: "30 → 750",
    label: "Sales Team Scaled",
    description:
      "Built from a 30-person team to a 750-person sales organisation across nine markets.",
  },
  {
    value: "ZAR 1.5B",
    label: "Annual Billing",
    description:
      "Grew institutional billing from ZAR 100M to ZAR 1.5B under the founding team's leadership.",
  },
  {
    value: "9",
    label: "African Markets",
    description:
      "Direct operating experience across South Africa, Kenya, Nigeria, Uganda, Tanzania, Zimbabwe, Zambia, Mauritius, and Botswana.",
  },
  {
    value: "0.6% → 1.75%",
    label: "Conversion Rate",
    description:
      "Lead-to-enrollment conversion nearly tripled through structured sales process and CRM implementation.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[26px] bg-white shadow-card-soft hover:shadow-elevated transition-shadow duration-300"
                >
                  {/* Static border — visible at rest */}
                  <div className="absolute inset-0 rounded-[26px] border border-light-gray group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                  {/* Animated gradient border — fades in on hover */}
                  <div className="animated-gradient-border absolute inset-0 rounded-[26px] p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-full h-full rounded-[24.5px] bg-white" />
                  </div>

                  <div className="relative p-7 rounded-[26px] overflow-hidden h-full">
                    {/* Ambient glow on hover */}
                    <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-primary-brand/0 group-hover:bg-primary-brand/10 blur-3xl transition-all duration-500 pointer-events-none" />

                    <div className="relative">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                        style={{ background: "linear-gradient(135deg, #6D28D9, #A78BFA)" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "#FFFFFF" }} />
                      </div>
                      <h3 className="font-display text-base font-semibold mb-2" style={{ color: "#111827" }}>
                        {c.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
                        {c.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-accent-purple/0 to-transparent group-hover:via-accent-purple/60 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
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
              <div className="chip mb-4 inline-flex">Track Record</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                What Our Founding Team Built
              </h2>
              <p className="text-ink-muted max-w-xl mx-auto text-lg leading-relaxed">
                Track record from the organisation where most of our team spent years operating together.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OUTCOME_KPIS.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[26px] bg-white shadow-card-soft hover:shadow-elevated transition-shadow duration-300"
              >
                {/* Static border — visible at rest */}
                <div className="absolute inset-0 rounded-[26px] border border-light-gray group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                {/* Animated gradient border — fades in on hover */}
                <div className="animated-gradient-border absolute inset-0 rounded-[26px] p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-full h-full rounded-[24.5px] bg-white" />
                </div>

                <div className="relative p-7 rounded-[26px] overflow-hidden h-full">
                  {/* Ambient glow on hover */}
                  <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-primary-brand/0 group-hover:bg-primary-brand/10 blur-3xl transition-all duration-500 pointer-events-none" />

                  <div className="relative">
                    <div className="gradient-text font-display text-3xl md:text-4xl font-bold mb-1">
                      {kpi.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#6D28D9" }}>
                      {kpi.label}
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                      {kpi.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-accent-purple/0 to-transparent group-hover:via-accent-purple/60 transition-all duration-500" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HOW_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[26px] bg-white shadow-card-soft hover:shadow-elevated transition-shadow duration-300"
              >
                {/* Static border — visible at rest */}
                <div className="absolute inset-0 rounded-[26px] border border-light-gray group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

                {/* Animated gradient border — fades in on hover */}
                <div className="animated-gradient-border absolute inset-0 rounded-[26px] p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-full h-full rounded-[24.5px] bg-white" />
                </div>

                <div className="relative flex gap-5 p-7 rounded-[26px] overflow-hidden h-full">
                  {/* Ambient glow on hover */}
                  <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-primary-brand/0 group-hover:bg-primary-brand/10 blur-3xl transition-all duration-500 pointer-events-none" />

                  <div
                    className="relative flex items-center justify-center w-11 h-11 rounded-2xl shrink-0 font-mono text-sm font-bold shadow-sm"
                    style={{ background: "linear-gradient(135deg, #6D28D9, #A78BFA)", color: "#FFFFFF" }}
                  >
                    {step.number}
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-base font-semibold mb-1.5" style={{ color: "#111827" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>{step.description}</p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-accent-purple/0 to-transparent group-hover:via-accent-purple/60 transition-all duration-500" />
                </div>
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
