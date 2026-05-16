import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/kori-logo.png";
import { LinkedInIcon, FacebookIcon, InstagramIcon } from "./BrandIcons";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/awards", label: "Awards" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/85 backdrop-blur-xl border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Kori Financial Service" className="h-11 w-11 object-contain drop-shadow-[0_0_10px_oklch(0.82_0.14_85/0.3)]" />
          <div className="leading-tight">
            <div className="font-display text-lg sm:text-xl text-white tracking-wide">KORI</div>
            <div className="text-[10px] tracking-[0.3em] text-gradient-gold font-semibold">FINSERV</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors relative"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-gradient-gold rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918767876820" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
            <Phone className="h-4 w-4 text-gold" /> +91 87678 76820
          </a>
          <div className="flex items-center gap-1">
            <a href="https://www.linkedin.com/in/rakesh-kori-2109b71b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold hover:bg-white/5 hover:scale-110 transition-all duration-300">
              <LinkedInIcon className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.facebook.com/share/17m4W6pAvu/" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold hover:bg-white/5 hover:scale-110 transition-all duration-300">
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.instagram.com/rakesh73.kori?igsh=MXM4czlnaTM2YXc1cQ==" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold hover:bg-white/5 hover:scale-110 transition-all duration-300">
              <InstagramIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <Link to="/contact" className="px-5 py-2.5 rounded-full bg-gradient-gold text-navy-deep font-semibold text-sm shadow-gold hover:scale-105 transition-transform">
            Free Consultation
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-2 mx-4 rounded-2xl bg-navy-deep/95 backdrop-blur-xl border border-white/10 p-5 flex flex-col gap-1">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="px-3 py-3 text-white/90 hover:bg-white/5 rounded-lg" activeProps={{ className: "text-gold" }} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-2 px-4 py-3 rounded-full bg-gradient-gold text-navy-deep font-semibold text-center">Free Consultation</Link>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-3">
            <a href="https://www.linkedin.com/in/rakesh-kori-2109b71b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold hover:bg-white/5 transition-all duration-300">
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/share/17m4W6pAvu/" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold hover:bg-white/5 transition-all duration-300">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/rakesh73.kori?igsh=MXM4czlnaTM2YXc1cQ==" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold hover:bg-white/5 transition-all duration-300">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
