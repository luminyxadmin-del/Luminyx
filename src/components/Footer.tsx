import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { SITE } from "@/lib/constants";

const DIVISION_LINKS = [
  { label: "Education", href: "/ecosystem/education" },
  { label: "Talent", href: "/ecosystem/talent" },
  { label: "Mobility", href: "/ecosystem/mobility" },
];

const COMPANY_LINKS = [
  { label: "Africa", href: "/africa" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Github, href: "#", label: "GitHub" },
];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="font-medium text-xs tracking-widest uppercase text-ink-faint mb-5">
        {heading}
      </h5>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-slate hover:text-primary-brand transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-bg-subtle border-t border-light-gray">
      <div className="h-px bg-gradient-to-r from-transparent via-primary-brand/20 to-transparent" />

      <div className="container-xl py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary-brand flex items-center justify-center shadow-[0_0_16px_rgba(109,40,217,0.4)]">
                <span className="font-display font-bold text-white text-lg">L</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-navy">
                {SITE.name} Group
              </span>
            </Link>
            <p className="text-slate max-w-sm mb-8 leading-relaxed text-sm">
              An intelligence infrastructure firm connecting emerging markets
              through education, talent, and mobility.
              Headquartered in Dubai, UAE.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group w-10 h-10 rounded-full border border-light-gray flex items-center justify-center hover:bg-primary-brand hover:border-primary-brand transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-ink-faint group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Divisions */}
          <div className="lg:col-span-2">
            <FooterColumn heading="Divisions" links={DIVISION_LINKS} />
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FooterColumn heading="Company" links={COMPANY_LINKS} />
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h5 className="font-medium text-xs tracking-widest uppercase text-ink-faint mb-5">
              Contact
            </h5>
            <ul className="space-y-3 text-sm text-slate">
              <li>Dubai, United Arab Emirates</li>
              <li>
                <a
                  href="mailto:connect@luminyx.io"
                  className="hover:text-primary-brand transition-colors"
                >
                  connect@luminyx.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+97140000000"
                  className="hover:text-primary-brand transition-colors"
                >
                  +971 4 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-light-gray flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Luminyx Group · All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-ink-faint hover:text-slate transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-ink-faint hover:text-slate transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
