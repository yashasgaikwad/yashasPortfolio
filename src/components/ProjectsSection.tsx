import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Eye,
  FolderGit2,
  Github,
  Info,
  X,
} from "lucide-react";
import { portfolioConfig, type ProjectItem } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const handleProjectLink = (
    e: React.MouseEvent,
    url: string | null,
    label: string,
    projectTitle: string
  ) => {
    if (!url) {
      e.preventDefault();
      setNotice(
        `${label} link for "${projectTitle}" is currently an editable placeholder. Add the URL in src/data/portfolio.ts.`
      );
      window.setTimeout(() => setNotice(null), 4500);
    }
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Systems and web products built with purpose."
          subtitle="A selection of academic engineering systems and freelance web experiences. Click any project to inspect details or configure repository and demo links."
        />

        {/* Non-intrusive notice when clicking an unconfigured placeholder URL */}
        <AnimatePresence>
          {notice && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              role="status"
              className="mb-8 flex items-center justify-between gap-3 rounded-2xl border border-cyan-400/35 bg-cyan-500/10 px-4 py-3 text-xs text-cyan-100 backdrop-blur-md sm:text-sm"
            >
              <div className="flex items-center gap-2.5">
                <Info className="h-4 w-4 shrink-0 text-cyan-300" />
                <span>{notice}</span>
              </div>
              <button
                type="button"
                onClick={() => setNotice(null)}
                className="rounded-lg p-1 text-cyan-200 hover:bg-cyan-400/20"
                aria-label="Dismiss notice"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid gap-8 lg:grid-cols-2">
          {portfolioConfig.projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass-panel glass-panel-hover group flex flex-col overflow-hidden rounded-3xl"
            >
              {/* Large Thumbnail Preview */}
              <div className="relative overflow-hidden border-b border-white/10 bg-navy-950">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview thumbnail`}
                  loading="lazy"
                  className="aspect-[16/9.5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#030712]/80 px-3 py-1 font-mono text-[11px] text-cyan-200 backdrop-blur-md">
                  <FolderGit2 className="h-3.5 w-3.5 text-cyan-400" />
                  {project.category}
                </div>

                <span className="absolute bottom-3 left-4 rounded-lg border border-white/10 bg-[#030712]/80 px-2.5 py-1 font-mono text-[11px] text-slate-300 backdrop-blur-md">
                  {project.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-2xl font-bold text-white transition group-hover:text-cyan-200">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-400 sm:text-sm">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-xs font-semibold text-slate-950 shadow-neon transition hover:brightness-110"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View Project
                  </button>

                  <a
                    href={project.githubUrl ?? "#projects"}
                    target={project.githubUrl ? "_blank" : undefined}
                    rel={project.githubUrl ? "noopener noreferrer" : undefined}
                    onClick={(e) =>
                      handleProjectLink(e, project.githubUrl, "GitHub", project.title)
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/75 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/45 hover:text-cyan-200"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>

                  <a
                    href={project.liveUrl ?? "#projects"}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel={project.liveUrl ? "noopener noreferrer" : undefined}
                    onClick={(e) =>
                      handleProjectLink(e, project.liveUrl, "Live Demo", project.title)
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/80 p-4 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              className="glass-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                    {activeProject.category}
                  </span>
                  <h3
                    id="modal-project-title"
                    className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl"
                  >
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="rounded-xl border border-white/10 bg-slate-900/80 p-2 text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-navy-950">
                <img
                  src={activeProject.thumbnail}
                  alt={activeProject.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {activeProject.description}
              </p>

              <div className="mt-5">
                <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                  Key Capabilities
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {activeProject.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                {activeProject.githubUrl ? (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:border-cyan-400/50"
                  >
                    <Github className="h-4 w-4" />
                    Open Repository
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs text-slate-400">
                    <Github className="h-4 w-4" />
                    GitHub URL pending in src/data/portfolio.ts
                  </span>
                )}

                {activeProject.liveUrl ? (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2.5 text-xs font-semibold text-slate-950"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Launch Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-xs text-cyan-300/80">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo URL pending in src/data/portfolio.ts
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

