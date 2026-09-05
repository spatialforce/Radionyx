import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown, Cpu, Plus } from "lucide-react";
import { Capsule, MonoImage, Reveal } from "@/components/ui";
import { contactInfo, faqs, process, projects, services } from "@/data/site";

const SITE_URL = "https://www.radionyx.co.zw";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "GIS Services in Zimbabwe | Radionyx Geospatial Solutions",
      },
      {
        name: "description",
        content:
          "Radionyx Geospatial Solutions provides GIS services in Zimbabwe, including GIS mapping, remote sensing, spatial analysis, land use and land cover mapping, environmental GIS and geospatial data solutions.",
      },
      {
        name: "keywords",
        content:
          "GIS services Zimbabwe, GIS in Zimbabwe, GIS company Zimbabwe, geospatial services Zimbabwe, GIS mapping Zimbabwe, remote sensing Zimbabwe, spatial analysis Zimbabwe, environmental GIS Zimbabwe, land use mapping Zimbabwe",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },
      {
        name: "author",
        content: "Radionyx Geospatial Solutions",
      },
      {
        property: "og:title",
        content: "GIS Services in Zimbabwe | Radionyx Geospatial Solutions",
      },
      {
        property: "og:description",
        content:
          "GIS, remote sensing, mapping and spatial analysis services in Zimbabwe. Radionyx turns geographic data into practical information for planning, environmental management, agriculture, water and infrastructure.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        property: "og:site_name",
        content: "Radionyx Geospatial Solutions",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/hero-mapping.webp`,
      },
      {
        property: "og:image:alt",
        content:
          "GIS and geospatial mapping imagery representing Zimbabwe",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "GIS Services in Zimbabwe | Radionyx Geospatial Solutions",
      },
      {
        name: "twitter:description",
        content:
          "GIS, remote sensing, mapping and spatial analysis services across Zimbabwe.",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/images/hero-mapping.webp`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: SITE_URL,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Radionyx Geospatial Solutions",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              email: contactInfo.email,
              telephone: contactInfo.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: contactInfo.address,
                addressLocality: contactInfo.city,
                addressRegion: contactInfo.region,
                addressCountry: contactInfo.country,
              },
              areaServed: {
                "@type": "Country",
                name: "Zimbabwe",
              },
              description:
                "Geospatial consultancy providing GIS, mapping, remote sensing, spatial analysis, environmental GIS and geospatial data solutions in Zimbabwe.",
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Radionyx Geospatial Solutions",
              publisher: {
                "@id": `${SITE_URL}/#organization`,
              },
              description:
                "GIS services, remote sensing, mapping and spatial analysis in Zimbabwe.",
            },
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              url: SITE_URL,
              name: "GIS Services in Zimbabwe | Radionyx Geospatial Solutions",
              isPartOf: {
                "@id": `${SITE_URL}/#website`,
              },
              about: {
                "@id": `${SITE_URL}/#organization`,
              },
              description:
                "GIS services in Zimbabwe covering GIS mapping, remote sensing, spatial analysis, land use and land cover mapping, environmental GIS and geospatial data solutions.",
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section
        className="relative h-[610px] overflow-hidden bg-ink lg:h-[680px]"
        aria-labelledby="home-title"
      >
        <img
          src="/images/hero-mapping.webp"
          alt="GIS and geospatial mapping imagery of Zimbabwe"
          className="hero-image"
          fetchPriority="high"
          decoding="async"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/45 to-ink" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1320px] items-start px-6 pt-20 lg:px-10 lg:pt-28">
          <div className="reveal-in mx-auto w-full max-w-[820px] text-center">
            <h1
              id="home-title"
              className="font-display mb-6 text-[42px] leading-[1.06] font-semibold tracking-[-0.03em] text-paper sm:text-[56px] lg:text-[68px]"
            >
              GIS Services in Zimbabwe
              <span className="mt-3 block text-[22px] font-medium text-paper/60 sm:text-[28px] lg:text-[32px]">
                The land always tells you something. We help you hear it.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-[560px] text-base leading-relaxed text-paper/80 sm:text-lg">
              Radionyx Geospatial Solutions provides GIS, remote sensing,
              mapping and spatial analysis services in Zimbabwe, turning
              satellite imagery, survey data and terrain models into
              decisions you can act on.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-paper shadow-lg hover:bg-paper hover:text-ink"
              >
                Our services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-paper/70 bg-ink/20 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur-sm hover:bg-paper hover:text-ink"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#services"
          aria-label="Scroll to GIS services"
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-paper/50 hover:text-paper sm:flex"
        >
          <span className="text-[10px] tracking-[0.15em] uppercase">
            Scroll
          </span>
          <ChevronDown size={16} />
        </a>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="relative overflow-hidden border-y border-ink/10 bg-paper-2"
      >
        <Capsule className="top-[10%] -right-[280px] h-[115px] w-[400px] rotate-[15deg]" />

        <div className="relative mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2
                id="services-heading"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[47px]"
              >
                Seven disciplines, one goal
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65 lg:text-lg">
                Practical geospatial services for organisations working with
                land, water, agriculture, infrastructure, environment and
                development across Zimbabwe.
              </p>
            </div>

            <Link
              to="/services"
              className="group flex items-center gap-2 border-b border-ink/20 pb-0.5 text-sm font-semibold text-ink/70 hover:border-ink/60 hover:text-ink"
            >
              View all 40 services
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <div>
            {services.map((s) => (
              <Reveal key={s.id}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="grid items-baseline gap-4 border-t border-ink/10 px-3 py-6 last:border-b hover:bg-ink/5 sm:grid-cols-12 sm:gap-8"
                >
                  <span
                    aria-hidden="true"
                    className="text-lg font-semibold text-ink sm:col-span-1"
                  >
                    {s.n}
                  </span>

                  <h3 className="text-lg font-semibold text-ink sm:col-span-4">
                    {s.title}
                  </h3>

                  <p className="leading-relaxed text-ink/75 sm:col-span-7">
                    {s.deck}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ZIMBABWE / ABOUT */}
      <section
        aria-labelledby="zimbabwe-heading"
        className="relative mx-auto max-w-[1320px] overflow-hidden px-6 py-20 lg:px-10 lg:py-24"
      >
        <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="border border-ink/15 bg-paper p-4 shadow-md">
              <MonoImage
                src="/images/services/zimbabwe-cartography.webp"
                alt="Cartographic map of Zimbabwe showing the geographic context for GIS and mapping services"
                className="w-full h-auto object-contain"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <h2
              id="zimbabwe-heading"
              className="font-display mb-6 text-3xl leading-[1.2] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[47px]"
            >
              We grew up on this land. We have never stopped trying to understand
              it.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-ink/75 lg:text-xl">
              Every project we take on starts the same way with a real
              question about a real place  a wetland shrinking faster than
              anyone expected, a community that needs to know which fields
              will flood, a city planning for the people arriving next year.
            </p>

            <p className="mb-6 max-w-2xl leading-relaxed text-ink/65">
              Our GIS work combines geographic data, satellite imagery,
              spatial analysis and mapping to help turn complex information
              about Zimbabwe’s landscapes into something people can understand
              and use.
            </p>

            <Link
              to="/gis-zimbabwe"
              className="group mr-5 inline-flex w-fit items-center gap-2 border-b border-ink/20 pb-0.5 text-sm font-semibold text-ink/70 hover:border-ink/60 hover:text-ink"
            >
              GIS in Zimbabwe
              <ArrowUpRight size={15} />
            </Link>

            <Link
              to="/about"
              className="group inline-flex w-fit items-center gap-2 border-b border-ink/20 pb-0.5 text-sm font-semibold text-ink/70 hover:border-ink/60 hover:text-ink"
            >
              More about us
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        aria-labelledby="process-heading"
        className="relative overflow-hidden bg-ink"
      >
        <div className="relative mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-24">
          <Reveal className="mb-14">
            <h2
              id="process-heading"
              className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-[50px]"
            >
              From question to answer
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/55 lg:text-lg">
              A practical GIS workflow that moves from understanding the
              problem to analysing geographic data and producing information
              that supports better decisions.
            </p>
          </Reveal>

          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, idx) => (
              <Reveal key={step.n} delay={idx * 80}>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="text-xl font-semibold text-paper"
                  >
                    {step.n}
                  </span>
                  <div className="h-px flex-1 bg-paper/15" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-paper">
                  {step.title}
                </h3>

                <p className="text-base leading-relaxed text-paper/60">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        aria-labelledby="technology-heading"
        className="border-b border-ink/10 bg-paper-2"
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
          <Reveal className="lg:col-span-7">
            <h2
              id="technology-heading"
              className="font-display mb-6 text-3xl leading-[1.2] font-semibold tracking-tight text-ink sm:text-4xl lg:text-[47px]"
            >
              Built on the tools the industry actually trusts.
            </h2>

            <p className="mb-6 max-w-[560px] text-lg leading-relaxed text-ink/75 lg:text-xl">
              From desktop GIS to cloud-based imagery processing, our stack is
              chosen for what it lets us deliver not for its own sake.
            </p>

            <p className="mb-6 max-w-[600px] leading-relaxed text-ink/65">
              Our geospatial workflows use established GIS, remote sensing,
              spatial analysis and web mapping technologies including ArcGIS
              Pro, QGIS, Global Mapper, Google Earth Engine, Sentinel-2,
              Landsat, Python, GeoPandas, Rasterio, GDAL and PostGIS.
            </p>

            <Link
              to="/technology"
              className="group inline-flex w-fit items-center gap-2 border-b border-ink/20 pb-0.5 text-sm font-semibold text-ink/70 hover:text-ink"
            >
              See our technology stack
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <Reveal
            delay={100}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div
              aria-hidden="true"
              className="flex h-28 w-28 items-center justify-center rounded-full bg-ink shadow-lg"
            >
              <Cpu size={40} className="text-accent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        aria-labelledby="projects-heading"
        className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-24"
      >
        <Reveal className="mb-12">
          <h2
            id="projects-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[47px]"
          >
            A sample of what we’ve solved
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65 lg:text-lg">
            Examples of geospatial analysis, mapping and environmental work
            demonstrating how geographic data can support real-world
            decisions in Zimbabwe.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} className="group">
              <div className="relative mb-5 border border-ink/20 p-2 shadow-sm bg-paper-2">
                <div className="overflow-hidden">
                  <MonoImage
                    src={p.image}
                    alt={`${p.title} — ${p.location}`}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <h3 className="mb-1 text-xl font-semibold text-ink">
                {p.title}
              </h3>

              <p className="mb-3 text-sm text-ink/60">{p.location}</p>

              <p className="mb-4 leading-relaxed text-ink/75">
                {p.description}
              </p>

              <Link
                to="/projects"
                className="inline-flex w-fit items-center gap-2 border-b border-ink/20 pb-0.5 text-sm font-semibold text-ink/70 hover:text-ink"
              >
                See the work
                <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-[800px] px-6 py-20 lg:py-24"
      >
        <Reveal className="mb-10">
          <h2
            id="faq-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[47px]"
          >
            Common questions
          </h2>

          <p className="mt-4 leading-relaxed text-ink/65 lg:text-lg">
            Answers to common questions about GIS services, mapping,
            geospatial analysis and working with Radionyx in Zimbabwe.
          </p>
        </Reveal>

        <div className="border-t border-ink/15">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group border-b border-ink/15 py-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6">
                <span className="text-base font-semibold text-ink lg:text-lg">
                  {f.question}
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent transition-colors group-open:bg-accent group-open:text-paper"
                >
                  <Plus
                    size={14}
                    className="transition-transform duration-300 group-open:rotate-45"
                  />
                </span>
              </summary>

              <p className="mt-3 pr-10 text-base leading-relaxed text-ink/75 lg:text-lg">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        aria-labelledby="cta-heading"
        className="bg-ink"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2
                id="cta-heading"
                className="font-display max-w-4xl text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-[52px]"
              >
                Ready to start your GIS project in Zimbabwe?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/65 lg:text-xl">
                Call {contactInfo.phone} or write to {contactInfo.email}. We’ll
                help you turn a spatial challenge into clear, actionable
                intelligence.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-paper hover:bg-paper hover:text-ink"
              >
                Discuss your project
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}