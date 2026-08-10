import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "~/components/contact";
import { HeroSection } from "~/components/hero";
import { ProjectSection } from "~/components/project";
import { ThoughtsSection } from "~/components/thought";
import { WorksSection } from "~/components/work";
import { generatedMetadata } from "~/libs/shared-metadata";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  head: () => ({
    links: [
      {
        href: "https://nyomansunima.com",
        rel: "canonical",
      },
    ],
    meta: generatedMetadata({
      description:
        "Helped businesses to create their software, websites, automations and workflows that lift the profits, increase efficiencies and reduce the costs",
      title: "Software Engineer - Build Software & Systems | Nyoman Sunima",
    }),
    scripts: [
      {
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          description:
            "Helped businesses to create their software, websites, automations and workflows that lift the profits, increase efficiencies and reduce the costs",
          image: "https://nyomansunima.com/images/meta-image.png",
          name: "Software Engineer - Build Software & Systems | Nyoman Sunima",
        }),
        type: "application/ld+json",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ThoughtsSection />
      <WorksSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
