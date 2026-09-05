
import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  X,
} from "lucide-react";

import { Reveal } from "@/components/ui";
import {
  categories,
  serviceCatalog,
  type CatalogService,
  type ServiceCategory,
} from "@/data/site";
import { useCart } from "@/lib/cart";

const SITE_URL = "https://www.radionyx.co.zw";

export const Route = createFileRoute("/services")({
  component: ServicesPage,

  head: () => {
    const serviceCount = serviceCatalog.length;

    return {
      meta: [
        {
          title: "GIS Services in Zimbabwe | Radionyx Geospatial Solutions",
        },
        {
          name: "description",
          content:
            `Explore ${serviceCount} GIS services in Zimbabwe from Radionyx Geospatial Solutions, including GIS mapping, spatial analysis, remote sensing, land-use and land-cover mapping, environmental GIS, cartography, water-resource analysis and Web GIS.`,
        },
        {
          name: "keywords",
          content:
            "GIS services Zimbabwe, GIS company Zimbabwe, GIS mapping Zimbabwe, GIS analysis Zimbabwe, remote sensing Zimbabwe, spatial analysis Zimbabwe, cartography Zimbabwe, environmental GIS Zimbabwe, land cover mapping Zimbabwe, GIS consultant Zimbabwe",
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
          content:
            "GIS Services in Zimbabwe | Radionyx Geospatial Solutions",
        },
        {
          property: "og:description",
          content:
            "Professional GIS mapping, spatial analysis, remote sensing, environmental GIS, cartography and geospatial services across Zimbabwe.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: `${SITE_URL}/services`,
        },
        {
          property: "og:image",
          content: `${SITE_URL}/og-image.jpg`,
        },
        {
          property: "og:site_name",
          content: "Radionyx Geospatial Solutions",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "GIS Services in Zimbabwe | Radionyx",
        },
        {
          name: "twitter:description",
          content:
            "Explore professional GIS, mapping, remote sensing, environmental and spatial analysis services across Zimbabwe.",
        },
        {
          name: "twitter:image",
          content: `${SITE_URL}/og-image.jpg`,
        },
      ],

      links: [
        {
          rel: "canonical",
          href: `${SITE_URL}/services`,
        },
      ],
    };
  },
});

function ServicesPage() {
  const [filter, setFilter] = useState<ServiceCategory>("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return serviceCatalog.filter((service) => {
      const categoryMatches =
        filter === "All" || service.category === filter;

      if (!categoryMatches) {
        return false;
      }

      if (!q) {
        return true;
      }

      return (
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q) ||
        service.features.some((feature) =>
          feature.toLowerCase().includes(q)
        ) ||
        service.outputs.some((output) =>
          output.toLowerCase().includes(q)
        )
      );
    });
  }, [filter, query]);

  const openIndex = openId
    ? filtered.findIndex((service) => service.id === openId)
    : -1;

  const openService =
    openIndex >= 0 ? filtered[openIndex] : null;

  return (
    <div className="w-full bg-paper">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-ink">
        {/* Subtle technical background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(241,241,236,0.75) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage:
                "linear-gradient(to right, black, transparent 78%)",
              WebkitMaskImage:
                "linear-gradient(to right, black, transparent 78%)",
            }}
          />

          <div className="absolute -right-32 top-[-120px] h-[520px] w-[520px] rounded-full border border-paper/[0.08]" />

          <div className="absolute -right-8 top-[-55px] h-[380px] w-[380px] rounded-full border border-paper/[0.06]" />

          <div className="absolute right-[130px] top-[110px] h-[180px] w-[180px] rounded-full border border-paper/[0.05]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
          <Reveal className="max-w-[900px]">
            <h1 className="font-display text-[42px] leading-[1.02] font-semibold tracking-[-0.045em] text-paper sm:text-[55px] lg:text-[70px]">
              GIS Services in Zimbabwe
            </h1>

            <p className="mt-7 max-w-[780px] text-[17px] leading-7 text-paper/70 sm:text-lg sm:leading-8">
              Professional geospatial services for understanding land,
              water, infrastructure and the environment. Radionyx combines
              GIS mapping, spatial analysis, remote sensing, cartography
              and spatial modelling to turn geographic data into useful
              information.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-paper/45">
              <span>{serviceCatalog.length} available services</span>

              <span className="hidden h-4 w-px bg-paper/20 sm:block" />

              <span>
                GIS · Remote Sensing · Mapping · Spatial Analysis
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          FILTER / SEARCH BAR
      ========================================================= */}
      <section className="sticky top-[4.75rem] z-40 border-b border-ink/10 bg-paper-2/95 backdrop-blur">
        <div className="mx-auto max-w-[1320px] px-6 py-5 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            {/* Categories — left */}
            <div className="min-w-0 flex-1">
              <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    className={`shrink-0 border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition ${
                      filter === category
                        ? "border-ink bg-ink text-paper"
                        : "border-ink/15 bg-paper text-ink/65 hover:border-ink/35 hover:text-ink"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search — far right */}
            <div className="w-full shrink-0 lg:ml-auto lg:w-[320px] xl:w-[350px]">
              <label className="relative block">
                <Search
                  size={16}
                  aria-hidden="true"
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-ink/40"
                />

                <input
                  type="search"
                  value={query}
                  onChange={(event) =>
                    setQuery(event.target.value)
                  }
                  placeholder="Search services"
                  aria-label="Search GIS services"
                  className="h-11 w-full border border-ink/15 bg-paper pr-4 pl-10 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-ink/45"
                />
              </label>
            </div>
          </div>

          {/* Results line */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-xs text-ink/45">
              Showing {filtered.length} of {serviceCatalog.length} services
            </p>

            {(query || filter !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
                className="text-xs font-medium text-ink/55 underline decoration-ink/20 underline-offset-4 transition hover:text-ink"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 py-14 lg:px-10 lg:py-20">
          {filtered.length === 0 ? (
            <div className="border-t border-ink/10 py-24 text-center">
              <h2 className="font-display text-2xl font-semibold text-ink">
                No services found
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/55">
                Try a different search term or clear the selected
                category to see all available GIS services.
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                }}
                className="mt-6 border-b border-ink/25 pb-1 text-sm font-semibold text-ink"
              >
                Show all services
              </button>
            </div>
          ) : (
            <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((service, index) => (
                <Reveal
                  key={service.id}
                  delay={(index % 3) * 45}
                >
                  <ServiceCard
                    service={service}
                    onOpen={() => setOpenId(service.id)}
                  />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          CUSTOM PROJECT CTA
      ========================================================= */}
      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl leading-tight font-semibold tracking-[-0.025em] text-ink lg:text-4xl">
              Need something more specific?
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-[650px] text-base leading-7 text-ink/65 lg:text-lg lg:leading-8">
              Not every geospatial problem fits neatly into one service.
              We can combine mapping, remote sensing, field data,
              environmental analysis, spatial modelling and Web GIS
              into one project workflow.
            </p>

            <div className="mt-7 flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-sm font-semibold text-ink transition hover:border-ink"
              >
                Discuss your project

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/gis-zimbabwe"
                className="group inline-flex items-center gap-2 border-b border-ink/15 pb-1 text-sm font-medium text-ink/55 transition hover:border-ink/30 hover:text-ink"
              >
                GIS in Zimbabwe

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
      {openService && (
        <ImageLightbox
          service={openService}
          onClose={() => setOpenId(null)}
          hasPrev={openIndex > 0}
          hasNext={openIndex < filtered.length - 1}
          onPrev={() => {
            if (openIndex > 0) {
              setOpenId(filtered[openIndex - 1].id);
            }
          }}
          onNext={() => {
            if (openIndex < filtered.length - 1) {
              setOpenId(filtered[openIndex + 1].id);
            }
          }}
        />
      )}
    </div>
  );
}

/* ===============================================================
   SERVICE CARD
=============================================================== */

function ServiceCard({
  service,
  onOpen,
}: {
  service: CatalogService;
  onOpen: () => void;
}) {
  const add = useCart((state) => state.add);
  const items = useCart((state) => state.items);

  const [justAdded, setJustAdded] = useState(false);

  const inCart = items.some(
    (item) => item.id === service.id
  );

  const handleAdd = () => {
    add(
      service.id,
      service.title,
      service.price
    );

    setJustAdded(true);

    window.setTimeout(() => {
      setJustAdded(false);
    }, 1400);
  };

  return (
    <article className="group flex h-full flex-col border-t border-ink/15 pt-5">
      {/* Image */}
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`View full image for ${service.title}`}
      >
        <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden border border-ink/10 bg-paper-2 p-5 sm:p-7">
          <img
            src={service.image}
            alt={`${service.title} — ${service.category}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="block h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />

          {/* Category */}
          <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] text-paper uppercase">
            {service.category}
          </span>

          {/* Image action */}
          <span className="absolute bottom-3 right-3 border border-ink/10 bg-paper px-3 py-2 text-[11px] font-semibold text-ink shadow-sm transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
            View full image
          </span>
        </div>
      </button>

      {/* Information */}
      <div className="flex flex-1 flex-col pt-5">
        <h2 className="font-display text-[22px] leading-tight font-semibold tracking-[-0.02em] text-ink">
          {service.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-ink/65">
          {service.description}
        </p>

        {/* Bottom actions */}
        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-4 border-t border-ink/10 pt-4">
            <div>
              <p className="text-[9px] font-medium tracking-[0.14em] text-ink/40 uppercase">
                Starting from
              </p>

              <p className="mt-1 text-lg font-semibold text-ink">
                ${service.price}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="/services/$slug"
                params={{
                  slug: service.slug,
                }}
                className="border border-ink/15 px-3.5 py-2.5 text-xs font-semibold text-ink transition hover:border-ink"
              >
                Details
              </Link>

              <button
                type="button"
                onClick={handleAdd}
                className="inline-flex items-center gap-1.5 bg-ink px-3.5 py-2.5 text-xs font-semibold text-paper transition hover:bg-accent"
              >
                {justAdded || inCart ? (
                  <>
                    <Check size={13} />
                    {justAdded ? "Added" : "In cart"}
                  </>
                ) : (
                  <>
                    <Plus size={13} />
                    Add
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ===============================================================
   LIGHTBOX
   ---------------------------------------------------------------
   - Properly locks page scrolling while open
   - Always restores the previous body overflow state
   - Escape / arrow keys are attached through useEffect
   - Full service information remains available
   - No zoom library
   - No canvas
   - No image resizing
=============================================================== */

function ImageLightbox({
  service,
  onClose,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: {
  service: CatalogService;
  onClose: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && hasPrev) {
        onPrev();
        return;
      }

      if (event.key === "ArrowRight" && hasNext) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-ink/95 p-4 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`${service.title} image viewer`}
    >
      {/* Background close */}
      <button
        type="button"
        aria-label="Close image viewer"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      {/* Viewer */}
      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-[1400px] flex-col">
        {/* Top bar */}
        <div className="flex shrink-0 items-start justify-between border-b border-paper/10 pb-4">
          <div className="min-w-0 pr-6">
            <p className="text-xs font-medium tracking-[0.12em] text-paper/40 uppercase">
              {service.category}
            </p>

            <h2 className="mt-1 font-display text-xl font-semibold tracking-[-0.02em] text-paper sm:text-2xl">
              {service.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-paper/15 text-paper transition hover:border-paper/40 hover:bg-paper/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Main content */}
        <div className="grid flex-1 gap-8 py-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10 lg:py-8">
          {/* Image */}
          <div className="relative flex min-h-[45vh] items-center justify-center border border-paper/10 bg-black/10 p-4 sm:p-8 lg:min-h-[65vh]">
            {hasPrev && (
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/15 bg-ink/60 text-paper backdrop-blur transition hover:border-paper/40 hover:bg-ink/90"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <img
              key={service.id}
              src={service.image}
              alt={`${service.title} — ${service.category}`}
              decoding="async"
              draggable={false}
              className="max-h-[70vh] max-w-full select-none object-contain"
            />

            {hasNext && (
              <button
                type="button"
                onClick={onNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/15 bg-ink/60 text-paper backdrop-blur transition hover:border-paper/40 hover:bg-ink/90"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          {/* Full service information */}
          <aside className="border-t border-paper/10 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <div>
              <p className="text-[10px] font-medium tracking-[0.14em] text-paper/40 uppercase">
                Service
              </p>

              <h3 className="mt-2 font-display text-2xl leading-tight font-semibold tracking-[-0.025em] text-paper">
                {service.title}
              </h3>
            </div>

            <div className="mt-6 border-t border-paper/10 pt-5">
              <p className="text-sm leading-6 text-paper/65">
                {service.description}
              </p>
            </div>

            <div className="mt-6 border-t border-paper/10 pt-5">
              <p className="text-[10px] font-medium tracking-[0.14em] text-paper/40 uppercase">
                Starting from
              </p>

              <p className="mt-1 text-2xl font-semibold text-paper">
                ${service.price}
              </p>
            </div>

            {/* Features */}
            {service.features.length > 0 && (
              <div className="mt-7 border-t border-paper/10 pt-5">
                <h4 className="text-xs font-semibold tracking-[0.08em] text-paper uppercase">
                  What is included
                </h4>

                <ul className="mt-4 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-5 text-paper/65"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-paper/70"
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outputs */}
            {service.outputs.length > 0 && (
              <div className="mt-7 border-t border-paper/10 pt-5">
                <h4 className="text-xs font-semibold tracking-[0.08em] text-paper uppercase">
                  Typical outputs
                </h4>

                <ul className="mt-4 space-y-3">
                  {service.outputs.map((output) => (
                    <li
                      key={output}
                      className="flex items-start gap-3 text-sm leading-5 text-paper/65"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-paper/50" />

                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services/$slug"
                params={{
                  slug: service.slug,
                }}
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-paper px-4 py-3 text-sm font-semibold text-ink transition hover:bg-paper/90"
              >
                View service details
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 border border-paper/20 px-4 py-3 text-sm font-semibold text-paper transition hover:border-paper/45 hover:bg-paper/10"
              >
                Discuss this service
                <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Bottom controls */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-paper/10 pt-4">
          <div className="flex items-center gap-3">
            {hasPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="inline-flex items-center gap-2 text-xs font-semibold text-paper/55 transition hover:text-paper"
              >
                <ArrowLeft size={14} />
                Previous
              </button>
            )}

            {hasNext && (
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center gap-2 text-xs font-semibold text-paper/55 transition hover:text-paper"
              >
                Next
                <ArrowRight size={14} />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="border-b border-paper/25 pb-1 text-xs font-semibold text-paper/65 transition hover:border-paper hover:text-paper"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
