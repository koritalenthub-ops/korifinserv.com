import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/918767876820?text=${encodeURIComponent("Hello, I'm interested in your financial services.")}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-glow/50 animate-ping" />
      <span className="relative flex items-center gap-2 h-14 w-14 group-hover:w-auto group-hover:px-5 rounded-full bg-gradient-emerald text-white shadow-luxe overflow-hidden transition-all duration-300 justify-center">
        <MessageCircle className="h-6 w-6 shrink-0" />
        <span className="hidden group-hover:inline whitespace-nowrap font-semibold text-sm">Chat with us</span>
      </span>
    </a>
  );
}
