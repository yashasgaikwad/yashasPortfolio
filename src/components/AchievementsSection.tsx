import { motion } from "framer-motion";
import { Award, Briefcase, FolderKanban, ShieldCheck, Trophy } from "lucide-react";
import { portfolioConfig } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function CategoryIcon({ id }: { id: string }) {
  const cls = "h-5 w-5";
  switch (id) {
    case "college-projects":
      return <FolderKanban className={cls} />;
    case "hackathons":
      return <Trophy className={cls} />;
    case "certificates":
      return <Award className={cls} />;
    default:
      return <Briefcase className={cls} />;
  }
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience & Achievements"
          title="Verified milestones and practical builds."
          subtitle="Structured across academic projects, freelance web work, hackathons, and technical certificates—with zero fabricated claims."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolioConfig.achievements.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                    <CategoryIcon id={category.id} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] ${
                    category.verified
                      ? "border border-cyan-400/35 bg-cyan-500/10 text-cyan-200"
                      : "border border-amber-400/30 bg-amber-500/10 text-amber-200"
                  }`}
                >
                  {category.verified && <ShieldCheck className="h-3.5 w-3.5" />}
                  {category.badge}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {category.summary}
              </p>

              <div className="mt-5 space-y-3">
                {category.entries.map((entry) => (
                  <div
                    key={entry.heading}
                    className={`rounded-2xl border p-4 ${
                      entry.isPlaceholder
                        ? "border-dashed border-amber-400/30 bg-slate-900/40"
                        : "border-white/10 bg-slate-900/65"
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-display text-base font-semibold text-white">
                        {entry.heading}
                      </h4>
                      <span className="font-mono text-[11px] text-cyan-300">
                        {entry.meta}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                      {entry.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

