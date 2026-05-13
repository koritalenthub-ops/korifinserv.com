import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, HeartPulse, Car, Landmark, Sparkles, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { WhatsAppIcon } from "@/components/site/BrandIcons";
import banner from "@/assets/banners/services.jpg";
import licImg from "@/assets/services/lic.jpg";
import mfImg from "@/assets/services/mutual-funds.jpg";
import healthImg from "@/assets/services/health.jpg";
import generalImg from "@/assets/services/general.jpg";
import fdImg from "@/assets/services/fd.jpg";
import wealthImg from "@/assets/services/wealth.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LIC, Mutual Funds, Insurance & FDs | Kori Financial" },
      { name: "description", content: "LIC policies, mutual funds across 9+ AMCs, health & general insurance, fixed deposits and wealth planning — tailored for your goals." },
      { property: "og:title", content: "Services — Kori Financial Service" },
      { property: "og:description", content: "Comprehensive financial solutions for every life stage." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    slug: "lic-insurance",
    Icon: ShieldCheck,
    title: "LIC Insurance",
    img: licImg,
    desc: "Life insurance from India's most trusted insurer — designed for protection, savings, tax planning and legacy. We help you choose the right policy for your stage of life.",
    items: ["Child Education Plans", "Pension & Annuity Plans", "Retirement Plans", "Tax Saving Plans (80C)", "Pure Life Protection (Term)", "Endowment & Money-Back Plans"],
    benefits: ["Government-backed security", "Lifelong financial protection", "Guaranteed bonuses", "Tax benefits up to ₹1.5L"],
    why: "Every recommendation is backed by a goal — never a commission. We re-review policies every year so they keep pace with your life.",
    tone: "from-[oklch(0.55_0.15_230)] to-[oklch(0.4_0.12_260)]",
  },
  {
    slug: "mutual-funds",
    Icon: TrendingUp,
    title: "Mutual Funds",
    img: mfImg,
    desc: "AMFI-registered mutual fund distribution across India's top fund houses with disciplined, goal-based portfolio construction for the long term.",
    items: ["SIP Planning", "Lump-Sum Investments", "Goal-Based Portfolios", "Tax-Saving ELSS", "Children's Future Funds", "Retirement Corpus Building"],
    extras: ["SBI MF", "HDFC MF", "ICICI Prudential", "Axis MF", "Kotak MF", "Nippon India", "UTI MF", "DSP MF", "Aditya Birla SL"],
    benefits: ["Start SIPs from ₹500", "Diversification across asset classes", "Compounding wealth creation", "Liquidity when you need it"],
    why: "We blend equity, debt and hybrid funds to match your risk profile and review portfolios twice a year.",
    tone: "from-[oklch(0.72_0.18_150)] to-[oklch(0.55_0.15_180)]",
  },
  {
    slug: "health-insurance",
    Icon: HeartPulse,
    title: "Health Insurance",
    img: healthImg,
    desc: "Comprehensive health protection that stands by your family when it matters most — with end-to-end claim assistance.",
    items: ["Family Floater Plans", "Critical Illness Cover", "Mediclaim Policies", "Senior Citizen Plans", "Top-Up & Super Top-Up", "Maternity Add-Ons"],
    benefits: ["Cashless treatment at 10,000+ hospitals", "Tax benefits under 80D", "Lifetime renewability", "No-claim bonus benefits"],
    why: "We help you choose adequate sum-insured for your city and life-stage — and personally support every claim.",
    tone: "from-[oklch(0.65_0.2_25)] to-[oklch(0.55_0.18_15)]",
  },
  {
    slug: "general-insurance",
    Icon: Car,
    title: "General Insurance",
    img: generalImg,
    desc: "Protection for your assets and journeys — placed with leading regulated insurers and reviewed for the right price-cover balance.",
    items: ["Vehicle Insurance (Car & Bike)", "Travel Insurance", "Property & Home Insurance", "Personal Accident Cover", "Shopkeeper Cover", "Fire & Burglary Cover"],
    benefits: ["Instant policy issuance", "Hassle-free renewals", "Claim assistance support", "Multi-insurer comparison"],
    why: "We compare across insurers so you never overpay for the same level of cover.",
    tone: "from-[oklch(0.6_0.15_280)] to-[oklch(0.45_0.13_300)]",
  },
  {
    slug: "fixed-deposits",
    Icon: Landmark,
    title: "Fixed Deposits",
    img: fdImg,
    desc: "Stable, predictable returns from RBI-regulated banks and high-rated corporate FDs for the safe portion of your portfolio.",
    items: ["Bank Fixed Deposits", "Corporate FDs", "Senior Citizen FDs", "Tax-Saving FDs", "Cumulative & Non-Cumulative", "NRI Fixed Deposits"],
    benefits: ["Capital safety", "Predictable interest", "Flexible tenure", "Senior citizen bonus rates"],
    why: "We hand-pick AAA-rated issuers and laddered tenures so liquidity meets returns.",
    tone: "from-[oklch(0.82_0.14_85)] to-[oklch(0.7_0.16_60)]",
  },
  {
    slug: "wealth-planning",
    Icon: Sparkles,
    title: "Wealth Planning",
    img: wealthImg,
    desc: "Personalised, goal-based financial planning that combines protection, growth and liquidity for your family's future.",
    items: ["Goal Mapping & Cash-flow Planning", "Asset Allocation", "Children's Education & Marriage", "Retirement Roadmap", "Estate & Nomination Planning", "Annual Portfolio Reviews"],
    benefits: ["Holistic financial roadmap", "Diversified across asset classes", "Tax-efficient structures", "Reviewed every year"],
    why: "You get a written plan, a clear roadmap, and an advisor who answers your call — for life.",
    tone: "from-[oklch(0.5_0.15_260)] to-[oklch(0.35_0.12_240)]",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Every solution, under one trusted roof." sub="From protection to wealth creation, we hand-pick the right products from regulated providers and align them with your goals." image={banner} />

      <Section>
        <div className="space-y-10">
          {services.map((s, i) => (
            <motion.div id={s.slug} key={s.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-luxe transition-all scroll-mt-28">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className={`relative lg:col-span-2 bg-gradient-to-br ${s.tone} text-white overflow-hidden min-h-[300px]`}>
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/40 to-navy-deep/70" />
                  <div className="relative p-10 h-full flex flex-col justify-between">
                    <div>
                      <s.Icon className="h-12 w-12 mb-5" />
                      <h3 className="text-3xl font-display font-bold">{s.title}</h3>
                      <p className="mt-3 text-white/85 leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="mt-8 text-xs uppercase tracking-[0.2em] text-white/60">0{i + 1} / 0{services.length}</div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 sm:p-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">What's included</div>
                      <div className="space-y-2.5">
                        {s.items.map((it) => (
                          <div key={it} className="flex items-start gap-2.5 text-sm text-foreground/85">
                            <CheckCircle2 className="h-4 w-4 text-emerald-glow shrink-0 mt-0.5" />
                            <span>{it}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">Key benefits</div>
                      <div className="space-y-2.5">
                        {s.benefits.map((b) => (
                          <div key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                            <Star className="h-4 w-4 text-gold shrink-0 mt-0.5 fill-gold" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
                  <div className="mt-7 rounded-2xl border border-gold/20 bg-gold/5 p-4 text-sm text-foreground/80">
                    <span className="font-semibold text-foreground">Why choose us: </span>{s.why}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep px-5 py-2.5 font-semibold text-sm shadow-gold">
                      Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a href={`https://wa.me/918767876820?text=${encodeURIComponent("Hello, I'm interested in " + s.title)}`} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-emerald-glow/30 bg-emerald-glow/10 text-emerald-glow hover:bg-emerald-glow/20 transition-colors">
                      <WhatsAppIcon className="h-4 w-4" /> WhatsApp Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40 !pt-16">
        <div className="rounded-3xl bg-gradient-hero p-10 sm:p-14 text-white text-center shadow-luxe relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
          <h3 className="text-3xl sm:text-4xl font-display font-bold relative">Not sure which solution fits you?</h3>
          <p className="mt-3 text-white/70 max-w-xl mx-auto relative">Book a free, no-obligation consultation and we'll build a written plan around your goals.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 relative">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep px-6 py-3 font-semibold shadow-gold">
              Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/918767876820" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-white/5 border border-white/15">
              <WhatsAppIcon className="h-4 w-4 text-emerald-glow" /> WhatsApp Now
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
