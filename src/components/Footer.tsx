import { Link } from "@tanstack/react-router";
import { contactInfo, footerNavLinks, socialLinks } from "@/data/site";

const socialIconFiles: Record<string, string> = {
  Facebook: "/icons/facebook.png",
  Instagram: "/icons/instagram.png",
  LinkedIn: "/icons/linkedin.png",
  TikTok: "/icons/tiktok.png",
};

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        {/* Contact CTA */}
        <div className="grid gap-8 border-b border-paper/15 py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div>
            <h2 className="font-display max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Have a spatial problem?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-paper/60">
              Talk to Radionyx about GIS, remote sensing, mapping, spatial
              analysis and geospatial data solutions for your project.
            </p>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="text-lg font-medium text-paper transition-colors hover:text-accent sm:text-xl"
          >
            {contactInfo.email}
          </a>
        </div>

        {/* Footer content */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr] lg:py-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Radionyx Geospatial Solutions"
                className="h-auto w-[150px] object-contain brightness-0 invert"
              />
            </div>

            <p className="max-w-sm text-sm leading-7 text-paper/55">
              Radionyx Geospatial Solutions provides GIS, remote sensing,
              mapping, spatial analysis and geospatial data solutions for
              land, water, infrastructure, environment and development.
            </p>

            <p className="mt-5 text-sm text-paper/40">
              Zimbabwe · Southern Africa
            </p>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="mb-5 text-sm font-semibold text-paper">
              Company
            </h3>

            <ul className="space-y-3">
              {footerNavLinks.company.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-paper/55 transition-colors hover:text-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h3 className="mb-5 text-sm font-semibold text-paper">
              Resources
            </h3>

            <ul className="space-y-3">
              {footerNavLinks.support.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-paper/55 transition-colors hover:text-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-paper">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-paper/60">
              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="group flex items-start gap-3 transition-colors hover:text-paper"
              >
                <img
                  src="/icons/phone.png"
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 object-contain opacity-60 transition-opacity group-hover:opacity-100"
                />

                <span>{contactInfo.phone}</span>
              </a>

              <a
            href="https://wa.me/263717428085"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Radionyx on WhatsApp"
            className="flex items-center gap-3 text-sm text-paper/70 transition-colors hover:text-accent"
          >
            <img
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              className="h-5 w-5 object-contain"
            />
            <span>WhatsApp</span>
          </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <img
                  src="/icons/location.png"
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 object-contain opacity-60"
                />

                <span className="max-w-xs leading-6">
                  {contactInfo.address}
                </span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <img
                  src="/icons/clock.png"
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 object-contain opacity-60"
                />

                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-paper/15 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} Radionyx Geospatial Solutions.
            All rights reserved.
          </p>

          {/* Social media */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ href, label }) => {
              const icon = socialIconFiles[label];

              if (!icon) {
                return null;
              }

              const finalHref =
                label === "Facebook"
                  ? "https://www.facebook.com/profile.php?id=61594012055853"
                  : href;

              return (
                <a
                  key={label}
                  href={finalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Radionyx on ${label}`}
                  className="group flex h-7 w-7 items-center justify-center"
                >
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="h-[18px] w-[18px] object-contain opacity-70 transition-all duration-200 group-hover:opacity-100"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}