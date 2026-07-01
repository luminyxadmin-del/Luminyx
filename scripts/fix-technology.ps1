Set-Location "c:\Users\babbu\OneDrive\Desktop\luminyx-website"
$f = [System.IO.File]::ReadAllText("src\app\ecosystem\technology\page.tsx", [System.Text.Encoding]::UTF8)

$funcStart = 7137  # export default function TechnologyPage()
$modulesIdx = $f.IndexOf("INTELLIGENCE MODULES")
# Walk back from modulesIdx to find the start of that newline block
$bodyStart = $f.LastIndexOf("`n`n", $modulesIdx) + 1  # start of the blank line before the comment
Write-Host "bodyStart: $bodyStart"
Write-Host "Preview: |$($f.Substring($bodyStart, 50))|"

$before = $f.Substring(0, $funcStart)
$body = $f.Substring($bodyStart)

$newHero = @'
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
                A unified AI infrastructure that connects education, talent, mobility, and advisory into one continuously learning system — turning data from emerging markets into actionable intelligence.
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

'@

$combined = $before + $newHero + $body

# Now fix the FINAL CTA
$ctaIdx = $combined.IndexOf("FINAL CTA")
Write-Host "CTA at: $ctaIdx"

$sectionStart = $combined.LastIndexOf("`n      {/*", $ctaIdx)
$sectionEndSearch = $combined.IndexOf("</section>", $ctaIdx)
$sectionEnd = $sectionEndSearch + "</section>".Length
Write-Host "CTA section: $sectionStart to $sectionEnd"

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
'@

$combined = $combined.Substring(0, $sectionStart) + $newCta + $combined.Substring($sectionEnd)

[System.IO.File]::WriteAllText("src\app\ecosystem\technology\page.tsx", $combined, [System.Text.Encoding]::UTF8)
Write-Host "Done. File length: $($combined.Length)"
