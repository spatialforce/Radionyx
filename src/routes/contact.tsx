
import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { contactInfo } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,

  head: () => ({
    meta: [
      {
        title: "Contact Radionyx | GIS Company in Bulawayo, Zimbabwe",
      },
      {
        name: "description",
        content:
          "Contact Radionyx Geospatial Solutions in Bulawayo, Zimbabwe for GIS, remote sensing, mapping, spatial analysis, environmental monitoring and geospatial data solutions.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
});

const latitude = -20.093652136698925;
const longitude = 28.59643869482082;

const mapUrl =
  "https://www.openstreetmap.org/?mlat=-20.093652136698925&mlon=28.59643869482082#map=18/-20.093652136698925/28.59643869482082";

const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=28.58843869482082%2C-20.103652136698925%2C28.60443869482082%2C-20.083652136698925&layer=mapnik&marker=-20.093652136698925%2C28.59643869482082";

const services = [
  "GIS and spatial analysis",
  "Remote sensing and satellite imagery",
  "Mapping and cartography",
  "Environmental and land analysis",
  "Web GIS and spatial applications",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-paper text-ink">
      {/* HERO */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#090909] text-paper">
        {/* Base diagonal hatch field */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 h-[560px] w-[760px] -rotate-[18deg] opacity-[0.16]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0, transparent 14px, rgba(255,255,255,0.22) 15px, transparent 16px)",
          }}
        />

        {/* Second hatch field */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-20 h-[430px] w-[620px] rotate-[18deg] opacity-[0.10]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0, transparent 19px, rgba(255,255,255,0.28) 20px, transparent 21px)",
          }}
        />

        {/* Fine grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Topographic-style angular line */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-[5%] top-[8%] h-[320px] w-[520px] opacity-[0.14]"
          viewBox="0 0 520 320"
          fill="none"
        >
          <path
            d="M40 230C90 160 130 210 175 145C215 87 270 105 310 58C350 12 414 62 480 22"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M15 266C78 185 128 240 184 169C226 115 278 130 325 78C369 30 423 82 505 34"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M0 298C66 212 121 270 192 192C236 143 288 156 339 98C384 47 438 99 520 48"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        {/* Large grey capsule */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[7%] top-[19%] h-16 w-64 rotate-[-28deg] border border-white/20 bg-white/[0.035]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent 0, transparent 10px, rgba(255,255,255,0.18) 11px, transparent 12px)",
            }}
          />
        </div>

        {/* Long diagonal accent bar */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-100px] top-[47%] h-[18px] w-[560px] rotate-[-27deg] bg-white/[0.12]"
        />

        {/* Smaller diagonal bar */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[17%] top-[65%] h-[8px] w-48 rotate-[-27deg] bg-white/[0.24]"
        />

        {/* Grey geometric block */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[8%] right-[8%] h-32 w-32 rotate-45 border border-white/15"
        >
          <div className="absolute inset-5 border border-white/10" />
        </div>

        {/* Left capsule */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[16%] left-[-70px] h-12 w-72 rotate-[-25deg] border border-white/10 bg-white/[0.025]"
        />

        {/* Green micro accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[18%] left-[11%] h-2 w-20 rotate-[-25deg] bg-accent/70"
        />

        {/* Corner geometry */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[7%] top-[17%] h-24 w-24 border-l border-t border-white/15"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[10%] left-[7%] h-16 w-16 border-b border-l border-white/10"
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1320px] items-end px-6 pb-20 pt-36 lg:px-10 lg:pb-24">
          <div className="max-w-4xl">
            <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[78px]">
              Let&apos;s talk about
              <br />
              the spatial problem.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-paper/60 sm:text-lg">
              Tell us what you are trying to understand, map, measure or
              monitor. Radionyx provides GIS, remote sensing, mapping and
              spatial analysis services for projects across Zimbabwe and
              Southern Africa.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-paper/50">
              
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section
            id="project"
            className="scroll-mt-28 mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28"
          >
        <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
          {/* CONTACT DETAILS */}
          <div>
            <h2 className="font-display max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Tell us what you need.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-ink/60">
              Whether you need a map, spatial analysis, satellite imagery
              assessment, environmental study or a complete geospatial
              workflow, start by telling us about the problem.
            </p>

            <div className="mt-12 border-t border-ink/10">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="group flex items-start gap-5 border-b border-ink/10 py-6"
              >
                <Phone
                  size={19}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-ink/50 transition-colors group-hover:text-accent"
                />

                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="mt-1 text-sm text-ink/55 transition-colors group-hover:text-ink">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-5 border-b border-ink/10 py-6"
              >
                <Mail
                  size={19}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-ink/50 transition-colors group-hover:text-accent"
                />

                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="mt-1 text-sm text-ink/55 transition-colors group-hover:text-ink">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-5 border-b border-ink/10 py-6">
                <MapPin
                  size={19}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-ink/50"
                />

                <div>
                  <p className="text-sm font-medium">Office</p>
                  <p className="mt-1 max-w-xs text-sm leading-6 text-ink/55">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 border-b border-ink/10 py-6">
                <Clock3
                  size={19}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-ink/50"
                />

                <div>
                  <p className="text-sm font-medium">Office hours</p>
                  <p className="mt-1 text-sm text-ink/55">
                    {contactInfo.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border-t border-ink/15 pt-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col justify-center border-y border-ink/10 py-16">
                <div className="mb-7 flex h-12 w-12 items-center justify-center border border-accent">
                  <Check size={22} className="text-accent" />
                </div>

                <h2 className="font-display text-3xl font-semibold tracking-tight">
                  Your enquiry is ready.
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-ink/60">
                  Thank you for getting in touch with Radionyx. We&apos;ll
                  review the information you provided and get back to you.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 w-fit text-sm font-semibold underline decoration-ink/20 underline-offset-4 transition-colors hover:text-accent"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-9">
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium">Name *</span>
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="mt-3 block w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium">Email *</span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-3 block w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium">Organisation</span>
                    <input
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      className="mt-3 block w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
                      placeholder="Company or organisation"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-3 block w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
                      placeholder="+263..."
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium">What can we help with? *</span>

                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="mt-3 block w-full resize-none border border-ink/15 bg-transparent p-4 text-base outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
                    placeholder="Describe the project, location, data you have and what you need to understand or produce."
                  />
                </label>

                <div>
                  <p className="text-sm font-medium">
                    Services you are interested in
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex cursor-pointer items-center gap-3 border-b border-ink/10 py-3 text-sm text-ink/65 transition-colors hover:text-ink"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          className="h-4 w-4 accent-accent"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-5 border-t border-ink/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-5 text-ink/45">
                    Please provide enough information for us to understand the
                    nature and location of your project.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center justify-center gap-3 bg-ink px-7 py-4 text-sm font-semibold text-paper transition-colors hover:bg-accent hover:text-ink"
                  >
                    Send enquiry
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-ink/10 bg-[#e9e9e3]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Find our office.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-ink/60">
                Radionyx Geospatial Solutions is based in Bulawayo, Zimbabwe.
                Use the map to locate our office or open the location directly
                in OpenStreetMap.
              </p>

              <div className="mt-7 flex items-start gap-4">
                <MapPin size={19} strokeWidth={1.5} className="mt-1" />

                <p className="max-w-xs text-sm leading-6 text-ink/65">
                  {contactInfo.address}
                </p>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Open in OpenStreetMap
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="relative min-h-[460px] overflow-hidden border border-ink/10 bg-white">
              <iframe
                title="Radionyx Geospatial Solutions office location in Bulawayo, Zimbabwe"
                src={mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />

              {/* Coordinate marker information */}
              <div className="absolute bottom-4 left-4 border border-ink/10 bg-paper/95 px-4 py-3 backdrop-blur-sm">
                <p className="text-xs font-medium">
                  Radionyx Geospatial Solutions
                </p>
                <p className="mt-1 font-mono text-[10px] text-ink/45">
                  {latitude.toFixed(6)}, {longitude.toFixed(6)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="font-display max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Not sure which service you need?
              </h2>

              <p className="mt-5 max-w-md leading-7 text-ink/60">
                That is fine. You can describe the problem rather than
                choosing a technical service. We can help identify the most
                appropriate spatial workflow.
              </p>
            </div>

            <div className="border-t border-ink/10">
              <Link
                to="/services"
                className="group flex items-center justify-between border-b border-ink/10 py-7"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    Explore our GIS services
                  </h3>
                  <p className="mt-2 text-sm text-ink/50">
                    GIS, remote sensing, mapping, spatial analysis and
                    geospatial data solutions.
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  className="ml-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/projects"
                className="group flex items-center justify-between border-b border-ink/10 py-7"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    See our projects
                  </h3>
                  <p className="mt-2 text-sm text-ink/50">
                    Examples of spatial analysis, environmental mapping and
                    remote-sensing work.
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  className="ml-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="group flex items-center justify-between py-7"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    Learn about Radionyx
                  </h3>
                  <p className="mt-2 text-sm text-ink/50">
                    Our approach to geospatial data, geographic analysis and
                    decision support.
                  </p>
                </div>

                <ArrowRight
                  size={20}
                  className="ml-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink px-6 py-20 text-paper lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Have a spatial problem?
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-paper/55">
              Start with the problem. We&apos;ll help turn it into a
              practical geospatial workflow.
            </p>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="group inline-flex items-center gap-3 text-base font-semibold text-paper"
          >
            {contactInfo.email}
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}


