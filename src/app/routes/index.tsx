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
        href: "https://nyomansunima.fyi",
        rel: "canonical",
      },
    ],
    meta: generatedMetadata({
      description:
        "Helped businesses to create their software, websites, automations and workflows that lift the profits, increase efficiencies and reduce the costs",
      title: "Nyoman Sunima - Software Engineer, Creator, Writer",
    }),
    scripts: [
      {
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          description:
            "Helped businesses to create their software, websites, automations and workflows that lift the profits, increase efficiencies and reduce the costs",
          image: "https://nyomansunima.fyi/images/meta-image.png",
          name: "Nyoman Sunima - Software Engineer, Creator, Writer",
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
