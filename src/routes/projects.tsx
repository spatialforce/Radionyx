
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      {
        title: "GIS Projects & Geospatial Analysis in Zimbabwe | Radionyx",
      },
      {
        name: "description",
        content:
          "Explore GIS, remote sensing, environmental mapping, land-use analysis, spatial modelling and geospatial projects undertaken by Radionyx Geospatial Solutions in Zimbabwe.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
});

function ProjectsPage() {
  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-[1320px] px-6 pb-20 pt-20 md:px-10 lg:pb-28 lg:pt-28">
          <div className="max-w-5xl">
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              GIS projects, mapping and spatial analysis
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/70 lg:text-xl lg:leading-9">
              Radionyx Geospatial Solutions applies geographic information
              systems, remote sensing, spatial analysis and geospatial data to
              real problems involving land, water, environment, agriculture,
              infrastructure and development.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-ink/60">
              The projects presented here demonstrate the kinds of geographic
              questions we investigate, the datasets and analytical methods we
              use, and the way spatial information can be turned into useful
              evidence for planning and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section aria-labelledby="featured-projects">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <h2
              id="featured-projects"
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Selected geospatial projects
            </h2>

            <p className="mt-5 text-base leading-8 text-ink/65">
              Our work covers a range of spatial problems across Zimbabwe,
              from environmental change and land-use pressure to water
              resources, natural landscapes and geographic data management.
              Each project requires a different combination of satellite
              imagery, geographic data, field information and spatial
              modelling.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="grid gap-8 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20"
              >
                <div className="lg:col-span-5">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} project in ${project.location}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>

                <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
                  <p className="text-sm text-ink/45">
                    {project.category}
                  </p>

                  <h3 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-ink/50">
                    {project.location}
                  </p>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70">
                    {project.description}
                  </p>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      Discuss similar work
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                The spatial capabilities behind our work
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-ink/65">
                Effective geospatial work is not simply about producing a map.
                It involves building reliable geographic datasets, selecting
                appropriate analytical methods, understanding the limitations
                of the data and communicating the results clearly.
              </p>

              <p className="mt-4 max-w-lg text-base leading-8 text-ink/65">
                Our projects bring these components together to answer
                location-based questions and produce information that can be
                used by organisations, planners, researchers, environmental
                practitioners and other decision-makers.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid border-t border-ink/10 sm:grid-cols-2">
                {[
                  {
                    title: "GIS and spatial analysis",
                    text:
                      "Geographic data management, spatial queries, proximity analysis, overlay analysis and location-based modelling.",
                  },
                  {
                    title: "Remote sensing",
                    text:
                      "Satellite imagery analysis for monitoring land cover, vegetation, environmental conditions and changes over time.",
                  },
                  {
                    title: "Land-use and land-cover mapping",
                    text:
                      "Classification and analysis of land-use and land-cover patterns to understand how landscapes are changing.",
                  },
                  {
                    title: "Environmental mapping",
                    text:
                      "Spatial assessment of wetlands, forests, agricultural areas, water resources and other environmental features.",
                  },
                  {
                    title: "Change detection",
                    text:
                      "Comparison of geographic information across different dates to measure and interpret spatial and environmental change.",
                  },
                  {
                    title: "Spatial modelling",
                    text:
                      "Use of geographic variables and analytical models to understand processes such as erosion, sedimentation and land degradation.",
                  },
                  {
                    title: "Cartography",
                    text:
                      "Clear, accurate and purpose-built maps for technical reports, planning documents, research and communication.",
                  },
                  {
                    title: "Web GIS",
                    text:
                      "Interactive geographic applications that allow spatial data, maps and analysis results to be explored through the web.",
                  },
                ].map((capability) => (
                  <div
                    key={capability.title}
                    className="border-b border-ink/10 py-7 sm:pr-8"
                  >
                    <h3 className="text-lg font-semibold text-ink">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-ink/60">
                      {capability.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              From geographic question to usable evidence
            </h2>

            <p className="mt-6 text-base leading-8 text-ink/65">
              Every spatial project begins with a question. The quality of
              the final map or analysis depends on how well that question is
              translated into geographic data and an appropriate analytical
              workflow.
            </p>
          </div>

          <div className="mt-14 border-t border-ink/10">
            <div className="grid border-b border-ink/10 py-8 lg:grid-cols-12 lg:gap-10">
              <div className="text-sm font-semibold lg:col-span-2">
                01
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold">
                  Define the spatial problem
                </h3>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60 lg:col-span-6 lg:mt-0">
                We establish what needs to be measured, where the problem
                occurs, what geographic factors are relevant and what the
                analysis needs to communicate.
              </p>
            </div>

            <div className="grid border-b border-ink/10 py-8 lg:grid-cols-12 lg:gap-10">
              <div className="text-sm font-semibold lg:col-span-2">
                02
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold">
                  Build the geographic dataset
                </h3>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60 lg:col-span-6 lg:mt-0">
                We combine appropriate geographic datasets such as satellite
                imagery, administrative boundaries, terrain models, field
                observations, environmental data and existing spatial
                information.
              </p>
            </div>

            <div className="grid border-b border-ink/10 py-8 lg:grid-cols-12 lg:gap-10">
              <div className="text-sm font-semibold lg:col-span-2">
                03
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold">
                  Analyse and model
                </h3>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60 lg:col-span-6 lg:mt-0">
                GIS analysis, remote sensing, classification, change
                detection and spatial modelling are selected according to the
                question rather than applied simply because a particular
                technique is available.
              </p>
            </div>

            <div className="grid border-b border-ink/10 py-8 lg:grid-cols-12 lg:gap-10">
              <div className="text-sm font-semibold lg:col-span-2">
                04
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold">
                  Communicate the result
                </h3>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60 lg:col-span-6 lg:mt-0">
                The final output may be a detailed map, spatial database,
                analytical report, web map, dashboard or another geographic
                information product designed around the needs of the client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic scope */}
      <section className="border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Geospatial work grounded in Zimbabwe
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="leading-8 text-paper/70">
                Radionyx is based in Zimbabwe and our work is informed by the
                geographic, environmental and development conditions of the
                region. We work with spatial data at local, district,
                provincial and national scales depending on the requirements
                of the project.
              </p>

              <p className="mt-5 leading-8 text-paper/70">
                Our experience spans urban environments, rural landscapes,
                agricultural areas, wetlands, forests, water resources and
                areas undergoing rapid land-use or environmental change.
              </p>

              <p className="mt-5 leading-8 text-paper/70">
                We can support projects in Bulawayo and elsewhere in Zimbabwe,
                as well as geospatial work requiring a wider Southern African
                perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Have a geographic problem that needs to be understood?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65">
                Tell us what you are trying to understand, map or measure.
                We can help determine what spatial data and analytical
                approach can answer the question.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-b-2 border-ink pb-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Start a conversation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

