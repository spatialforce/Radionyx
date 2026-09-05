
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: "About Radionyx Geospatial Solutions | GIS & Remote Sensing Zimbabwe",
      },
      {
        name: "description",
        content:
          "Learn about Radionyx Geospatial Solutions, a Zimbabwean geospatial company providing GIS, remote sensing, mapping, spatial analysis and geospatial data solutions across Zimbabwe and Southern Africa.",
      },
      {
        name: "keywords",
        content:
          "Radionyx Geospatial Solutions, GIS company Zimbabwe, GIS Bulawayo, remote sensing Zimbabwe, geospatial solutions Zimbabwe, mapping company Zimbabwe, spatial analysis, GIS services",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium tracking-wide text-ink/60">
              About Radionyx Geospatial Solutions
            </p>

            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Geospatial intelligence for understanding land, people and
              environmental change.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-ink/70 lg:text-xl">
              Radionyx Geospatial Solutions is a Zimbabwean geospatial company
              specialising in Geographic Information Systems (GIS), remote
              sensing, digital mapping, spatial analysis and geospatial data
              solutions. We help organisations turn location-based data into
              information that can support better planning, environmental
              management, infrastructure decisions and resource management.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Who we are
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-ink/75 lg:col-span-8 lg:text-lg">
              <p>
                Radionyx Geospatial Solutions provides professional geospatial
                services for organisations that need to understand where
                things are, how places are changing and what those changes
                mean.
              </p>

              <p>
                Our work combines GIS, remote sensing, satellite imagery,
                spatial databases, cartography, field data and spatial
                analysis to investigate real-world problems. Rather than
                treating maps as the final product, we use geospatial data as
                a way of answering practical questions about land,
                infrastructure, natural resources, agriculture, water and the
                environment.
              </p>

              <p>
                Based in Zimbabwe, Radionyx works with spatial information
                across different scales, from individual sites and projects to
                landscapes, districts and national datasets. Our geographic
                focus includes Zimbabwe and the wider Southern African region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-y border-ink/10">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What Radionyx does
            </h2>

            <p className="mt-5 text-lg leading-8 text-ink/70">
              We provide geospatial services that help clients collect,
              organise, analyse, visualise and understand geographic data.
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            <div className="border-t border-ink/15 pt-6">
              <h3 className="text-xl font-semibold">
                GIS and spatial analysis
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                We develop GIS workflows for spatial analysis, data
                management, site assessment, proximity analysis, overlay
                analysis, land suitability assessment and other location-based
                decision-making requirements.
              </p>
            </div>

            <div className="border-t border-ink/15 pt-6">
              <h3 className="text-xl font-semibold">
                Remote sensing and satellite imagery
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                We use satellite imagery and remote sensing techniques to
                monitor land cover, vegetation, environmental conditions,
                landscape change and other features that can be observed from
                Earth observation data.
              </p>
            </div>

            <div className="border-t border-ink/15 pt-6">
              <h3 className="text-xl font-semibold">
                Mapping and cartography
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                We produce clear, accurate maps for planning, reporting,
                environmental assessment, research, infrastructure projects
                and other applications where geographic information needs to
                be communicated effectively.
              </p>
            </div>

            <div className="border-t border-ink/15 pt-6">
              <h3 className="text-xl font-semibold">
                Geospatial data solutions
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                We work with spatial databases, vector and raster datasets,
                field information and other geographic data to build
                structured datasets that can be analysed, maintained and used
                in future projects.
              </p>
            </div>

            <div className="border-t border-ink/15 pt-6">
              <h3 className="text-xl font-semibold">
                Environmental and land analysis
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                Geospatial analysis can reveal patterns of environmental
                change that are difficult to identify from field observations
                alone. We apply GIS and remote sensing to land-use change,
                vegetation, wetlands, water resources, erosion and other
                environmental questions.
              </p>
            </div>

            <div className="border-t border-ink/15 pt-6">
              <h3 className="text-xl font-semibold">
                Web GIS and spatial applications
              </h3>
              <p className="mt-3 leading-7 text-ink/70">
                We also develop interactive web-based mapping applications that
                allow spatial information to be explored, queried and
                communicated through modern digital interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Our approach
              </h2>

              <p className="mt-5 text-lg leading-8 text-ink/70">
                Good geospatial work starts with understanding the question
                before choosing the technology.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-0">
                <div className="border-t border-ink/15 py-7">
                  <h3 className="text-xl font-semibold">
                    01. Understand the problem
                  </h3>
                  <p className="mt-3 leading-7 text-ink/70">
                    We first establish what the client needs to understand,
                    measure or communicate. This determines the data,
                    analytical methods and outputs required.
                  </p>
                </div>

                <div className="border-t border-ink/15 py-7">
                  <h3 className="text-xl font-semibold">
                    02. Build the right spatial dataset
                  </h3>
                  <p className="mt-3 leading-7 text-ink/70">
                    We source, prepare and organise geographic data from
                    appropriate sources, including satellite imagery, existing
                    GIS datasets, field observations and spatial databases.
                  </p>
                </div>

                <div className="border-t border-ink/15 py-7">
                  <h3 className="text-xl font-semibold">
                    03. Analyse and interpret
                  </h3>
                  <p className="mt-3 leading-7 text-ink/70">
                    Spatial analysis, remote sensing and geographic modelling
                    are applied according to the requirements of the project.
                    The objective is not simply to produce data, but to
                    extract useful information from it.
                  </p>
                </div>

                <div className="border-y border-ink/15 py-7">
                  <h3 className="text-xl font-semibold">
                    04. Communicate the result
                  </h3>
                  <p className="mt-3 leading-7 text-ink/70">
                    We turn the analysis into maps, reports, datasets,
                    dashboards or web applications that can be understood and
                    used by the people making decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Our mission
            </h2>

            <p className="mt-7 text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
              To make geographic information more useful for the decisions
              that shape land, infrastructure, natural resources and
              communities.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
              We believe that better decisions begin with better information.
              By combining geospatial technology with careful analysis and a
              practical understanding of the places being studied, we aim to
              make spatial information accessible, reliable and useful.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Areas of work
          </h2>

          <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Land use and land cover",
              "Environmental monitoring",
              "Wetlands and water resources",
              "Agriculture and land management",
              "Infrastructure and development planning",
              "Natural resource management",
              "Site and suitability analysis",
              "Change detection and monitoring",
              "Geospatial data management",
            ].map((item) => (
              <div
                key={item}
                className="border-t border-ink/15 px-0 py-5 text-base font-medium sm:px-5 first:sm:px-0"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zimbabwe */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A geospatial company based in Zimbabwe
            </h2>

            <p className="mt-6 text-lg leading-8 text-ink/70">
              Radionyx Geospatial Solutions is based in Bulawayo, Zimbabwe,
              with a focus on geospatial work relevant to Zimbabwe and
              Southern Africa. Our understanding of the region informs how we
              approach local geographic data, environmental conditions,
              land-use patterns and development challenges.
            </p>

            <p className="mt-5 text-lg leading-8 text-ink/70">
              We work with clients, organisations, researchers and projects
              that need geographic information to understand a place, monitor
              change or support a decision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Have a spatial problem?
              </h2>

              <p className="mt-4 text-lg leading-8 text-ink/70">
                Tell us what you are trying to understand, map or analyse and
                we can discuss the right geospatial approach for the project.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink"
            >
              Talk to us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

