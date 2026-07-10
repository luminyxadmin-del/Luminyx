import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

const DIVISION_LINKS = [
  { label: "AI Advisory", href: "/ecosystem/advisory" },
  { label: "Education Advisory", href: "/ecosystem/education" },
  { label: "Talent", href: "/ecosystem/talent" },
  { label: "Travel", href: "/ecosystem/travel" },
  { label: "Technology", href: "/ecosystem/technology" },
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
            <Link href="/" className="inline-flex items-center mb-6">
              <Image
                src="https://res.cloudinary.com/dtg3lepr4/image/upload/v1783523985/Luminyx_ventures_Final_logo_03_fpyqls.png"
                alt="Luminyx Group"
                width={628}
                height={200}
                quality={100}
                className="object-contain"
                style={{
                  height: "52px",
                  width: "auto",
                  filter: "none",
                  opacity: 1,
                  display: "block",
                }}
              />
            </Link>
            <p className="max-w-sm mb-8 leading-relaxed text-sm" style={{ color: "#374151" }}>
              An intelligence infrastructure firm connecting emerging markets
              through advisory, education, talent, travel, and technology.
              Headquartered in Dubai, UAE.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group w-10 h-10 rounded-full border border-light-gray flex items-center justify-center hover:border-primary-brand/30 transition-all duration-200"
                >
                  <Icon
                    className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#6D28D9" }}
                  />
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
