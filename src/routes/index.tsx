import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck, TrendingUp, HeartPulse, Car, Landmark, Sparkles,
  Award, Users, Calendar, Briefcase, ArrowRight, Star, Quote,
  CheckCircle2, Phone,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { WhatsAppIcon } from "@/components/site/BrandIcons";
import logo from "@/assets/kori-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/about-portrait.jpg";
import licImg from "@/assets/services/lic.jpg";
import mfImg from "@/assets/services/mutual-funds.jpg";
import healthImg from "@/assets/services/health.jpg";
import generalImg from "@/assets/services/general.jpg";
import fdImg from "@/assets/services/fd.jpg";
import wealthImg from "@/assets/services/wealth.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kori Financial Service — Secure Your Future with Trusted Guidance" },
      { name: "description", content: "20+ years of trusted financial advisory. LIC, mutual funds, insurance, fixed deposits. 1000+ happy families served." },
      { property: "og:title", content: "Kori Financial Service — Secure Your Future" },
      { property: "og:description", content: "Trusted financial consultancy with 20+ years experience." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "20+", label: "Years Experience", Icon: Calendar },
  { value: "1000+", label: "Happy Clients", Icon: Users },
  { value: "9+", label: "Mutual Fund Houses", Icon: TrendingUp },
  { value: "100%", label: "Trusted Service", Icon: Award },
];

const services = [
  { Icon: ShieldCheck, title: "LIC Insurance", desc: "Child plans, pension, retirement, tax-saving & pure life protection from India's most trusted insurer.", img: licImg, slug: "lic-insurance", tone: "from-[oklch(0.55_0.15_230)] to-[oklch(0.4_0.12_260)]" },
  { Icon: TrendingUp, title: "Mutual Funds", desc: "Goal-based SIPs and lump-sum investments across 9+ leading AMCs for long-term wealth creation.", img: mfImg, slug: "mutual-funds", tone: "from-[oklch(0.72_0.18_150)] to-[oklch(0.55_0.15_180)]" },
  { Icon: HeartPulse, title: "Health Insurance", desc: "Family floater, critical illness, mediclaim & senior citizen plans that protect what matters most.", img: healthImg, slug: "health-insurance", tone: "from-[oklch(0.65_0.2_25)] to-[oklch(0.55_0.18_15)]" },
  { Icon: Car, title: "General Insurance", desc: "Vehicle, travel, home and property insurance from leading IRDAI-regulated insurers.", img: generalImg, slug: "general-insurance", tone: "from-[oklch(0.6_0.15_280)] to-[oklch(0.45_0.13_300)]" },
  { Icon: Landmark, title: "Fixed Deposits", desc: "Stable, predictable returns from RBI-regulated banks and top-rated corporate FDs.", img: fdImg, slug: "fixed-deposits", tone: "from-[oklch(0.82_0.14_85)] to-[oklch(0.7_0.16_60)]" },
  { Icon: Sparkles, title: "Wealth Planning", desc: "Personalised, goal-based portfolio construction blending protection, growth and liquidity.", img: wealthImg, slug: "wealth-planning", tone: "from-[oklch(0.5_0.15_260)] to-[oklch(0.35_0.12_240)]" },
];

const why = [
  { Icon: Calendar, title: "20+ Years Experience", desc: "Two decades guiding families through every market cycle." },
  { Icon: Users, title: "1000+ Happy Clients", desc: "A trusted advisor to families across generations." },
  { Icon: ShieldCheck, title: "Trusted Solutions", desc: "Only handpicked, regulated products from top institutions." },
  { Icon: Sparkles, title: "Personalised Guidance", desc: "Custom plans built around your goals and risk profile." },
  { Icon: CheckCircle2, title: "Fast Claim Assistance", desc: "We stand by you when it matters most — end-to-end claim help." },
  { Icon: Briefcase, title: "Lifetime Support", desc: "A relationship-first approach that lasts beyond a transaction.\n\n" },
];

const testimonials = [
  { name: "Anjali Sharma", role: "Teacher, Pune", text: "Rakesh ji has guided our family for over a decade. His advice on LIC and SIPs helped me build a secure retirement corpus." },
  { name: "Vikram Patil", role: "Business Owner", text: "Honest, patient, and incredibly knowledgeable. He explained mutual funds in a way I finally understood. Highly recommended." },
  { name: "Sunita Deshmukh", role: "Homemaker", text: "When my husband's claim came up, Kori Financial Service handled everything. We received the amount without any stress." },
];

const partners = ["SBI MF", "HDFC MF", "ICICI Prudential", "Axis MF", "Kotak MF", "Nippon India", "UTI", "DSP", "Aditya Birla"];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center bg-gradient-hero text-white overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.82_0.14_85/0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.72_0.18_150/0.18),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-white/5 text-xs tracking-[0.25em] text-gold font-semibold uppercase mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Trusted Since 2004
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Secure Your Future <br />
              with <span className="text-gradient-gold">Trusted Financial</span> Guidance
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
              Helping families build wealth and financial security for over 20 years. Personalised advice across LIC, mutual funds, insurance and fixed income.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-navy-deep font-semibold shadow-gold hover:scale-[1.03] transition-transform">
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="https://wa.me/918767876820" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold bg-white/5 border border-white/15 hover:bg-white/10 backdrop-blur transition-colors">
                <WhatsAppIcon className="h-5 w-5 text-emerald-glow" /> WhatsApp Now
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-xs text-white/50 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-glow" /> IRDAI · AMFI Compliant</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-glow" /> 100% Personalised</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-glow" /> Zero Obligation</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-gold blur-3xl opacity-30 rounded-full" />
              <div className="relative h-full w-full rounded-3xl glass p-10 flex items-center justify-center animate-float">
                <img src={logo} alt="Kori Financial Service" className="w-full max-w-[280px] drop-shadow-[0_10px_40px_oklch(0.82_0.14_85/0.4)]" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center text-navy-deep"><Award className="h-5 w-5"/></div>
                <div>
                  <div className="text-xs text-white/60">Trusted by</div>
                  <div className="font-semibold">1000+ families</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-4">
                <div className="text-xs text-white/60">Avg. Rating</div>
                <div className="flex items-center gap-1 font-semibold">4.9 <Star className="h-3.5 w-3.5 fill-gold text-gold"/></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 px-4">
        <div className="mx-auto max-w-6xl rounded-3xl bg-card shadow-luxe border border-border grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {stats.map(({ value, label, Icon }, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 text-center relative group">
              <Icon className="h-6 w-6 mx-auto mb-3 text-gold" />
              <div className="text-3xl sm:text-4xl font-display font-bold text-foreground">{value}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground tracking-wide uppercase">{label}</div>
              {i < 3 && <span className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 h-12 w-px bg-border" />}
            </motion.div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden shadow-luxe border border-border">
              <img src={portrait} alt="Rakesh Kori, Founder" className="w-full h-[520px] object-cover" loading="lazy" width={1024} height={1280}/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-deep/95 to-transparent p-6 text-white">
                <div className="text-sm text-gold tracking-[0.2em] uppercase font-semibold">Founder</div>
                <div className="font-display text-2xl">Rakesh Kori</div>
                <div className="text-sm text-white/70">Principal Financial Advisor · 20+ years</div>
              </div>
            </div>
          </motion.div>
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs tracking-[0.2em] text-gold font-semibold uppercase">
              About Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Two decades of <span className="text-gradient-emerald">trusted advice</span> for families like yours.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Kori Financial Service is a trusted consultancy providing expert solutions in LIC policies, mutual funds, insurance, and investment planning. With over 20 years of experience and 1000+ satisfied clients, we help families secure their future with honest, personalised guidance.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                ["Mission", "Empower every family with clarity and confidence over their finances."],
                ["Vision", "To be India's most trusted family financial advisor."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl p-5 bg-card border border-border shadow-card">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">{t}</div>
                  <p className="mt-2 text-sm text-foreground/80">{d}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-secondary/40">
        <SectionHeader eyebrow="Our Services" title="Comprehensive financial solutions" sub="From wealth creation to protection — every product hand-picked from leading institutions and tailored to your life stage." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-luxe hover:-translate-y-1.5 transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
                <div className={`absolute top-4 left-4 h-11 w-11 rounded-2xl bg-gradient-to-br ${s.tone} grid place-items-center text-white shadow-lg`}>
                  <s.Icon className="h-5 w-5" />
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-semibold text-white drop-shadow">{s.title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <Link to="/services" hash={s.slug} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all self-start">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mutual Fund Partners */}
      <Section className="!py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-semibold">Working with India's leading AMCs</div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <div key={p} className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground/70 hover:border-gold hover:text-foreground transition-colors">{p}</div>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section className="bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.82_0.14_85/0.15),transparent_60%)]" />
        <div className="relative">
          <SectionHeader eyebrow="Why Choose Us" title="The Kori difference" sub="Quiet expertise, transparent advice, and a relationship-first approach across generations." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {why.map(({ Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-3xl glass p-7 hover:border-gold/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-gradient-gold grid place-items-center text-navy-deep mb-4"><Icon className="h-6 w-6" /></div>
                <h3 className="text-lg font-display font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader eyebrow="Client Stories" title="Trusted by 1000+ families" sub="Real words from people who put their family's future in our hands." />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-gradient-card border border-border p-7 shadow-card relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center text-navy-deep font-bold">{t.name[0]}</div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="!pb-32">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 sm:p-16 text-white shadow-luxe">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-emerald opacity-20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4">Free Consultation</div>
              <h3 className="text-3xl sm:text-5xl font-display font-bold">Let's plan your family's secure future — together.</h3>
              <p className="mt-4 text-white/70 max-w-xl">Book a no-obligation consultation. We'll review your goals and recommend the right mix of protection and growth.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-navy-deep font-semibold shadow-gold">
                Book Consultation <ArrowRight className="h-4 w-4"/>
              </Link>
              <a href="tel:+918767876820" className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold border border-white/20 hover:bg-white/5 transition-colors">
                <Phone className="h-4 w-4 text-gold"/> +91 87678 76820
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
