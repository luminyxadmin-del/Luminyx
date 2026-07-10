"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Landmark, GraduationCap, Building2, HeartHandshake, Shield, Infinity as InfinityIcon, Compass, MessageCircle, Handshake, Plug, TrendingUp, ArrowUpRight } from "lucide-react";

export function PartnersPageClient() {
  return (
    <main className="min-h-screen">

      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-dark to-primary-brand/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full" />
        <div className="relative container-xl">
          <div
            className="chip mb-6"
            style={{ background: "rgba(59,7,100,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(139,92,246,0.15)", color: "#ffffff" }}
          >
            Partners
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
                Build the Future{" "}
                <span className="text-accent-purple">With Luminyx</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We partner with governments, universities, corporates and NGOs to deliver compounding impact across East Africa, India, and the GCC corridor.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#become" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform">
                  Become a Partner <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "18+", label: "Govt Partnerships" },
                { value: "1,000+", label: "Institutional Partners" },
                { value: "14", label: "Countries" },
                { value: "$1.8B", label: "Enterprise Influence" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, background: "rgba(255,255,255,0.08)" }}
                  className="rounded-2xl p-5 bg-white/5 border border-white/10"
                >
                  <div className="font-display text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/40">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PARTNER CATEGORIES */}
      <section className="py-16 container-xl">
        <div className="text-center mb-12">
          <div className="chip mb-4">Our Ecosystem</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Four partner categories,<br />one operating model
          </h2>
          <p className="mt-3 text-ink-muted max-w-xl mx-auto">
            We design every relationship around clarity of role, shared incentives and measurable outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {[
            {
              icon: Landmark,
              title: "Government",
              bullets: ["Sovereign AI programs", "Public-sector modernisation", "Smart-city infrastructure"],
            },
            {
              icon: GraduationCap,
              title: "University",
              bullets: ["Curriculum co-design", "Joint research labs", "Faculty exchange programs"],
            },
            {
              icon: Building2,
              title: "Corporate",
              bullets: ["Innovation studios", "Co-investment vehicles", "Talent pipelines"],
            },
            {
              icon: HeartHandshake,
              title: "NGO",
              bullets: ["Impact measurement", "Tech-for-good programs", "Capacity building"],
            },
          ].map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              style={{
                padding: "1px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #e5e7eb, #e5e7eb)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.background = "linear-gradient(135deg, #6D28D9, #A78BFA, #4F46E5)";
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.background = "linear-gradient(135deg, #e5e7eb, #e5e7eb)";
              }}
            >
              <div style={{ background: "#ffffff", borderRadius: "19px", padding: "2rem", height: "100%" }}>
                {/* Icon with gradient bg */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <e.icon style={{ width: "24px", height: "24px", color: "#6D28D9" }} />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "16px" }}>
                  {e.title}
                </h3>

                {/* Bullets */}
                {e.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6D28D9", marginTop: "6px", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "#4B5563", lineHeight: "1.5" }}>{b}</span>
                  </div>
                ))}

                {/* Bottom tag */}
                <div
                  style={{
                    marginTop: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    background: "#F5F3FF",
                    fontSize: "12px",
                    color: "#6D28D9",
                    fontWeight: 500,
                  }}
                >
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6D28D9" }} />
                  Active
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-16" style={{ background: "#F5F3FF" }}>
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="chip mb-4">Why Partner with Luminyx</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              Trust, scale and depth — by design
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "Unparalleled Trust", description: "Long-tenured relationships with regulators, ministries and operators across the continent." },
              { icon: InfinityIcon, title: "Infinite Scale", description: "Five integrated verticals mean every partnership compounds across the ecosystem." },
              { icon: Compass, title: "Regional Expertise", description: "Local teams, local context, global standards — wherever you choose to operate." },
            ].map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(109,40,217,0.15)" }}
                style={{ background: "#ffffff", border: "1px solid rgba(109,40,217,0.08)", borderRadius: "1.5rem", padding: "2.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}
              >
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "80px", height: "3px", background: "linear-gradient(90deg, #6D28D9, #A78BFA)", borderRadius: "0 0 4px 4px" }} />
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ width: "60px", height: "60px", borderRadius: "16px", background: "linear-gradient(135deg, #F5F3FF, #EDE9FE)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", border: "1px solid #DDD6FE" }}
                >
                  <w.icon style={{ width: "28px", height: "28px", color: "#6D28D9" }} />
                </motion.div>
                <h3 style={{ fontFamily: "var(--font-hanken)", fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>{w.title}</h3>
                <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: "1.6" }}>{w.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATIVE ROADMAP */}
      <section className="py-16">
        <div className="container-xl">
          <div className="relative overflow-hidden rounded-3xl bg-primary-dark p-10 md:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-dark to-primary-brand/30" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 blur-[60px] rounded-full" />
            <div className="relative">
              <div
                className="chip mb-5"
                style={{ background: "rgba(59,7,100,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(139,92,246,0.15)", color: "#ffffff" }}
              >
                Collaborative Roadmap
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 max-w-lg">
                Four phases from first conversation to compounding growth
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: "01", icon: MessageCircle, title: "Inquiry", description: "An initial conversation to understand fit and ambition." },
                  { step: "02", icon: Handshake, title: "Alignment", description: "Shared goals, success metrics and governance structures." },
                  { step: "03", icon: Plug, title: "Integration", description: "Embedded teams, joint tooling and shared operating cadence." },
                  { step: "04", icon: TrendingUp, title: "Growth", description: "Compounding outcomes measured quarterly, reported openly." },
                ].map((r, i) => (
                  <motion.div
                    key={r.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6 }}
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "1rem", padding: "1.75rem", cursor: "default", transition: "all 0.3s", position: "relative" }}
                  >
                    <div style={{ color: "#A78BFA", fontSize: "11px", fontFamily: "monospace", marginBottom: "12px", display: "block", letterSpacing: "0.1em" }}>{r.step}</div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{ background: "rgba(109,40,217,0.4)", width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}
                    >
                      <r.icon style={{ color: "#C4B5FD", width: "20px", height: "20px" }} />
                    </motion.div>
                    <h3 style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>{r.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: "1.55" }}>{r.description}</p>
                    {/* Step connector line */}
                    {i < 3 && (
                      <div
                        style={{ position: "absolute", right: "-10px", top: "50%", width: "20px", height: "2px", background: "rgba(167,139,250,0.3)" }}
                        className="hidden lg:block"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BECOME A PARTNER FORM */}
      <section id="become" className="py-16">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="chip mb-4">Become a Partner</div>
              <h2 className="font-display text-3xl font-bold text-ink mb-4">Start the conversation</h2>
              <p className="text-ink-muted leading-relaxed">
                Tell us a little about your organisation and what you&apos;re hoping to build. A partnership lead will follow up within two business days.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div style={{ background: "#ffffff", border: "1px solid rgba(109,40,217,0.08)", borderRadius: "1.5rem", padding: "2rem" }}>
                {/* Partner form state + submit */}
                <PartnerForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-dark to-primary-brand/30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[80px] rounded-full" />
          <div className="relative container-xl py-20 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Build the Next Chapter <span className="text-accent-purple">With Us.</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Partner with Luminyx to compound impact across the African ecosystem — across sectors, geographies and generations.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Contact Partnerships <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/ecosystem" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/8 transition-colors">
                Explore Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function PartnerForm() {
  const [formData, setFormData] = useState({ organisation: '', sector: 'Government', workEmail: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) setSubmitted(true)
      else {
        const data = await res.json()
        setError(data?.error || 'Submission failed')
      }
    } catch (err: any) {
      setError(err.message || 'Submission failed')
    }
    setSubmitting(false)
  }

  if (submitted) {
    return <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800">Thanks — your inquiry has been received. We will respond shortly.</div>
  }

  return (
    <div>
      {error && <div className="mb-4 p-3 rounded bg-red-50 border border-red-100 text-red-700">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#6B7280", display: "block", marginBottom: "6px" }}>Organisation</label>
          <input value={formData.organisation} onChange={e => setFormData({ ...formData, organisation: e.target.value })} type="text" placeholder="Your organisation" style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #E5E7EB", fontSize: "14px", outline: "none" }} />
        </div>
        <div>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#6B7280", display: "block", marginBottom: "6px" }}>Sector</label>
          <select value={formData.sector} onChange={e => setFormData({ ...formData, sector: e.target.value })} style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #E5E7EB", fontSize: "14px", outline: "none", background: "#fff" }}>
            <option>Government</option>
            <option>University</option>
            <option>Corporate</option>
            <option>NGO</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label style={{ fontSize: "12px", fontWeight: 500, color: "#6B7280", display: "block", marginBottom: "6px" }}>Work email</label>
        <input value={formData.workEmail} onChange={e => setFormData({ ...formData, workEmail: e.target.value })} type="email" placeholder="name@organisation.com" style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #E5E7EB", fontSize: "14px", outline: "none" }} />
      </div>
      <div className="mb-6">
        <label style={{ fontSize: "12px", fontWeight: 500, color: "#6B7280", display: "block", marginBottom: "6px" }}>Tell us about the partnership you have in mind</label>
        <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={4} placeholder="A short paragraph is enough — we'll take it from there." style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #E5E7EB", fontSize: "14px", outline: "none", resize: "none" }} />
      </div>
      <button onClick={handleSubmit} type="button" disabled={submitting} style={{ background: "#6D28D9", color: "#ffffff", padding: "12px 28px", borderRadius: "50px", fontSize: "14px", fontWeight: 600, border: "none", cursor: "pointer" }}>
        {submitting ? 'Submitting…' : 'Submit Inquiry'}
      </button>
    </div>
  )
}
