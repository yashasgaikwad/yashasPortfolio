import { motion } from "framer-motion";
import { Building2, Check, Rocket, Sliders, UserCheck } from "lucide-react";
import { portfolioConfig, type ServiceItem } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function ServiceIcon({ iconKey }: { iconKey: ServiceItem["iconKey"] }) {
  const cls = "h-6 w-6";
  switch (iconKey) {
    case "building":
      return <Building2 className={cls} />;
    case "user":
      return <UserCheck className={cls} />;
    case "rocket":
      return <Rocket className={cls} />;
    case "sliders":
      return <Sliders className={cls} />;
  }
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Can Do"
          title="Web solutions designed for clarity and impact."
          subtitle="Freelance development services tailored for businesses, personal brands, and modern landing pages."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioConfig.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass-panel glass-panel-hover group relative overflow-hidden rounded-3xl p-7"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-600/15 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="flex items-center gap-4">
                <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-3 text-cyan-300 shadow-neon">
                  <ServiceIcon iconKey={service.iconKey} />
                </span>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {service.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm text-slate-300">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

