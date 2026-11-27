import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Film, Palette, Sparkles, Terminal } from "lucide-react";
import { portfolioConfig, type SkillItem } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

const CATEGORIES: Array<"All" | SkillItem["category"]> = [
  "All",
  "Programming",
  "Web Development",
  "Creative Skills",
];

function SkillIcon({ iconKey }: { iconKey: SkillItem["iconKey"] }) {
  const base = "h-6 w-6";
  switch (iconKey) {
    case "terminal":
      return <Terminal className={base} />;
    case "cpu":
      return <Cpu className={base} />;
    case "code":
      return <Code2 className={base} />;
    case "palette":
      return <Palette className={base} />;
    case "sparkles":
      return <Sparkles className={base} />;
    case "film":
      return <Film className={base} />;
  }
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const visibleSkills =
    selectedCategory === "All"
      ? portfolioConfig.skills
      : portfolioConfig.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Skills & Technologies"
            title="Core technical & creative toolkit."
            subtitle="Verified hands-on technologies I work with across systems programming, web interfaces, and digital media."
          />

          <div
            className="mb-12 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Skill categories"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition ${
                    active
                      ? "border border-cyan-400/50 bg-cyan-500/20 text-cyan-200 shadow-neon"
                      : "border border-white/10 bg-slate-900/60 text-slate-300 hover:border-cyan-400/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-panel glass-panel-hover group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:bg-cyan-400/20" />

              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 transition group-hover:border-cyan-300 group-hover:bg-cyan-400/20">
                  <SkillIcon iconKey={skill.iconKey} />
                </span>
                <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 font-mono text-[11px] text-slate-300">
                  {skill.category}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-white">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {skill.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

