import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: string; sub?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-14`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs tracking-[0.2em] text-gold font-semibold uppercase`}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-foreground">{title}</h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="relative pt-40 pb-20 bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.82_0.14_85/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.72_0.18_150/0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-gold/40 bg-white/5 text-xs tracking-[0.25em] text-gold font-semibold uppercase">
          {eyebrow}
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">{title}</h1>
        {sub && <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">{sub}</p>}
      </div>
    </section>
  );
}
