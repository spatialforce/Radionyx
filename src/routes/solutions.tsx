import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui";
import { solutions } from "@/data/site";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,

  head: () => ({
    meta: [
      {
        title:
          "GIS Solutions in Zimbabwe | Agriculture, Environment, Water & Planning",
      },
      {
        name: "description",
        content:
          "GIS and remote sensing solutions in Zimbabwe for agriculture, environmental management, water resources, conservation, mining, land management and urban planning.",
      },
      {
        name: "keywords",
        content:
          "GIS solutions Zimbabwe, geospatial solutions Zimbabwe, GIS consulting Zimbabwe, remote sensing Zimbabwe, spatial analysis Zimbabwe, agricultural GIS Zimbabwe, environmental GIS Zimbabwe, water resources GIS Zimbabwe, urban planning GIS Zimbabwe, land use mapping Zimbabwe, satellite imagery Zimbabwe",
      },
    ],
  }),
});

const solutionContent: Record<
  string,
  {
    description: string;
    points: string[];
  }
> = {
  agriculture: {
    description:
      "GIS and remote sensing provide a practical way to understand agricultural land at scale. We help organisations map agricultural areas, assess land characteristics, monitor vegetation and evaluate locations for agricultural development.",
    points: [
      "Agricultural land mapping",
      "Crop and vegetation monitoring",
      "Land suitability analysis",
      "Irrigation & planning",
    ],
  },
  environment: {
    description:
      "Environmental management depends on understanding how landscapes change over time. Spatial data and satellite imagery can be used to map ecosystems, monitor land-cover change and identify areas experiencing environmental pressure.",
    points: [
      "Land-cover mapping",
      "Wetland assessment",
      "Vegetation mapping",
      "Change detection",
    ],
  },
  water: {
    description:
      "GIS makes it possible to analyse the relationship between terrain, drainage, catchments and water resources. We use spatial analysis to support watershed assessment, reservoir studies and water-resource planning.",
    points: [
      "Catchment analysis",
      "Drainage networks",
      "Reservoir assessment",
      "Hydrological modelling",
    ],
  },
  planning: {
    description:
      "Urban and regional planning requires accurate information about how land is being used and how development is changing. GIS provides the spatial evidence needed to evaluate locations, infrastructure and patterns of urban growth.",
    points: [
      "Urban growth analysis",
      "Land-use mapping",
      "Site suitability",
      "Infrastructure planning",
    ],
  },
  mining: {
    description:
      "Mining operations can have significant effects on surrounding land and natural resources. Geospatial analysis helps organisations map mining footprints, monitor changes and understand environmental conditions around extraction areas.",
    points: [
      "Footprint mapping",
      "Change detection",
      "Impact analysis",
      "Surrounding assessment",
    ],
  },
  mapping: {
    description:
      "Accurate maps and well-structured spatial data are the foundation of effective GIS. We combine geographic datasets, field information, satellite imagery and cartographic methods to produce clear and reliable spatial information.",
    points: [
      "Digital mapping",
      "Cartographic production",
      "Database development",
      "Remote sensing",
    ],
  },
};

function SolutionsPage() {
  return (
    <main className="bg-paper text-ink selection:bg-ink selection:text-paper">
      <PageHero
        title="GIS solutions for real-world decisions"
        subtitle="We use GIS, remote sensing, spatial analysis and mapping to help organisations understand land, resources, infrastructure and environmental change across Zimbabwe."
      />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Where geospatial technology makes a difference
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-ink/70 md:mt-8 md:text-xl">
              Location influences almost every decision involving land,
              infrastructure and natural resources. Our geospatial solutions
              combine GIS, satellite imagery and spatial analysis to provide
              information that can be used for planning, monitoring,
              assessment and decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:pb-32">
        <div className="flex flex-col gap-24 lg:gap-32">
          {solutions.map((solution, index) => {
            const content =
              solutionContent[solution.id] || solutionContent.mapping;
            const isEven = index % 2 !== 0;

            return (
              <article
                key={solution.id}
                className="group grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20"
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden bg-ink/5 ${
                    isEven ? "lg:order-last" : ""
                  }`}
                >
                  <img
                    src={solution.image}
                    alt={`${solution.title} GIS solutions in Zimbabwe`}
                    className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <div className="mb-6 flex items-baseline gap-4 md:mb-8">
                    <span className="font-display text-xl font-medium text-ink/30 md:text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] md:text-4xl">
                      {solution.title}
                    </h2>
                  </div>

                  <p className="mb-10 text-base leading-relaxed text-ink/75 md:text-lg">
                    {content.description}
                  </p>

                  <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                    {content.points.map((point) => (
                      <div
                        key={point}
                        className="border-t border-ink/15 py-4 text-[15px] font-medium text-ink/80 transition-colors group-hover:border-ink/30"
                      >
                        {point}
                      </div>
                    ))}
                  </div>

                  {solution.related.length > 0 && (
                    <div className="mt-8 border-t border-ink/15 pt-8">
                      <Link
                        to="/services/$slug"
                        params={{ slug: solution.related[0] }}
                        className="group/link inline-flex items-center gap-2 text-[15px] font-semibold text-ink transition-colors hover:text-accent"
                      >
                        Explore related services
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-ink/15 bg-ink/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-[-0.02em] md:text-4xl lg:text-5xl">
                Need a tailored geospatial approach?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
                Not every project fits neatly into a predefined category. If you
                need to map a specific area, analyse spatial data, monitor
                environmental change, or understand a unique geographic problem,
                we can help determine the right approach.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 bg-ink px-7 py-4 text-[15px] font-semibold text-paper transition-colors hover:bg-accent hover:text-ink focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
            >
              Talk to our team
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}