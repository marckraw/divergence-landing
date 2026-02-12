import { Logo } from "./logo";
import { REPO_URL, RELEASES_URL, LICENSE_URL } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "GitHub", href: REPO_URL },
  { label: "Releases", href: RELEASES_URL },
  { label: "License", href: LICENSE_URL },
];

interface FooterProps {
  version: string;
}

export function Footer({ version }: FooterProps) {
  return (
    <footer className="border-t border-surface px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-7 h-7" />
          <div>
            <span className="font-semibold text-text">Divergence</span>
            <span className="ml-2 rounded-md border border-surface bg-surface/50 px-2 py-0.5 font-mono text-xs text-subtext">
              v{version}
            </span>
          </div>
        </div>

        <p className="text-sm text-subtext text-center md:text-left">
          One desktop for every branch and all your agents.
        </p>

        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-subtext hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
