import { SourceSection } from "@features/resources";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: generatedMetadata({
      title: "Resources | Nyoman Sunima",
      description: "Get free resources and things that help your works",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <main className="flex flex-col">
      <SourceSection />
    </main>
  );
}
