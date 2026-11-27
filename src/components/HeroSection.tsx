import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  Download,
  GraduationCap,
  Send,
  Sparkles,
} from "lucide-react";
import { portfolioConfig } from "../data/portfolio";

export function HeroSection() {
  const { identity, resume } = portfolioConfig;

  // Subtle 3D tilt tracking on the hero portrait card
  const cardRef = useRef<HTMLDivElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleCardPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleCardPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-24 pb-16 sm:pt-28 sm:pb-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left column — Identity & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-slate-900/75 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
              Available for Internships &amp; Freelance Projects
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block">{identity.heroDisplayFirst}</span>
            <span className="text-gradient-electric block">
              {identity.heroDisplayLast}
            </span>
          </h1>

          <p className="mt-5 font-mono text-sm font-medium tracking-wide text-cyan-300 sm:text-base">
            {identity.rolesLine}
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            &ldquo;{identity.tagline}&rdquo;
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/65 px-3.5 py-2">
              <GraduationCap className="h-4 w-4 text-cyan-400" />
              {identity.education} — {identity.college}
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/65 px-3.5 py-2">
              <Sparkles className="h-4 w-4 text-blue-400" />
              {identity.experienceLevel} • AI &amp; Web Enthusiast
            </span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-neon transition hover:scale-[1.02] hover:shadow-neon-strong"
            >
              Explore My Work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-slate-900/75 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-300 hover:bg-cyan-500/10"
            >
              <Send className="h-4 w-4 text-cyan-300" />
              Let&apos;s Connect
            </a>

            <a
              href={resume.fileUrl}
              download={resume.downloadName}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
            >
              <Download className="h-4 w-4 text-cyan-400" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right column — Interactive 3D Profile Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:col-span-5 lg:justify-end"
          style={{ perspective: 1100 }}
        >
          <motion.div
            ref={cardRef}
            onPointerMove={handleCardPointerMove}
            onPointerLeave={handleCardPointerLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="glass-panel relative w-full max-w-sm rounded-3xl p-4 sm:p-5"
          >
            {/* Ambient halo */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-400/25 via-transparent to-blue-600/25 opacity-70" />

            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-navy-950">
              <img
                src={identity.profileImage}
                alt={identity.profileAlt}
                className="aspect-[4/4.4] w-full object-cover object-top"
              />

              {/* Subtle bottom gradient overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030712]/80 via-[#030712]/30 to-transparent" />
            </div>

            <div className="relative mt-4 flex items-center justify-between px-1">
              <div>
                <p className="font-display text-base font-semibold text-white">
                  {identity.fullName}
                </p>
                <p className="font-mono text-xs text-cyan-300">
                  {identity.college}
                </p>
              </div>
              <span className="rounded-lg border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] text-cyan-200">
                {identity.experienceLevel}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

