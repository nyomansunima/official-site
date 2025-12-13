import { ProjectsSection } from "@features/projects";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: generatedMetadata({
      title: "Projects | Nyoman Sunima",
      description:
        "See all of my projects, business, products, side husltes and something that i built",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <ProjectsSection />
    </main>
  );
}
