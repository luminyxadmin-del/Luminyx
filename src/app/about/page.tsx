import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Globe, Users, BookOpen, Plane, Target, Heart, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Luminyx Group",
  description: "We are an African-native intelligence infrastructure built to connect talent, education, and mobility across emerging markets.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-dark to-primary-brand/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full" />
        <div className="relative container-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 mb-6">
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">About Luminyx</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
                We Built the Infrastructure<br />
                <span className="text-accent-purple">Africa Was Missing.</span>
              </h1>
              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl">
                Luminyx Group is an intelligence infrastructure firm connecting emerging markets through AI, education, talent, and mobility — headquartered in Dubai, with operations across 14 countries.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform">
                  Partner With Us <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/ecosystem" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/8 transition-colors">
                  Explore Ecosystem
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "2019", label: "Founded" },
                { value: "14", label: "Countries" },
                { value: "3", label: "Divisions" },
                { value: "Dubai", label: "Headquarters" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-5 bg-white/5 border border-white/10">
                  <div className="font-display text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80"
                alt="Luminyx team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="font-display text-2xl font-bold text-white">Dubai, UAE</div>
                <div className="text-sm text-white/60 mt-1">Global Intelligence Headquarters</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light border border-primary-brand/20 mb-5">
              <span className="text-xs font-medium text-primary-brand uppercase tracking-wider">Our Story</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
              Born from a gap.<br />
              <span className="text-primary-brand">Built for a generation.</span>
            </h2>
            <p className="mt-5 text-ink-muted leading-relaxed">
              Luminyx was founded on a simple observation — the infrastructure connecting talent, education, and opportunity across Africa, India, and the GCC didn't exist. Governments were designing policies without data. Institutions were training students for jobs that weren't mapped. Talent was moving across borders without support.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              We built Luminyx to be that missing layer. Not a consultancy, not a staffing agency — an operating system for human opportunity, purpose-built for the world's fastest-growing markets.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "1,000+", label: "Partner Institutions" },
                { value: "$2B+", label: "Workforce Influenced" },
                { value: "35+", label: "Enterprise Clients" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-2xl bg-primary-light border border-primary-brand/10">
                  <div className="font-display text-2xl font-bold text-primary-brand">{s.value}</div>
                  <div className="text-xs text-ink-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-bg-subtle">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-10" style={{ background: 'linear-gradient(135deg, #1E1B4B, #3B0764, #6D28D9)' }}>
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To build the intelligence infrastructure that connects talent, education, and mobility across emerging markets — making opportunity accessible, measurable, and compounding.
              </p>
            </div>
            <div className="rounded-3xl p-10 bg-white border border-primary-brand/10 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary-brand" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">Our Vision</h3>
              <p className="text-ink-muted leading-relaxed">
                A world where geography is no longer a barrier to opportunity — where every qualified individual, institution, and government has access to the intelligence they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 container-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light border border-primary-brand/20 mb-4">
            <span className="text-xs font-medium text-primary-brand uppercase tracking-wider">Our Values</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            What drives every <span className="text-primary-brand">decision we make</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Globe, title: "Africa-First Thinking", description: "Every product, partnership, and strategy is designed with African realities at the center — not adapted from other markets." },
            { icon: Zap, title: "Intelligence Over Intuition", description: "We replace guesswork with data — giving governments, institutions, and employers the real-time intelligence to make better decisions." },
            { icon: Users, title: "People at the Core", description: "Behind every data point is a person. We measure our success by the careers advanced, institutions strengthened, and borders crossed." },
            { icon: Shield, title: "Trust Through Transparency", description: "We operate with full accountability to our partners, clients, and the communities we serve — no hidden incentives, no opaque processes." },
            { icon: Heart, title: "Long-Range Commitment", description: "We are structured for 3-year-plus engagements because real transformation takes time. We stay until the outcome compounds." },
            { icon: BookOpen, title: "Continuous Learning", description: "Our platform improves with every placement, every graduation, every career transition — learning is built into our operating model." },
          ].map((v) => (
            <div key={v.title}
              style={{ border: '1px solid rgba(109,40,217,0.08)', borderRadius: '1.5rem', background: '#ffffff', padding: '2rem' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <v.icon style={{ width: '22px', height: '22px', color: '#6D28D9' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-hanken)', fontSize: '17px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{v.title}</h3>
              <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.6' }}>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THREE DIVISIONS */}
      <section className="py-16 bg-bg-subtle">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              Three Divisions. <span className="text-primary-brand">One Infrastructure.</span>
            </h2>
            <p className="mt-3 text-ink-muted max-w-xl mx-auto">Each division is independently powerful. Together, they create capabilities no single-service firm can offer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: BookOpen, name: "Education", description: "Connecting institutions to employment outcomes across Africa, India, and the Middle East.", href: "/ecosystem/education" },
              { icon: Users, name: "Talent", description: "AI-powered recruitment and talent advisory for the world's fastest-growing markets.", href: "/ecosystem/talent" },
              { icon: Plane, name: "Mobility", description: "End-to-end infrastructure for cross-border talent movement — visa, relocation, integration.", href: "/ecosystem/mobility" },
            ].map((d) => (
              <Link key={d.name} href={d.href}
                className="group rounded-3xl p-8 bg-white border border-primary-brand/10 shadow-sm hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary-brand transition-colors">
                  <d.icon className="w-6 h-6 text-primary-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-2">{d.name}</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-4">{d.description}</p>
                <div className="flex items-center gap-1 text-primary-brand text-sm font-medium">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary-dark to-primary-brand/30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[60px] rounded-full" />
          <div className="relative container-xl py-20 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white text-balance leading-tight">
              Ready to Build With <span className="text-accent-purple">Luminyx?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Whether you're a government, institution, employer, or investor — there's a place for you in the Luminyx ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Get in Touch <ArrowUpRight className="w-4 h-4" />
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
