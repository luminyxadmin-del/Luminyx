Set-Location "c:\Users\babbu\OneDrive\Desktop\luminyx-website"
$f = [System.IO.File]::ReadAllText("src\app\ecosystem\mobility\page.tsx", [System.Text.Encoding]::UTF8)

$before = $f.Substring(0, 5070)
$body = $f.Substring(8370)

$newHero = @'
export default function MobilityPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Group / <span className="text-white/50">Ecosystem</span> / <span className="text-accent-purple">Mobility</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Plane className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">MOBILITY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Moving Talent Across Borders{" "}
                <span className="text-accent-purple">Intelligently</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We build the infrastructure that makes cross-border talent movement seamless — from opportunity identification to visa processing, relocation, and integration.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Explore Mobility <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/ecosystem" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  View All Divisions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "Destination Countries" },
                { value: "72hr", label: "Avg Visa Processing" },
                { value: "94%", label: "Successful Placements" },
                { value: "6", label: "Active Corridors" },
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

'@

$combined = $before + $newHero + $body

# Now also fix the CTA section
$oldCta = @'
      {/* ─── FINAL CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-section-lg">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center" style={{ background: 'linear-gradient(135deg, rgba(237,233,254,0.9), rgba(196,181,253,0.3), rgba(255,255,255,0.95))' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-brand/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1] mb-5">
                Ready to Move Your{" "}
                <span className="gradient-text">People Smarter?</span>
              </h2>
              <p className="text-slate text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Whether you&apos;re planning a single executive relocation or a
                multi-cohort corridor programme, we have the infrastructure to
                deliver it at any scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary group">
                  Talk to Our Mobility Team
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-light-gray text-slate font-medium text-sm tracking-wide transition-all duration-300 hover:border-primary-brand hover:text-primary-brand"
                >
                  Download Corridor Guide
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
'@

$newCta = @'
      {/* DARK CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 grid-pattern-bg opacity-[0.03] pointer-events-none" />

          <div className="relative container-xl py-20 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Move Talent{" "}
              <span className="text-accent-purple">Across Borders?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re planning a single executive relocation or a multi-cohort corridor programme, we have the infrastructure to deliver it at any scale.
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
'@

# The old CTA uses special box-drawing characters, so find by unique substring
$ctaIdx = $combined.IndexOf("FINAL CTA")
if ($ctaIdx -gt 0) {
  # Find start of that section (the opening comment line)
  $sectionStart = $combined.LastIndexOf("`n      {/*", $ctaIdx)
  # Find end: "      </section>" after the CTA
  $sectionEndSearch = $combined.IndexOf("</section>", $ctaIdx)
  $sectionEnd = $sectionEndSearch + "</section>".Length
  
  Write-Host "CTA section: $sectionStart to $sectionEnd"
  $combined = $combined.Substring(0, $sectionStart + 1) + $newCta + $combined.Substring($sectionEnd)
} else {
  Write-Host "ERROR: Could not find FINAL CTA"
}

[System.IO.File]::WriteAllText("src\app\ecosystem\mobility\page.tsx", $combined, [System.Text.Encoding]::UTF8)
Write-Host "Done. File length: $($combined.Length)"
