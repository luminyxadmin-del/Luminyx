Set-Location "c:\Users\babbu\OneDrive\Desktop\luminyx-website"
$f = [System.IO.File]::ReadAllText("src\app\africa\page.tsx", [System.Text.Encoding]::UTF8)

$funcStart = 2551  # export default function AfricaPage()
$whyIdx = $f.IndexOf("WHY EAST AFRICA")
$bodyStart = $f.LastIndexOf("`n      {/*", $whyIdx)  # start of the section comment
Write-Host "bodyStart: $bodyStart"
Write-Host "Preview: |$($f.Substring($bodyStart, 50))|"

$before = $f.Substring(0, $funcStart)

# Fix imports: remove PageHero and CTASection, add ArrowUpRight and Link
$before = $before.Replace(
  'import { CTASection } from "@/components/CTASection";' + "`n" + 'import { PageHero } from "@/components/PageHero";',
  'import Link from "next/link";'
)
# Also add ArrowUpRight to lucide imports
$before = $before.Replace(
  '  ArrowUpRight,',
  '  ArrowUpRight,'
)

$body = $f.Substring($bodyStart)

# Fix the closing tag: Africa page uses <> </> fragments, body uses </> at end
# Replace CTASection at bottom with dark CTA
$ctaMatch = $body.IndexOf("<CTASection")
Write-Host "CTASection at: $ctaMatch"
$ctaEnd = $body.IndexOf("/>", $ctaMatch) + 2
Write-Host "CTASection end: $ctaEnd"

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
              Let&apos;s Build Africa&apos;s Next-Generation{" "}
              <span className="text-accent-purple">Opportunity Infrastructure.</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              We are not a global firm with an Africa practice. We are an African-native intelligence infrastructure with global reach — and we are looking for partners who share that conviction.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Become a Partner <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors">
                Request Strategic Discussion
              </Link>
            </div>
          </div>
        </div>
      </section>
'@

$body = $body.Substring(0, $ctaMatch) + $newCta + $body.Substring($ctaEnd)

$newHero = @'
export default function AfricaPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Group / <span className="text-accent-purple">Africa</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Globe2 className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">AFRICA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Africa Is Not a Market.{" "}
                <span className="text-accent-purple">It&apos;s a Mandate.</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                Africa is the foundational context around which our entire firm was built. We are not a global firm with an Africa practice — we are an African-native intelligence infrastructure with global reach.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/ecosystem" className="btn-primary">
                  Explore Africa Strategy <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/partners" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "12", label: "Active Countries" },
                { value: "$4.2T", label: "Projected GDP 2030" },
                { value: "62M", label: "Formal Jobs by 2035" },
                { value: "240+", label: "Govt Engagements" },
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

# Fix closing tag: change </> to </div> since we now use <div> wrapper
$combined = $combined.Replace("`n    </>`n  );`n}", "`n    </div>`n  );`n}")

[System.IO.File]::WriteAllText("src\app\africa\page.tsx", $combined, [System.Text.Encoding]::UTF8)
Write-Host "Done. File length: $($combined.Length)"
