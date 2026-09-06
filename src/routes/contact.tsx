
import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Plus,
} from "lucide-react";
import { MonoImage, Reveal } from "@/components/ui";
import { contactInfo, faqs, process, projects, services } from "@/data/site";

const SITE_URL = "https://www.radionyx.co.zw";

/* ============================================================
   SHOOTING STARS
   ============================================================ */

function ShootingStars() {
  const [stars, setStars] = useState<
    {
      id: number;
      left: number;
      top: number;
      delay: number;
      duration: number;
      size: number;
      length: number;
    }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 6 }, (_, id) => ({
      id,
      left: 8 + Math.random() * 84,
      top: 8 + Math.random() * 78,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 8,
      size: 1 + Math.random() * 1.5,
      length: 18 + Math.random() * 25,
    }));

    setStars(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star absolute"
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.length}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            } as React.CSSProperties
          }
        >
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${star.size * 1.6}px`,
              height: `${star.size * 1.6}px`,
            }}
          />
        </span>
      ))}
    </div>
  );
}

/* ============================================================
   ROUTE
   ============================================================ */

export const Route = createFileRoute("/contact")({
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

/* ============================================================
   HOME
   ============================================================ */

function Home() {
  return (
    <div className="w-full overflow-hidden bg-paper text-ink">
      <style>{`
        /* ---------------------------------------------
           HERO IMAGE ZOOM
           Smoothly zooms in, then back out forever.
        --------------------------------------------- */

        @keyframes radionyx-hero-zoom {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.10);
          }

          100% {
            transform: scale(1);
          }
        }

        .radionyx-hero-image {
          animation: radionyx-hero-zoom 18s ease-in-out infinite;
          transform-origin: center center;
          will-change: transform;
        }

        /* ---------------------------------------------
           SHOOTING STARS
        --------------------------------------------- */

        @keyframes radionyx-shoot {
          0% {
            opacity: 0;
            transform: translate3d(-30px, 30px, 0) rotate(-28deg);
          }

          8% {
            opacity: 0.45;
          }

          18% {
            opacity: 0;
            transform: translate3d(75px, -75px, 0) rotate(-28deg);
          }

          100% {
            opacity: 0;
            transform: translate3d(75px, -75px, 0) rotate(-28deg);
          }
        }

        .shooting-star {
          opacity: 0;
          transform-origin: right center;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(241, 241, 236, 0.16)
          );
          animation-name: radionyx-shoot;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
          transform: rotate(-28deg);
        }

        .shooting-star > span {
          background: rgba(241, 241, 236, 0.28);
        }

        @media (prefers-reduced-motion: reduce) {
          .shooting-star {
            animation: none;
            display: none;
          }

          .radionyx-hero-image {
            animation: none;
          }
        }
      `}</style>

      {/* ============================================================
          HERO
      ============================================================ */}

      <section
        className="relative h-[610px] overflow-hidden bg-ink lg:h-[680px]"
        aria-labelledby="home-title"
      >
        {/* Animated hero image */}

        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero-mapping.webp"
            alt="GIS and geospatial mapping imagery"
            className="radionyx-hero-image absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-ink/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/20" />

        {/* Shooting stars */}

        <ShootingStars />

        {/* Dot field */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3] opacity-30"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* HERO CONTENT — CENTERED */}

        <div className="relative z-10 mx-auto flex h-full max-w-[1320px] items-center justify-center px-6 text-center lg:px-10">
          <div className="flex max-w-[950px] flex-col items-center">
            <Reveal>
              <h1
                id="home-title"
                className="font-display max-w-[900px] text-[44px] font-semibold leading-[1.03] tracking-[-0.035em] text-paper sm:text-[58px] lg:text-[76px]"
              >
                GIS Services in Zimbabwe
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-7 max-w-[760px] text-xl leading-relaxed text-paper/80 sm:text-2xl lg:text-[27px] lg:leading-[1.4]">
                The land always tells you something. We help you hear it.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-[700px] text-base leading-7 text-paper/65 sm:text-lg">
                Radionyx Geospatial Solutions provides GIS, remote sensing,
                mapping and spatial analysis services, turning geographic
                data into information you can understand and act on.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Explore our services

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  hash="project"
                  className="group inline-flex items-center gap-2 border border-paper/35 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                >
                  Request a demo

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}

        <a
          href="#services"
          aria-label="Scroll to services"
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-paper/40 transition-colors hover:text-paper sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.18em]">
            Explore
          </span>

          <ChevronDown size={16} />
        </a>
      </section>

      {/* ============================================================
          SERVICES
      ============================================================ */}

      <section
        id="services"
        aria-labelledby="services-heading"
        className="border-b border-ink/10 bg-paper"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-24">
          <Reveal className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2
                id="services-heading"
                className="font-display max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl"
              >
                Geospatial services built around real questions.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-ink/65 sm:text-lg">
                We work with geographic data to help organisations understand
                land, water, agriculture, infrastructure, environment and
                development across Zimbabwe.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/60 hover:text-ink"
              >
                View all {services.length} services

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>

          <div className="border-t border-ink/15">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group grid gap-4 border-b border-ink/10 py-7 transition-colors hover:bg-ink/[0.025] sm:grid-cols-12 sm:gap-8 sm:px-3"
                >
                  <div className="sm:col-span-1">
                    <span className="text-sm font-semibold text-ink/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="sm:col-span-4">
                    <h3 className="text-xl font-semibold tracking-tight text-ink transition-transform group-hover:translate-x-1">
                      {service.title}
                    </h3>
                  </div>

                  <div className="sm:col-span-6">
                    <p className="max-w-2xl leading-7 text-ink/65">
                      {service.deck}
                    </p>
                  </div>

                  <div className="hidden items-center justify-end sm:col-span-1 sm:flex">
                    <ArrowUpRight
                      size={18}
                      className="text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ABOUT / ZIMBABWE
      ============================================================ */}

      <section
        aria-labelledby="zimbabwe-heading"
        className="border-b border-ink/10 bg-paper-2"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="border border-ink/15 bg-paper p-3">
                <MonoImage
                  src="/images/services/zimbabwe-cartography.webp"
                  alt="Cartographic map showing the geographic context for GIS and mapping services"
                  className="h-auto w-full object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-6">
              <h2
                id="zimbabwe-heading"
                className="font-display max-w-2xl text-4xl font-semibold leading-[1.12] tracking-[-0.025em] sm:text-5xl"
              >
                We work with the places we know.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/75">
                Every geospatial project starts with a question about a real
                place — a wetland changing over time, land being converted,
                infrastructure that needs to be mapped, or a landscape that
                needs to be understood.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-ink/60">
                Our work combines geographic data, satellite imagery, spatial
                analysis and cartography to turn complex geographic
                information into something useful for decision making.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <Link
                  to="/gis-zimbabwe"
                  className="group inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/60 hover:text-ink"
                >
                  GIS in Zimbabwe
                  <ArrowUpRight size={15} />
                </Link>

                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/60 hover:text-ink"
                >
                  About Radionyx
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS
      ============================================================ */}

      <section aria-labelledby="process-heading" className="bg-ink">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-24">
          <Reveal className="mb-16 max-w-3xl">
            <h2
              id="process-heading"
              className="font-display text-4xl font-semibold tracking-[-0.025em] text-paper sm:text-5xl"
            >
              From question to answer.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-paper/55 sm:text-lg">
              A practical workflow that moves from understanding the problem
              to analysing geographic information and producing useful
              results.
            </p>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.n} delay={index * 80}>
                <div className="border-t border-paper/15 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-paper/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-paper/30">
                      {step.n}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-paper">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-paper/55">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TECHNOLOGY
      ============================================================ */}

      <section
        aria-labelledby="technology-heading"
        className="border-b border-ink/10 bg-paper"
      >
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-20 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-28">
          <Reveal className="lg:col-span-8">
            <h2
              id="technology-heading"
              className="font-display max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.025em] sm:text-5xl"
            >
              The right tools for the work.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/75">
              Our workflows combine established GIS software, satellite
              imagery, remote sensing, spatial analysis and web mapping
              technologies.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-ink/60">
              Depending on the project, this can include ArcGIS Pro, QGIS,
              Global Mapper, Google Earth Engine, Sentinel-2, Landsat, Python,
              GeoPandas, Rasterio, GDAL and PostGIS.
            </p>

            <Link
              to="/technology"
              className="group mt-8 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/60 hover:text-ink"
            >
              Explore our technology

              <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <Reveal
            delay={120}
            className="lg:col-span-4 lg:flex lg:justify-end"
          >
            <div className="relative w-full max-w-[330px] border border-ink/15 p-8">
              {/* Green bullet removed */}

              <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink/35">
                Geospatial stack
              </p>

              <div className="mt-8 space-y-3 text-sm text-ink/70">
                <div className="border-t border-ink/10 pt-3">
                  GIS & Mapping
                </div>

                <div className="border-t border-ink/10 pt-3">
                  Remote Sensing
                </div>

                <div className="border-t border-ink/10 pt-3">
                  Spatial Analysis
                </div>

                <div className="border-t border-ink/10 pt-3">
                  Web GIS
                </div>

                <div className="border-t border-ink/10 pt-3">
                  Spatial Databases
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SHOWCASE / PROJECTS
      ============================================================ */}

      <section
        aria-labelledby="projects-heading"
        className="bg-paper-2"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-14">
            <h2
              id="projects-heading"
              className="font-display max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.025em] sm:text-5xl"
            >
              What we can do with geospatial data.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg">
              Explore examples of the kinds of mapping, spatial analysis,
              remote sensing and environmental work Radionyx can deliver.
            </p>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 90}
                className="group"
              >
                <div className="mb-6 overflow-hidden border border-ink/15 bg-paper p-2">
                  <div className="overflow-hidden">
                    <MonoImage
                      src={project.image}
                      alt={project.title}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Location removed */}

                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-ink/65">
                  {project.description}
                </p>

                {/* See work replaced with Request a demo */}

                <Link
                  to="/contact"
                  hash="project"
                  className="group mt-5 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/60 hover:text-ink"
                >
                  Request a demo

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
      ============================================================ */}

      <section aria-labelledby="faq-heading" className="bg-paper">
        <div className="mx-auto max-w-[900px] px-6 py-20 lg:py-28">
          <Reveal className="mb-12">
            <h2
              id="faq-heading"
              className="font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl"
            >
              Common questions.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/60 sm:text-lg">
              Answers to common questions about GIS services, mapping,
              geospatial analysis and working with Radionyx.
            </p>
          </Reveal>

          <div className="border-t border-ink/15">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-ink/15 py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8">
                  <span className="text-base font-semibold text-ink sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center border border-ink/20 text-ink/50 transition-colors group-open:border-accent group-open:bg-accent group-open:text-paper"
                  >
                    <Plus
                      size={14}
                      className="transition-transform duration-300 group-open:rotate-45"
                    />
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl pr-10 text-base leading-7 text-ink/65 sm:text-lg">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}

      <section aria-labelledby="cta-heading" className="bg-ink">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-8">
              <h2
                id="cta-heading"
                className="font-display max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-paper sm:text-5xl lg:text-[56px]"
              >
                Have a geographic question?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/55 lg:text-xl">
                Tell us what you are trying to understand. We can help you
                determine what geographic data, analysis or mapping approach
                will get you there.
              </p>
            </Reveal>

            <Reveal
              delay={120}
              className="lg:col-span-4 lg:flex lg:justify-end"
            >
              <div>
                <p className="mb-5 text-sm text-paper/40">
                  {contactInfo.email}
                </p>

                <Link
                  to="/contact"
                  hash="project"
                  className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Discuss your project

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
