import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "~/components/contact";
import { HeroSection } from "~/components/hero";
import { ProjectSection } from "~/components/project";
import { ThoughtsSection } from "~/components/thought";
import { WorksSection } from "~/components/work";
import { generatedMetadata } from "~/libs/shared-metadata";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Product Engineer - Build Software & Systems | Nyoman Sunima",
      description:
        "Helped businesses to create their software, websites, automations and workflows that lift the profits, increase efficiencies and reduce the costs",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WorksSection />
      <ProjectSection />
      <ThoughtsSection />
      <ContactSection />
    </main>
  );
}
