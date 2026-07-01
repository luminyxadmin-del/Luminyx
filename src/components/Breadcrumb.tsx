"use client";

import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-ink-faint mb-8">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="opacity-40">/</span>}
          {c.href ? (
            <Link href={c.href} className="hover:text-navy transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-primary-brand">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
