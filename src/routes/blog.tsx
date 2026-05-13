import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import banner from "@/assets/banners/blog.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — Kori Financial Service" },
      { name: "description", content: "Practical financial insights on SIPs, LIC, tax planning, insurance and family financial security." },
      { property: "og:title", content: "Financial Insights — Kori Financial Service" },
      { property: "og:description", content: "Plain-English advice on saving, investing and protecting your family." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "How much life insurance does your family really need?", date: "May 2, 2026", cat: "Insurance", read: "5 min", grad: "from-[oklch(0.55_0.15_230)] to-[oklch(0.4_0.12_260)]" },
  { title: "SIP vs lump sum: what works in today's market", date: "Apr 18, 2026", cat: "Mutual Funds", read: "4 min", grad: "from-[oklch(0.72_0.18_150)] to-[oklch(0.55_0.15_180)]" },
  { title: "Smart tax planning under section 80C — beyond LIC", date: "Mar 28, 2026", cat: "Tax Planning", read: "6 min", grad: "from-[oklch(0.82_0.14_85)] to-[oklch(0.7_0.16_60)]" },
  { title: "Health insurance: what most families get wrong", date: "Mar 10, 2026", cat: "Health", read: "5 min", grad: "from-[oklch(0.65_0.2_25)] to-[oklch(0.55_0.18_15)]" },
  { title: "Building a retirement corpus that actually lasts", date: "Feb 22, 2026", cat: "Retirement", read: "7 min", grad: "from-[oklch(0.5_0.15_260)] to-[oklch(0.35_0.12_240)]" },
  { title: "Fixed deposits in 2026 — still relevant?", date: "Feb 5, 2026", cat: "Fixed Income", read: "4 min", grad: "from-[oklch(0.6_0.15_280)] to-[oklch(0.45_0.13_300)]" },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Insights & Blog" title="Plain-English financial insights for your family." sub="Bite-sized advice from 20+ years of advising families across India." image={banner} />
      <Section>
        <SectionHeader eyebrow="Latest Articles" title="From our journal" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-luxe hover:-translate-y-1 transition-all">
              <div className={`relative h-48 bg-gradient-to-br ${p.grad} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(1_0_0/0.2),transparent)]" />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-white/90 font-bold">{p.cat}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                  <span>· {p.read} read</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary/40">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Is a consultation really free?", a: "Yes. Your first consultation carries zero obligation. We're paid by the institutions whose products you choose — never by you for advice." },
            { q: "Which mutual funds do you recommend?", a: "We are AMFI-registered distributors for 9+ leading AMCs including SBI, HDFC, ICICI, Axis, Kotak, Nippon, UTI, DSP and Aditya Birla. Recommendations are based purely on your goals and risk profile." },
            { q: "Do you help with claims?", a: "Absolutely. End-to-end claim assistance is part of our service — for LIC, health and general insurance." },
            { q: "Can I start with a small SIP?", a: "Yes — SIPs can start from as little as ₹500 per month. We help you build it up over time." },
            { q: "How do I get started?", a: "Click 'Get Free Consultation' or message us on WhatsApp. We'll set up a 30-minute discovery call at your convenience." },
          ].map((f, i) => (
            <details key={i} className="group rounded-2xl bg-card border border-border p-5 open:shadow-card">
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold">
                {f.q}
                <span className="ml-4 h-8 w-8 rounded-full border border-border grid place-items-center text-gold group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
