import { ArrowUp, Terminal } from "lucide-react";
import { portfolioConfig } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#02050f]/90 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
            <Terminal className="h-4 w-4" />
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-white">
              {portfolioConfig.identity.fullName}
            </p>
            <p className="font-mono text-[11px] text-slate-400">
              {portfolioConfig.identity.college} • &copy; {year}
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400">
          &ldquo;{portfolioConfig.identity.tagline}&rdquo;
        </p>

        <a
          href="#hero"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/75 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
        >
          Back to Top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}

