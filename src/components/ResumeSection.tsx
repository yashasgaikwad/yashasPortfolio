import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  Layers,
  X,
} from "lucide-react";
import { portfolioConfig } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ResumeSection() {
  const { identity, resume, skills, projects } = portfolioConfig;
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <section id="resume" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resume"
          title="Curriculum Vitae & Academic Profile."
          subtitle="Preview my structured summary below or download the PDF directly. Replace public/Yashas_Gaikwad_Resume.pdf anytime with your latest PDF."
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-panel overflow-hidden rounded-3xl"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-slate-900/70 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white sm:text-base">
                  {resume.downloadName}
                </p>
                <p className="font-mono text-[11px] text-slate-400">
                  {resume.lastUpdatedLabel}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setViewerOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/45 hover:text-cyan-200"
              >
                <Eye className="h-4 w-4" />
                Preview PDF
              </button>

              <a
                href={resume.fileUrl}
                download={resume.downloadName}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2 text-xs font-semibold text-slate-950 shadow-neon transition hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Interactive Resume Sheet Preview */}
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {identity.fullName}
                </h3>
                <p className="mt-1 font-mono text-xs text-cyan-300">
                  {identity.rolesLine}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {identity.aboutParagraph}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-300">
                  <GraduationCap className="h-4 w-4" />
                  Education
                </div>
                <p className="mt-2 font-display text-base font-semibold text-white">
                  {identity.education}
                </p>
                <p className="text-sm text-slate-300">{identity.college}</p>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  Experience: {identity.experienceLevel}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-300">
                  <Layers className="h-4 w-4" />
                  Technical Skills
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 font-mono text-xs text-cyan-100"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan-300">
                Highlighted Academic &amp; Freelance Projects
              </p>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-2xl border border-white/10 bg-slate-900/55 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-base font-semibold text-white">
                        {project.title}
                      </h4>
                      <span className="font-mono text-[11px] text-cyan-300">
                        {project.category}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-slate-300">
                      {project.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Embedded PDF Viewer Modal */}
      <AnimatePresence>
        {viewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/85 p-4 backdrop-blur-md"
            onClick={() => setViewerOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Resume PDF Preview"
              className="glass-panel flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <span className="font-display text-sm font-semibold text-white">
                  {resume.downloadName}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={resume.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-200 hover:border-cyan-400/40"
                  >
                    Open Tab
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={resume.fileUrl}
                    download={resume.downloadName}
                    className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-3.5 py-1.5 text-xs font-semibold text-slate-950"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={() => setViewerOpen(false)}
                    className="rounded-xl p-1.5 text-slate-300 hover:bg-white/10 hover:text-white"
                    aria-label="Close PDF preview"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <iframe
                src={resume.fileUrl}
                title="Yashas Gaikwad Resume PDF"
                className="h-full w-full flex-1 bg-slate-950"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

