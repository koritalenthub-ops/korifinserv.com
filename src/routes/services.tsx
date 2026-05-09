import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, HeartPulse, Car, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { WhatsAppIcon } from "@/components/site/BrandIcons";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LIC, Mutual Funds, Insurance & FDs | Kori Financial" },
      { name: "description", content: "LIC policies, mutual funds across 9+ AMCs, health & general insurance and fixed deposits — tailored for your goals." },
      { property: "og:title", content: "Services — Kori Financial Service" },
      { property: "og:description", content: "Comprehensive financial solutions for every life stage." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    Icon: ShieldCheck,
    title: "LIC Policies",
    desc: "Life insurance from India's most trusted insurer — designed for protection, savings and legacy planning.",
    items: ["Child Education Plans", "Pension & Annuity Plans", "Retirement Plans", "Tax Saving Plans (80C)", "Pure Life Protection (Term)"],
    tone: "from-[oklch(0.55_0.15_230)] to-[oklch(0.4_0.12_260)]",
  },
  {
    Icon: TrendingUp,
    title: "Mutual Funds",
    desc: "AMFI-registered distribution across India's top fund houses with goal-based portfolio construction.",
    items: ["SIP Planning", "Wealth Creation", "Long-Term Investments", "Goal-Based Planning", "Tax-Saving ELSS"],
    extras: ["SBI MF", "HDFC MF", "ICICI Prudential", "Axis MF", "Kotak MF", "Nippon India", "UTI MF", "DSP MF", "Aditya Birla SL"],
    tone: "from-[oklch(0.72_0.18_150)] to-[oklch(0.55_0.15_180)]",
  },
  {
    Icon: HeartPulse,
    title: "Health Insurance",
    desc: "Comprehensive health protection that stands by your family when it matters most.",
    items: ["Family Floater Plans", "Critical Illness Cover", "Mediclaim Policies", "Senior Citizen Plans", "Top-Up & Super Top-Up"],
    tone: "from-[oklch(0.65_0.2_25)] to-[oklch(0.55_0.18_15)]",
  },
  {
    Icon: Car,
    title: "General Insurance",
    desc: "Protection for your assets and journeys — placed with leading regulated insurers.",
    items: ["Vehicle Insurance (Car & Bike)", "Travel Insurance", "Property & Home Insurance", "Personal Accident", "Shopkeeper Cover"],
    tone: "from-[oklch(0.6_0.15_280)] to-[oklch(0.45_0.13_300)]",
  },
  {
    Icon: Landmark,
    title: "Fixed Deposits",
    desc: "Stable, predictable returns from RBI-regulated banks and corporate FDs.",
    items: ["Bank Fixed Deposits", "Corporate FDs", "Senior Citizen FDs", "Tax-Saving FDs", "Cumulative & Non-Cumulative"],
    tone: "from-[oklch(0.82_0.14_85)] to-[oklch(0.7_0.16_60)]",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Every solution, under one trusted roof." sub="From protection to wealth creation, we handpick the right products from regulated providers and align them with your goals." />

      <Section>
        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-luxe transition-all">
              <div className={`grid lg:grid-cols-3 gap-0`}>
                <div className={`relative bg-gradient-to-br ${s.tone} p-10 text-white overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                  <s.Icon className="h-12 w-12 mb-5" />
                  <h3 className="text-3xl font-display font-bold">{s.title}</h3>
                  <p className="mt-3 text-white/85 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 text-xs uppercase tracking-[0.2em] text-white/60">0{i + 1} / 0{services.length}</div>
                </div>
                <div className="lg:col-span-2 p-10">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">What's included</div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {s.items.map((it) => (
                      <div key={it} className="flex items-start gap-3 text-foreground/85">
                        <CheckCircle2 className="h-5 w-5 text-emerald-glow shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                  {s.extras && (
                    <>
                      <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mt-7 mb-3">Top fund partners</div>
                      <div className="flex flex-wrap gap-2">
                        {s.extras.map((e) => (
                          <span key={e} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary text-foreground/70 border border-border">{e}</span>
                        ))}
                      </div>
                    </>
                  )}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground font-semibold text-sm">
                      Enquire <ArrowRight className="h-3.5 w-3.5"/>
                    </Link>
                    <a href={`https://wa.me/918767876820?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(s.title)}`} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-border hover:bg-secondary">
                      <WhatsAppIcon className="h-4 w-4 text-emerald-glow" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
