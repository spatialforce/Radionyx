import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui";
import { contactInfo } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Radionyx" },
      { name: "description", content: "How Radionyx Geospatial Solutions handles personal information." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <div>
      <PageHero kicker="Legal" title="Privacy policy" subtitle="How we handle the information you share with us." />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-16 leading-8 text-ink/75">
        <p>
          Radionyx Geospatial Solutions collects only the information you provide through the
          contact form, email or phone — typically your name, organisation, location of work and
          project description. We use it solely to respond to enquiries and to deliver contracted
          work.
        </p>
        <p>
          We do not sell personal information. Project data you supply remains yours; spatial
          datasets produced under a contract are delivered as agreed and not reused without
          permission.
        </p>
        <p>
          Questions: {contactInfo.email} · {contactInfo.address}.
        </p>
      </article>
    </div>
  );
}
