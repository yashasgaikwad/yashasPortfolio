import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { portfolioConfig, type SocialLinkConfig } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; info: string }
  | { state: "fallback"; info: string; mailtoUrl: string | null }
  | { state: "error"; info: string };

function SocialIcon({ id }: { id: SocialLinkConfig["id"] }) {
  const cls = "h-5 w-5";
  switch (id) {
    case "email":
      return <Mail className={cls} />;
    case "phone":
      return <Phone className={cls} />;
    case "github":
      return <Github className={cls} />;
    case "linkedin":
      return <Linkedin className={cls} />;
    case "instagram":
      return <Instagram className={cls} />;
  }
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ state: "idle" });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const emailLink = portfolioConfig.socialLinks.find((s) => s.id === "email");
  const configuredEmail =
    emailLink && !emailLink.isPlaceholder && emailLink.href
      ? emailLink.href.replace(/^mailto:/i, "")
      : null;

  const buildMailtoUrl = (data: FormState) => {
    if (!configuredEmail) return null;
    const params = new URLSearchParams({
      subject: data.subject,
      body: `From: ${data.fullName} (${data.email})\n\n${data.message}`,
    });
    return `mailto:${configuredEmail}?${params.toString()}`;
  };

  const handleCopy = async (item: SocialLinkConfig) => {
    try {
      await navigator.clipboard.writeText(item.displayValue);
      setCopiedId(item.id);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed: FormState = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (!trimmed.fullName || !trimmed.email || !trimmed.subject || !trimmed.message) {
      setSubmitStatus({
        state: "error",
        info: "Please fill in all fields before sending your message.",
      });
      return;
    }

    const endpoint = portfolioConfig.contactEndpoint.trim();

    if (!endpoint) {
      const mailtoUrl = buildMailtoUrl(trimmed);
      setSubmitStatus({
        state: "fallback",
        info: mailtoUrl
          ? "No backend endpoint is configured in VITE_CONTACT_ENDPOINT yet — use the button below to send via your email app."
          : "Contact delivery is ready once you set VITE_CONTACT_ENDPOINT (e.g. Formspree, Web3Forms, or /api/contact) in .env and your email in src/data/portfolio.ts.",
        mailtoUrl,
      });
      return;
    }

    setSubmitStatus({ state: "submitting" });

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(trimmed),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setForm({ fullName: "", email: "", subject: "", message: "" });
      setSubmitStatus({
        state: "success",
        info: "Thank you! Your message has been sent successfully.",
      });
    } catch {
      setSubmitStatus({
        state: "error",
        info: "Could not reach the configured contact endpoint. Check VITE_CONTACT_ENDPOINT or try again later.",
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Connect"
          title="Start a conversation."
          subtitle="Open to internships, collaborative engineering projects, and freelance website opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Social & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-5"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-7">
              <h3 className="font-display text-xl font-bold text-white">
                Direct Channels
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Reach out directly via phone or email, or connect with me on GitHub and LinkedIn.
              </p>

              <div className="mt-6 space-y-3">
                {portfolioConfig.socialLinks.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/65 p-4 transition hover:border-cyan-400/35"
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                        <SocialIcon id={item.id} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                          {item.label}
                        </p>
                        {item.href && !item.isPlaceholder ? (
                          <a
                            href={item.href}
                            target={item.id === "email" || item.id === "phone" ? undefined : "_blank"}
                            rel={item.id === "email" || item.id === "phone" ? undefined : "noopener noreferrer"}
                            className="block truncate text-sm font-medium text-white hover:text-cyan-300"
                          >
                            {item.displayValue}
                          </a>
                        ) : (
                          <p className="truncate text-sm text-slate-300">
                            {item.displayValue}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(item)}
                      className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/10 bg-slate-950/80 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
                      aria-label={`Copy ${item.label}`}
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copiedId === item.id ? "Copied" : "Copy"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-panel rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  placeholder="Internship inquiry, freelance website, or collaboration"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Tell me about your project, timeline, or opportunity..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {submitStatus.state !== "idle" && submitStatus.state !== "submitting" && (
                <div
                  role="status"
                  className={`mt-5 flex flex-col gap-3 rounded-2xl border p-4 text-sm ${
                    submitStatus.state === "success"
                      ? "border-emerald-400/35 bg-emerald-500/10 text-emerald-200"
                      : submitStatus.state === "fallback"
                        ? "border-cyan-400/35 bg-cyan-500/10 text-cyan-100"
                        : "border-rose-400/35 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {submitStatus.state === "success" ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    )}
                    <span>{submitStatus.info}</span>
                  </div>

                  {submitStatus.state === "fallback" && submitStatus.mailtoUrl && (
                    <div>
                      <a
                        href={submitStatus.mailtoUrl}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-500/30"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Open in Email App
                      </a>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] text-slate-400">
                  {portfolioConfig.contactEndpoint
                    ? "Connected to configured backend endpoint"
                    : "Ready for VITE_CONTACT_ENDPOINT or /api/contact"}
                </span>

                <button
                  type="submit"
                  disabled={submitStatus.state === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-neon transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitStatus.state === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

