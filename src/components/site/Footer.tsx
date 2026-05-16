import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from "./BrandIcons";
import logo from "@/assets/kori-logo.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 pt-20 pb-8 mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.07_260/0.6),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Kori" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-display text-xl text-white">KORI</div>
              <div className="text-[10px] tracking-[0.3em] text-gradient-gold font-semibold">FINSERV</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Trusted financial consultancy serving 1000+ families with LIC, mutual funds, insurance, and investment planning for over 20 years.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/rakesh-kori-2109b71b/" },
              { Icon: FacebookIcon, href: "https://www.facebook.com/share/17m4W6pAvu/" },
              { Icon: InstagramIcon, href: "https://www.instagram.com/rakesh73.kori?igsh=MXM4czlnaTM2YXc1cQ==" },
              { Icon: WhatsAppIcon, href: "https://wa.me/918767876820" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold hover:bg-white/5 hover:scale-110 transition-all duration-300">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[["/about","About Us"],["/services","Services"],["/awards","Awards"],["/blog","Insights"],["/contact","Contact"]].map(([to,l])=>(
              <li key={to}><Link to={to} className="hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {["LIC Policies","Mutual Funds","Health Insurance","General Insurance","Fixed Deposits"].map(s=>(
              <li key={s} className="hover:text-gold transition-colors cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-lg mb-5">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 text-gold mt-1 shrink-0" /><a href="tel:+918767876820">+91 87678 76820</a></li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 text-gold mt-1 shrink-0" /><a href="mailto:lic.rakeshkori@gmail.com" className="break-all">lic.rakeshkori@gmail.com</a></li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-gold mt-1 shrink-0" /><span>Kori Financial Service Office, India</span></li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Kori Financial Service. All rights reserved.</p>
        <p>Designed for trust. Built for the future.</p>
      </div>
    </footer>
  );
}
