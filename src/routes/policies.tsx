import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui";

export const Route = createFileRoute("/policies")({
  component: PoliciesPage,
  head: () => ({
    meta: [
      { title: "Policies | Radionyx" },
      { name: "description", content: "Working policies for GIS projects with Radionyx Geospatial Solutions." },
    ],
  }),
});

function PoliciesPage() {
  return (
    <div>
      <PageHero
        kicker="Legal"
        title="Working policies"
        subtitle="How we scope, price and deliver geospatial work."
      />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-16 leading-8 text-ink/75">
        <p>
          Catalogue prices are starting points. Final fees depend on study-area size, available
          data, field requirements and the level of validation needed. We confirm scope in writing
          before work begins.
        </p>
        <p>
          Deliverables typically include GIS layers, maps and a short methods note. Source
          satellite imagery remains subject to the licence of the provider.
        </p>
        <p>
          Unless otherwise agreed, we retain the right to show non-confidential maps as samples of
          professional work.
        </p>
      </article>
    </div>
  );
}
