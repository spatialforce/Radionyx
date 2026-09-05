import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/ui";
import { techStack } from "@/data/site";

export const Route = createFileRoute("/technology")({
  component: TechnologyPage,
  head: () => ({
    meta: [
      { title: "GIS Technology Stack | Radionyx" },
      {
        name: "description",
        content:
          "The GIS, remote sensing, spatial analysis and web-mapping tools Radionyx uses to deliver geospatial work in Zimbabwe.",
      },
    ],
  }),
});

function TechnologyPage() {
  return (
    <div>
      <PageHero
        kicker="Technology"
        title="Built on the tools the industry actually trusts."
        subtitle="From desktop GIS to cloud-based imagery processing, our stack is chosen for what it lets us deliver — not for its own sake."
      />
      <section className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((t, i) => (
            <Reveal
              key={t.category}
              delay={i * 80}
              className="rounded-xl border border-ink/10 bg-paper-2 p-8"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">{t.category}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/65">{t.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-sm text-ink"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
