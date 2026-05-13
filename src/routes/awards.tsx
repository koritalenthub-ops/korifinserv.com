import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import banner from "@/assets/banners/awards.jpg";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Recognition — Kori Financial Service" },
      { name: "description", content: "Achievements, awards and recognitions earned over 20 years of trusted financial advisory." },
      { property: "og:title", content: "Our Awards & Achievements" },
      { property: "og:description", content: "Two decades of recognised excellence." },
    ],
  }),
  component: AwardsPage,
});

const awards = [
  { year: "2024", title: "Top LIC Advisor", org: "Regional Recognition", Icon: Trophy },
  { year: "2022", title: "Excellence in Service", org: "Industry Body Recognition", Icon: Medal },
  { year: "2021", title: "Top SIP Mobiliser", org: "Mutual Fund Industry", Icon: Star },
  { year: "2019", title: "Customer Trust Award", org: "Client Choice Honor", Icon: Sparkles },
  { year: "2018", title: "Long-Service Recognition", org: "Insurance Sector", Icon: Award },
  { year: "2016", title: "Distinguished Advisor", org: "Industry Recognition", Icon: ShieldCheck },
];

const certifications = [
  { title: "IRDAI Licensed", desc: "Authorised insurance distributor under IRDAI" },
  { title: "AMFI Registered", desc: "Mutual fund distribution as per AMFI norms" },
  { title: "20+ Years", desc: "Two decades of unbroken practice" },
  { title: "1000+ Clients", desc: "Trusted by families across generations" },
];

function AwardsPage() {
  return (
    <>
      <PageHero eyebrow="Awards & Achievements" title="Recognised excellence, earned in trust." sub="A glimpse of milestones, certifications and recognitions from across the industry." image={banner} />

      <Section>
        <SectionHeader eyebrow="Our Recognition" title="Awards & Achievements" sub="Each recognition reflects the trust placed in us by 1000+ families." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl bg-gradient-card border border-border p-8 text-center shadow-card hover:shadow-gold hover:-translate-y-1 transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,oklch(0.82_0.14_85/0.15),transparent_70%)]" />
              <div className="relative">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-gold grid place-items-center shadow-gold mb-5">
                  <a.Icon className="h-9 w-9 text-navy-deep" />
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold font-bold">{a.year}</div>
                <h3 className="mt-2 font-display text-xl font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.org}</p>
                <div className="mt-5 inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold border border-gold/30 text-gold">Verified</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeader eyebrow="Certifications" title="Compliant. Credentialed. Trusted." sub="Authorised, regulated and reviewed by India's leading financial bodies." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-3xl bg-card border border-border p-7 text-center shadow-card">
              <ShieldCheck className="h-8 w-8 mx-auto mb-3 text-gold" />
              <div className="font-display text-lg font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Gallery" title="Certificates & memorable moments" sub="Photo gallery — easy to update with your awards, certificates and event photos." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="aspect-[4/5] rounded-2xl bg-gradient-hero relative overflow-hidden border border-border shadow-card hover:shadow-gold transition-all group">
              <div className="absolute inset-0 grid place-items-center text-white/40">
                <div className="text-center">
                  <Award className="h-10 w-10 mx-auto" />
                  <div className="mt-2 text-xs uppercase tracking-[0.2em]">Photo {i + 1}</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-6 text-xs text-muted-foreground">Placeholder gallery — upload your award photos and certificates to fill these tiles.</p>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep px-7 py-4 font-semibold shadow-gold">
            Talk to our advisor <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
