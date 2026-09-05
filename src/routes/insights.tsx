
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/site";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
  head: () => ({
    meta: [
      {
        title: "GIS & Remote Sensing Insights in Zimbabwe | Radionyx",
      },
      {
        name: "description",
        content:
          "Explore practical insights from Radionyx Geospatial Solutions on GIS, remote sensing, land-use mapping, environmental monitoring, agriculture, water resources and spatial analysis in Zimbabwe.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
});

function InsightsPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-[1320px] px-6 pb-20 pt-20 md:px-10 lg:pb-28 lg:pt-28">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              GIS, remote sensing and spatial analysis insights
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/70 lg:text-xl lg:leading-9">
              Geographic information provides a different way of looking at
              land, people, infrastructure and the environment. GIS and
              remote sensing allow these relationships to be measured,
              compared and understood across space and time.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-ink/60">
              Through these insights, Radionyx explores practical applications
              of geospatial technology in Zimbabwe, including land-use and
              land-cover mapping, environmental monitoring, agriculture, water
              resources, urban development and spatial data analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Understanding places through geographic data
              </h2>
            </div>

            <div className="lg:col-span-7">
              <p className="text-base leading-8 text-ink/70">
                Almost every environmental, agricultural or development
                problem has a geographic dimension. Where something happens,
                what surrounds it, how it has changed and what is likely to
                happen next can all influence the decisions that need to be
                made.
              </p>

              <p className="mt-5 text-base leading-8 text-ink/70">
                Geographic Information Systems make it possible to bring
                different types of information together in a common spatial
                framework. Satellite imagery adds another dimension by
                allowing landscapes to be observed repeatedly over large
                areas and across different periods.
              </p>

              <p className="mt-5 text-base leading-8 text-ink/70">
                The result is more than a map. Spatial analysis can reveal
                patterns, relationships and changes that may be difficult to
                identify from tables or observations alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section
        className="border-t border-ink/10"
        aria-labelledby="latest-insights"
      >
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <h2
              id="latest-insights"
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Geospatial insights
            </h2>

            <p className="mt-5 text-base leading-8 text-ink/65">
              Articles and technical notes covering the use of GIS,
              satellite imagery and spatial data to investigate real
              geographic questions.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {insights.map((article, index) => (
              <article
                key={article.slug}
                className="grid gap-8 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16"
              >
                <div className="lg:col-span-2">
                  <p className="text-sm text-ink/45">
                    {article.category}
                  </p>

                  <p className="mt-2 text-xs text-ink/35">
                    Article {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    {article.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-ink/65">
                    {article.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                  >
                    Discuss this topic
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="hidden border-l border-ink/10 pl-8 lg:col-span-3 lg:block">
                  <p className="text-sm leading-7 text-ink/50">
                    Spatial analysis, geographic data and Earth observation
                    can provide evidence for understanding changes across
                    landscapes and communities.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Topics we work with
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-ink/65">
                Our interests reflect the types of spatial problems that
                organisations, researchers and communities encounter when
                working with land and natural resources.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid border-t border-ink/10 sm:grid-cols-2">
                {[
                  {
                    title: "GIS and spatial analysis",
                    text:
                      "How geographic information systems can be used to combine datasets, identify spatial relationships and support decisions.",
                  },
                  {
                    title: "Remote sensing",
                    text:
                      "Using satellite imagery and Earth observation data to monitor landscapes, vegetation, land cover and environmental change.",
                  },
                  {
                    title: "Land-use and land-cover change",
                    text:
                      "Understanding how cultivation, settlement, vegetation, bare land and other land-cover classes change over time.",
                  },
                  {
                    title: "Environmental monitoring",
                    text:
                      "Using spatial information to investigate wetlands, forests, land degradation and other environmental pressures.",
                  },
                  {
                    title: "Agriculture",
                    text:
                      "Mapping agricultural land, monitoring vegetation and examining the spatial relationship between farming and environmental resources.",
                  },
                  {
                    title: "Water resources",
                    text:
                      "Applying GIS and remote sensing to dams, catchments, wetlands, water bodies and sediment-related environmental problems.",
                  },
                  {
                    title: "Urban planning",
                    text:
                      "Using geographic data to understand urban expansion, land-use patterns, green spaces and development pressures.",
                  },
                  {
                    title: "Spatial modelling",
                    text:
                      "Using geographic variables and analytical models to investigate erosion, suitability, risk and other spatial processes.",
                  },
                ].map((topic) => (
                  <div
                    key={topic.title}
                    className="border-b border-ink/10 py-7 sm:pr-8"
                  >
                    <h3 className="text-lg font-semibold">
                      {topic.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-ink/60">
                      {topic.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why spatial information matters */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Why spatial information matters
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-6">
              <p className="leading-8 text-ink/70">
                A spreadsheet can tell you how much land has changed. A map
                can show you where that change occurred. GIS makes it possible
                to go further by examining what is near the change, what
                environmental factors are associated with it and how the
                pattern varies across a landscape.
              </p>

              <p className="leading-8 text-ink/70">
                Remote sensing extends this capability by providing repeated
                observations of the Earth's surface. This makes it possible to
                study historical conditions, measure changes between periods
                and monitor areas that may be difficult or expensive to
                survey continuously on the ground.
              </p>

              <p className="leading-8 text-ink/70">
                When these datasets are combined with appropriate spatial
                analysis, they can support stronger evidence for environmental
                assessment, land management, planning, research and
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zimbabwe */}
      <section className="border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Geospatial thinking for Zimbabwe and Southern Africa
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="leading-8 text-paper/70">
                Zimbabwe's landscapes are changing through urban growth,
                agriculture, mining, infrastructure development, climate
                variability and changing patterns of natural-resource use.
                Understanding these changes requires geographic information
                that can be analysed at the appropriate scale.
              </p>

              <p className="mt-5 leading-8 text-paper/70">
                Radionyx uses GIS, remote sensing and spatial analysis to
                investigate these geographic processes and communicate the
                results in a form that can support practical decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Need geographic data or spatial analysis for a real problem?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65">
              Whether you need land-use mapping, satellite imagery analysis,
              environmental assessment, spatial modelling or a custom GIS
              solution, Radionyx can help turn geographic data into useful
              information.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b-2 border-ink pb-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Talk to Radionyx
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

