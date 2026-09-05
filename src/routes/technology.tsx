
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui";
import { techStack } from "@/data/site";

export const Route = createFileRoute("/technology")({
  component: TechnologyPage,
  head: () => ({
    meta: [
      {
        title: "GIS Technology & Geospatial Tools | Radionyx",
      },
      {
        name: "description",
        content:
          "The GIS, remote sensing, spatial analysis, satellite imagery, spatial database and web mapping technologies Radionyx uses to deliver geospatial solutions in Zimbabwe.",
      },
    ],
  }),
});

const workflow = [
  {
    number: "01",
    title: "Collect",
    text: "We bring together satellite imagery, field data, existing geographic datasets and other relevant sources.",
  },
  {
    number: "02",
    title: "Process",
    text: "Raw geographic information is cleaned, prepared and transformed into reliable spatial datasets.",
  },
  {
    number: "03",
    title: "Analyse",
    text: "GIS, remote sensing and spatial analysis methods are used to identify patterns, relationships and change.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "The results are presented as maps, reports, databases, dashboards or web-based spatial applications.",
  },
];

function TechnologyPage() {
  return (
    <main className="bg-paper text-ink">
      {/* HERO */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
              The technology behind our geospatial work.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/60">
              We use GIS, remote sensing, satellite imagery, spatial analysis,
              databases and web technologies to turn geographic data into
              information that people can use.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
              We choose technology based on the work, not the trend.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-8 text-ink/60">
              <p>
                Geospatial projects rarely depend on one piece of software.
                They require a combination of data, processing methods,
                analytical tools and ways of communicating the final result.
              </p>

              <p>
                Our workflows bring these different technologies together.
                Depending on the project, we may work with desktop GIS,
                satellite imagery, cloud-based earth observation platforms,
                spatial databases, programming tools and interactive web maps.
              </p>

              <p>
                The objective is simple: produce geographic information that
                is accurate, understandable and useful for making decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STACK */}
      <section
        id="technology-stack"
        className="border-y border-ink/10 bg-[#e9e9e4]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Our technology stack
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/60">
              A practical combination of established GIS platforms, open
              technologies and modern geospatial tools.
            </p>
          </Reveal>

          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
            {techStack.map((item, index) => (
              <Reveal
                key={item.category}
                delay={index * 50}
                className="grid gap-6 py-9 lg:grid-cols-[280px_1fr] lg:gap-16"
              >
                <div>
                  <span className="font-mono text-xs text-ink/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    {item.category}
                  </h3>
                </div>

                <div>
                  <p className="max-w-3xl text-sm leading-7 text-ink/60">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-sm font-medium text-ink"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              From geographic data to a usable result.
            </h2>
          </Reveal>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {workflow.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 60}
                className="grid gap-4 py-7 sm:grid-cols-[70px_160px_1fr] sm:items-start"
              >
                <span className="font-mono text-xs text-ink/35">
                  {item.number}
                </span>

                <h3 className="font-display text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-ink/60">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS ENABLES */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                What this technology allows us to do.
              </h2>

              <p className="mt-6 text-base leading-8 text-ink/60">
                These tools support a wide range of geospatial applications,
                from analysing environmental change to building interactive
                mapping systems.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-0 border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Land use and land cover mapping",
              "Remote sensing and satellite image analysis",
              "Environmental monitoring",
              "Spatial analysis and modelling",
              "Urban and regional analysis",
              "Natural resource mapping",
              "GIS database development",
              "Interactive web mapping",
              "Geospatial data visualisation",
            ].map((item, index) => (
              <Reveal
                key={item}
                delay={index * 35}
                className="border-b border-ink/10 py-5"
              >
                <p className="text-sm font-medium">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="border-t border-ink/10 bg-[#e9e9e4]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-4xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Geospatial technology in Zimbabwe
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-ink/60">
              <p>
                Radionyx uses modern geospatial technology to support GIS,
                remote sensing and spatial analysis projects in Zimbabwe. Our
                work combines geographic information systems, satellite
                imagery, earth observation data, spatial databases and web
                mapping technologies.
              </p>

              <p>
                These technologies can be applied to land-use and land-cover
                mapping, environmental assessment, urban growth analysis,
                natural resource management, spatial planning, infrastructure
                mapping and geographic data visualisation.
              </p>

              <p>
                We use both established GIS software and open-source
                technologies where appropriate. This allows us to develop
                practical workflows around the requirements of each project
                rather than forcing every project into the same technical
                solution.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="flex flex-col gap-8 border-t border-ink pt-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                  Have a geospatial project in mind?
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-ink/60">
                  Tell us what you need to map, analyse, monitor or build.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex w-fit items-center border-b border-ink pb-2 text-sm font-semibold transition-opacity hover:opacity-50"
              >
                Talk to us →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

