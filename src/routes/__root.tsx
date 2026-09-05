import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { AppErrorComponent } from "@/lib/error-component";
import appCss from "../styles.css?url";

const APP_NAME = "Radionyx Geospatial Solutions";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#1A1A18" },
      {
        name: "description",
        content:
          "Radionyx Geospatial Solutions provides GIS, remote sensing, mapping and spatial analysis services in Zimbabwe.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Newsreader:opsz,wght@6..72,500;6..72,600;6..72,700&display=swap",
      },
    ],
  }),
  errorComponent: AppErrorComponent,
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-paper text-ink antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteHeader />
          <main className="w-full">
            <Outlet />
          </main>
          <Footer />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFoundPage() {
  return (
    <section className="bg-ink px-6 py-28 text-center">
      <p className="text-xs font-semibold tracking-[0.16em] text-paper/50 uppercase">404</p>
      <h1 className="font-display mx-auto mt-4 max-w-2xl text-4xl font-semibold text-paper lg:text-6xl">
        That page doesn’t exist.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-paper/65">
        It may have moved, or the link is out of date.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper hover:bg-paper hover:text-ink"
      >
        Back to homepage
      </a>
    </section>
  );
}
