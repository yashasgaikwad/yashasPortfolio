import { motion } from "framer-motion";
import { BookOpen, Compass, Cpu, GraduationCap } from "lucide-react";
import { portfolioConfig } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  const { identity } = portfolioConfig;

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering mindset paired with creative execution."
          subtitle="Focused on building practical digital products while deepening core computer engineering foundations."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Primary Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 lg:col-span-7"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 font-mono text-xs text-cyan-300">
              <BookOpen className="h-3.5 w-3.5" />
              Introduction
            </div>

            <p className="text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
              {identity.aboutParagraph}
            </p>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Current Status
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  {identity.title}
                </p>
                <p className="mt-0.5 text-sm text-cyan-300">
                  Experience: {identity.experienceLevel}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Primary Focus
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  AI &amp; Web Engineering
                </p>
                <p className="mt-0.5 text-sm text-slate-300">
                  Practical software &amp; responsive design
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Interests */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="glass-panel glass-panel-hover rounded-3xl p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                    Education
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    {identity.education}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {identity.college}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Building strong fundamentals in programming, database systems,
                    problem solving, and modern web technologies.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="glass-panel glass-panel-hover flex-1 rounded-3xl p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-300">
                  <Compass className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-blue-300">
                    Career Interests
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    Domains I Explore
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {identity.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-slate-900/80 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

