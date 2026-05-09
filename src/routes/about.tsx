import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Target, Eye, Users, Calendar, ShieldCheck, ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kori Financial Service — 20+ Years of Trust" },
      { name: "description", content: "Meet Rakesh Kori. 20+ years guiding 1000+ families on LIC, mutual funds, insurance and investments." },
      { property: "og:title", content: "About Kori Financial Service" },
      { property: "og:description", content: "Two decades of trusted family financial advice." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2004", title: "Practice Founded", desc: "Started as a passionate LIC advisor in Maharashtra." },
  { year: "2010", title: "Mutual Funds Added", desc: "Expanded to AMFI-registered mutual fund distribution." },
  { year: "2016", title: "500+ Families", desc: "Crossed 500 actively managed family portfolios." },
  { year: "2020", title: "Full Insurance Suite", desc: "Added health, motor, travel and property insurance." },
  { year: "2024", title: "1000+ Clients", desc: "A multi-generational practice trusted across India." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Built on trust. Backed by 20 years of experience." sub="Honest advice, deep expertise, and a relationship-first approach to your family's financial future." />

      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-6 bg-gradient-emerald opacity-20 blur-3xl rounded-full" />
            <img src={portrait} alt="Rakesh Kori" className="relative rounded-3xl shadow-luxe w-full h-[560px] object-cover border border-border" loading="lazy" width={1024} height={1280}/>
          </motion.div>
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs tracking-[0.2em] text-gold font-semibold uppercase">Our Story</div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">A practice built on <span className="text-gradient-gold">honest advice</span>.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded by Rakesh Kori in 2004, Kori Financial Service has grown into one of the most trusted family financial advisory practices in the region. We don't sell products — we build long-term relationships rooted in transparency, education and outcomes.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From a child's first SIP to a parent's retirement plan and everything in between, we sit on the same side of the table as you.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { Icon: Target, title: "Our Mission", desc: "Empower every family with clarity and confidence over their finances." },
                { Icon: Eye, title: "Our Vision", desc: "Be India's most trusted family financial advisory practice." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="rounded-2xl p-6 bg-card border border-border shadow-card">
                  <Icon className="h-6 w-6 text-gold mb-3" />
                  <div className="font-display text-lg font-semibold">{title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-secondary/40">
        <SectionHeader eyebrow="Our Journey" title="Two decades of growth" sub="A timeline of milestones built on the trust of families like yours." />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-emerald-glow to-transparent" />
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative flex sm:items-center mb-10 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-gold ring-4 ring-background z-10" />
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
                  <div className="text-xs uppercase tracking-[0.3em] text-gold font-bold">{m.year}</div>
                  <div className="mt-1 font-display text-xl font-semibold">{m.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { Icon: Calendar, v: "20+", l: "Years" },
            { Icon: Users, v: "1000+", l: "Families" },
            { Icon: ShieldCheck, v: "9+", l: "AMC Partners" },
            { Icon: Award, v: "100%", l: "Compliance" },
          ].map(({ Icon, v, l }) => (
            <div key={l} className="rounded-3xl p-7 bg-gradient-hero text-white text-center">
              <Icon className="h-7 w-7 mx-auto mb-3 text-gold" />
              <div className="text-3xl font-display font-bold">{v}</div>
              <div className="text-xs text-white/60 uppercase tracking-[0.2em] mt-1">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep px-7 py-4 font-semibold shadow-gold">
            Talk to our advisor <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
