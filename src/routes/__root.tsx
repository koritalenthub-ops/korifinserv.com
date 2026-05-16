import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-white/70">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-flex mt-6 items-center rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-navy-deep">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kori Financial Service — Trusted LIC, Mutual Funds & Insurance Advisor" },
      { name: "description", content: "Trusted financial consultancy with 20+ years experience and 1000+ happy clients. Expert guidance on LIC, mutual funds, health & general insurance, and fixed deposits." },
      { name: "author", content: "Kori Financial Service" },
      { property: "og:title", content: "Kori Financial Service — Trusted LIC, Mutual Funds & Insurance Advisor" },
      { property: "og:description", content: "Trusted financial consultancy with 20+ years experience and 1000+ happy clients. Expert guidance on LIC, mutual funds, health & general insurance, and fixed deposits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kori Financial Service — Trusted LIC, Mutual Funds & Insurance Advisor" },
      { name: "twitter:description", content: "Trusted financial consultancy with 20+ years experience and 1000+ happy clients. Expert guidance on LIC, mutual funds, health & general insurance, and fixed deposits." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e390ed43-64b2-4633-a223-735c9590dd7b/id-preview-dbf3356a--50dfdc16-faca-4c42-ac11-589d9b589630.lovable.app-1778914608105.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e390ed43-64b2-4633-a223-735c9590dd7b/id-preview-dbf3356a--50dfdc16-faca-4c42-ac11-589d9b589630.lovable.app-1778914608105.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/kori-logo.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen"><Outlet /></main>
      <Footer />
      <FloatingWhatsApp />
    </QueryClientProvider>
  );
}
