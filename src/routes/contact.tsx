import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { WhatsAppIcon, LinkedInIcon, FacebookIcon, InstagramIcon } from "@/components/site/BrandIcons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kori Financial Service — Free Consultation" },
      { name: "description", content: "Talk to Rakesh Kori. Call +91 87678 76820, WhatsApp or fill the form for a free, no-obligation financial consultation." },
      { property: "og:title", content: "Contact Kori Financial Service" },
      { property: "og:description", content: "Book your free financial consultation today." },
    ],
  }),
  component: ContactPage,
});

const services = ["LIC Policies", "Mutual Funds / SIP", "Health Insurance", "General Insurance", "Fixed Deposits", "Other"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: services[0], message: "" });

  const WHATSAPP_URL = "https://wa.me/918767876820?text=" + encodeURIComponent("Hello, I'm interested in your financial services.");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !/^\d{10}$/.test(form.phone.replace(/\D/g, "").slice(-10))) {
      setError("Please enter a valid name and 10-digit mobile number.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "w3f_bd0cb428281f833655162171705934cf99a1a68789a1c78a",
          subject: "New Lead — Kori Financial Service",
          from_name: "Kori Financial Website",
          "Full Name": form.name,
          "Mobile Number": form.phone,
          "Email": form.email,
          "Service Interested In": form.service,
          "Message": form.message,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Submission failed");
      setSubmitted(true);
      setTimeout(() => { window.open(WHATSAPP_URL, "_blank"); }, 1500);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Get In Touch" title="Let's plan your secure future." sub="Free, no-obligation consultation. We typically reply within a few hours." />

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="rounded-3xl bg-card border border-border shadow-card p-8 sm:p-10">
              <h2 className="font-display text-3xl font-bold">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">Tell us a bit about yourself and we'll get back within hours.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-emerald-glow/10 border border-emerald-glow/30 p-6 text-center">
                  <CheckCircle2 className="h-10 w-10 text-emerald-glow mx-auto" />
                  <h3 className="mt-3 font-display text-xl">Thank you, {form.name.split(" ")[0]}!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Your enquiry has been opened in WhatsApp. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Phone Number" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" maxLength={15}/>
                  <Field className="sm:col-span-2" label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 mb-2">Service Interested In</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 mb-2">Message</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      placeholder="How can we help?" />
                  </div>
                  {error && <div className="sm:col-span-2 text-sm text-destructive">{error}</div>}
                  <div className="sm:col-span-2 flex flex-wrap gap-3">
                    <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy-deep px-7 py-3.5 font-semibold shadow-gold hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed">
                      <Send className="h-4 w-4" /> {submitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold bg-emerald-glow/10 border border-emerald-glow/30 text-emerald-glow hover:bg-emerald-glow/20 transition-colors">
                      <WhatsAppIcon className="h-4 w-4" /> WhatsApp Now
                    </a>
                    <a href="tel:+918767876820" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold border border-border hover:bg-secondary transition-colors">
                      <Phone className="h-4 w-4 text-gold" /> Call Now
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl bg-gradient-hero text-white p-8 shadow-luxe">
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-5">Reach us</div>
              <ContactItem Icon={Phone} label="Phone" value="+91 87678 76820" href="tel:+918767876820" />
              <ContactItem Icon={Mail} label="Email" value="lic.rakeshkori@gmail.com" href="mailto:lic.rakeshkori@gmail.com" />
              <ContactItem Icon={MapPin} label="Office" value="Kori Financial Service, India" />
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs text-white/60 mb-3">Founder</div>
                <div className="font-display text-xl">Rakesh Kori</div>
                <div className="text-sm text-white/70">Principal Financial Advisor · 20+ years</div>
              </div>
            </div>

            <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4">Follow us</div>
              <div className="flex gap-3">
                {[LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon].map((I, i) => (
                  <a key={i} href={i === 3 ? "https://wa.me/918767876820" : "#"} target="_blank" rel="noreferrer"
                    className="h-11 w-11 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold hover:bg-gold/5 transition-colors">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border shadow-card aspect-video bg-secondary relative">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=India&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

function ContactItem({ Icon, label, value, href }: { Icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 py-3">
      <div className="h-10 w-10 rounded-full bg-white/10 grid place-items-center shrink-0"><Icon className="h-4 w-4 text-gold" /></div>
      <div>
        <div className="text-xs text-white/50 uppercase tracking-[0.15em]">{label}</div>
        <div className="font-semibold break-all">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition-opacity">{inner}</a> : inner;
}

function Field({ label, value, onChange, type = "text", required = false, className = "", maxLength }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; className?: string; maxLength?: number }) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70 mb-2">{label}{required && <span className="text-destructive ml-1">*</span>}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} maxLength={maxLength}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
    </div>
  );
}
