import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Layers3,
  Map,
  MessageCircle,
} from "lucide-react";

import { Capsule, MonoImage, Reveal } from "@/components/ui";
import { contactInfo, getService, serviceCatalog } from "@/data/site";

const SITE_URL = "https://www.radionyx.co.zw";
const SITE_NAME = "Radionyx Geospatial Solutions";
const ACCENT = "#2DBB6F";
const INK = "#1A1A18";
const PAPER = "#F1F1EC";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(price);
}

function buildServiceSchema(service: NonNullable<ReturnType<typeof getService>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    category: service.category,
    url: `${SITE_URL}/services/${service.slug}`,
    areaServed: {
      "@type": "Country",
      name: "Zimbabwe",
    },
    provider: {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: contactInfo.phone,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address,
        addressLocality: contactInfo.city,
        addressRegion: contactInfo.region,
        addressCountry: contactInfo.country,
      },
    },
  };
}

function buildBreadcrumbSchema(
  service: NonNullable<ReturnType<typeof getService>>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GIS Services in Zimbabwe",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };
}

function buildWebPageSchema(
  service: NonNullable<ReturnType<typeof getService>>
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${service.title} in Zimbabwe | ${SITE_NAME}`,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: service.title,
    },
  };
}

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailsPage,

  head: ({ params }) => {
    const service = getService(params.slug);

    if (!service) {
      return {
        meta: [
          {
            title: "Service Not Found | Radionyx Geospatial Solutions",
          },
          {
            name: "robots",
            content: "noindex, follow",
          },
        ],
      };
    }

    const title = `${service.title} in Zimbabwe | Radionyx`;

    const description =
      `${service.description} ` +
      `Radionyx Geospatial Solutions provides ${service.title.toLowerCase()} ` +
      `and related geospatial services in Zimbabwe.`;

    const canonicalUrl = `${SITE_URL}/services/${service.slug}`;

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "author",
          content: SITE_NAME,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:url",
          content: canonicalUrl,
        },
        {
          property: "og:site_name",
          content: SITE_NAME,
        },
        {
          property: "og:image",
          content: `${SITE_URL}${service.image}`,
        },
        {
          property: "og:image:alt",
          content: `${service.title} in Zimbabwe`,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: `${SITE_URL}${service.image}`,
        },
      ],

      links: [
        {
          rel: "canonical",
          href: canonicalUrl,
        },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildServiceSchema(service)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbSchema(service)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildWebPageSchema(service)),
        },
      ],
    };
  },
});

function ServiceDetailsPage() {
  const { slug } = Route.useParams();
  const service = getService(slug);

  if (!service) {
    return <ServiceNotFound />;
  }

  const relatedServices = serviceCatalog
    .filter(
      (item) =>
        item.slug !== service.slug && item.category === service.category
    )
    .slice(0, 4);

  return (
    <div
      className="w-full overflow-hidden bg-[#F1F1EC] text-[#1A1A18]"
      style={{
        ["--radionyx-accent" as string]: ACCENT,
        ["--radionyx-ink" as string]: INK,
        ["--radionyx-paper" as string]: PAPER,
      }}
    >
      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#1A1A18]">
        <Capsule
          dark
          className="absolute -right-[280px] top-[80px] h-[150px] w-[560px] rotate-[-18deg]"
        />

        <Capsule
          dark
          filled
          className="absolute -right-[170px] top-[210px] h-[95px] w-[390px] rotate-[-18deg]"
        />

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-10">
          {/* Breadcrumb */}
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-16 flex flex-wrap items-center gap-2 text-xs text-[#F1F1EC]/45"
            >
              <Link
                to="/"
                className="transition-colors hover:text-[#F1F1EC]"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                to="/services"
                className="transition-colors hover:text-[#F1F1EC]"
              >
                GIS Services
              </Link>

              <span>/</span>

              <span className="text-[#F1F1EC]/70">{service.title}</span>
            </nav>
          </Reveal>

          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p
                  className="mb-6 text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: ACCENT }}
                >
                  {service.category}
                </p>

                <h1 className="max-w-[850px] text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#F1F1EC] sm:text-[56px] lg:text-[70px]">
                  {service.title}
                </h1>

                <p className="mt-7 max-w-[720px] text-lg leading-8 text-[#F1F1EC]/70 lg:text-xl">
                  {service.description}
                </p>
              </Reveal>
            </div>

            <Reveal delay={100} className="lg:col-span-5">
              <div className="border-l border-[#F1F1EC]/15 pl-6 lg:pl-8">
                <p className="mb-2 text-[10px] uppercase tracking-[0.17em] text-[#F1F1EC]/40">
                  GIS service in Zimbabwe
                </p>

                <p className="text-sm leading-6 text-[#F1F1EC]/65">
                  Radionyx Geospatial Solutions provides practical spatial
                  data, mapping and analysis services for projects across
                  Zimbabwe.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm text-[#F1F1EC]/65">
                  <Clock3 size={16} style={{ color: ACCENT }} />
                  <span>Project scope determines turnaround</span>
                </div>

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-[#F1F1EC]/25 pb-1 text-sm font-semibold text-[#F1F1EC] transition-colors hover:border-[#2DBB6F]"
                >
                  Discuss this service
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTRO / IMAGE
      ============================================================ */}

      <section className="relative overflow-hidden border-b border-[#1A1A18]/10 bg-[#F1F1EC]">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-7">
              <div className="overflow-hidden">
                <MonoImage
                  src={service.image}
                  alt={`${service.title} GIS service in Zimbabwe`}
                  className="h-[360px] lg:h-[520px]"
                />
              </div>

              {service.caption && (
                <p className="mt-4 max-w-2xl text-xs leading-5 text-[#1A1A18]/45">
                  {service.caption}
                </p>
              )}
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5">
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.17em]"
                style={{ color: ACCENT }}
              >
                What this service covers
              </p>

              <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-[#1A1A18] sm:text-4xl lg:text-[46px]">
                Spatial work built around the problem, not just the map.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#1A1A18]/65 lg:text-lg">
                {service.description} The exact workflow depends on the
                geographic area, available datasets, required level of
                detail and the decision the resulting information needs to
                support.
              </p>

              <div className="mt-9 border-t border-[#1A1A18]/15">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 border-b border-[#1A1A18]/10 py-4"
                  >
                    <span
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center"
                      style={{ color: ACCENT }}
                    >
                      <Check size={15} strokeWidth={2.2} />
                    </span>

                    <span className="text-sm leading-6 text-[#1A1A18]/75 lg:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT CAN BE USED
      ============================================================ */}

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.17em]"
                style={{ color: ACCENT }}
              >
                Why it matters
              </p>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1A1A18] sm:text-4xl lg:text-[48px]">
                Geographic information becomes useful when it can support a
                decision.
              </h2>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-7 text-base leading-7 text-[#1A1A18]/65 lg:text-lg">
                <p>
                  GIS work is rarely about producing a map for its own sake.
                  The objective may be to organise spatial information,
                  identify patterns, compare locations, monitor change,
                  understand environmental conditions or provide a reliable
                  geographic dataset for another workflow.
                </p>

                <p>
                  For projects in Zimbabwe, the analysis can bring together
                  existing GIS layers, survey information, satellite imagery,
                  terrain data, environmental datasets and other geographic
                  information where appropriate.
                </p>

                <p>
                  The final deliverable can therefore be more than a static
                  map. Depending on the scope, it may include GIS-ready
                  datasets, analytical outputs, spatial databases, map
                  layouts or other digital geographic products.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          DELIVERABLES
      ============================================================ */}

      <section className="relative overflow-hidden border-y border-[#1A1A18]/10 bg-[#F9F9F6]">
        <Capsule
          className="absolute -right-[350px] top-[25%] h-[120px] w-[520px] rotate-[-18deg]"
        />

        <div className="relative mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.17em]"
                style={{ color: ACCENT }}
              >
                Possible outputs
              </p>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1A1A18] sm:text-4xl lg:text-[48px]">
                The output should be ready for the next step.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#1A1A18]/60 lg:text-lg">
                Deliverables are agreed around the project requirements rather
                than forcing every assignment into the same format.
              </p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-[#1A1A18]/15">
                {service.outputs.map((output, index) => (
                  <Reveal key={output} delay={index * 60}>
                    <div className="grid gap-4 border-b border-[#1A1A18]/15 py-6 sm:grid-cols-[56px_1fr] sm:items-center">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: ACCENT }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex items-center gap-4">
                        <Layers3
                          size={18}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#1A1A18]/40"
                        />

                        <p className="text-base font-semibold text-[#1A1A18] lg:text-lg">
                          {output}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRICING / SCOPE
      ============================================================ */}

      <section className="border-b border-[#1A1A18]/10 bg-[#F1F1EC]">
        <div className="mx-auto max-w-[1320px] px-6 py-14 lg:px-10 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <Map
                  size={20}
                  strokeWidth={1.5}
                  style={{ color: ACCENT }}
                />

                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#1A1A18]/45">
                  Indicative starting price
                </p>
              </div>

              <p className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#1A1A18]">
                ${formatPrice(service.price)}
              </p>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-6 lg:col-start-6">
              <p className="text-base leading-7 text-[#1A1A18]/65 lg:text-lg">
                This is an indicative starting price for the defined service.
                Final pricing depends on factors such as geographic coverage,
                data requirements, processing complexity, level of analysis,
                validation and turnaround time.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-2 border-b border-[#1A1A18]/20 pb-1 text-sm font-semibold text-[#1A1A18]/75 transition-colors hover:border-[#1A1A18]/60 hover:text-[#1A1A18]"
              >
                Request a project estimate
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED SERVICES
      ============================================================ */}

      {relatedServices.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p
                  className="mb-4 text-xs font-semibold uppercase tracking-[0.17em]"
                  style={{ color: ACCENT }}
                >
                  More in {service.category}
                </p>

                <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#1A1A18] sm:text-4xl lg:text-[46px]">
                  Related GIS services
                </h2>
              </div>

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 border-b border-[#1A1A18]/20 pb-1 text-sm font-semibold text-[#1A1A18]/70 transition-colors hover:border-[#1A1A18]/60 hover:text-[#1A1A18]"
              >
                View all GIS services
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((related, index) => (
                <Reveal key={related.slug} delay={index * 60}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: related.slug }}
                    className="group block border-t border-[#1A1A18]/15 pt-5"
                  >
                    <div className="mb-5 overflow-hidden">
                      <MonoImage
                        src={related.image}
                        alt={`${related.title} in Zimbabwe`}
                        className="h-48 transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-[#1A1A18]">
                      {related.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#1A1A18]/60">
                      {related.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A18]/65">
                      Explore service
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PROJECT / CONTACT BRIDGE
      ============================================================ */}

      <section className="border-t border-[#1A1A18]/10 bg-[#F9F9F6]">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-8">
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.17em]"
                style={{ color: ACCENT }}
              >
                Need this service?
              </p>

              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1A1A18] sm:text-4xl lg:text-[52px]">
                Have a spatial problem that needs more than a standard map?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#1A1A18]/60 lg:text-lg">
                Tell us what you are trying to understand, map or analyse.
                We can help define the appropriate geographic data and
                workflow for the project.
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1A1A18] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2DBB6F]"
              >
                <MessageCircle size={16} />
                Talk to Radionyx
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER NAVIGATION STRIP
      ============================================================ */}

      <section className="bg-[#1A1A18]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F1F1EC]/65 transition-colors hover:text-[#F1F1EC]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to GIS services
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F1F1EC]/65 transition-colors hover:text-[#F1F1EC]"
          >
            Start a project
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceNotFound() {
  return (
    <div className="min-h-[70vh] bg-[#F1F1EC]">
      <section className="bg-[#1A1A18]">
        <div className="mx-auto max-w-[1000px] px-6 py-24 lg:px-10 lg:py-32">
          <p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.17em]"
            style={{ color: ACCENT }}
          >
            Service not found
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#F1F1EC] sm:text-6xl">
            We couldn't find that GIS service.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F1F1EC]/65">
            The service may have been moved or the URL may be incorrect.
            Browse the complete Radionyx GIS services catalogue to find the
            service you need.
          </p>

          <Link
            to="/services"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#2DBB6F] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#F1F1EC] hover:text-[#1A1A18]"
          >
            View GIS services
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}