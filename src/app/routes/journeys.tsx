import { ExperienceSection, LogSection } from "@features/journeys";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journeys")({
  head: () => ({
    meta: generatedMetadata({
      title: "Journeys | Nyoman Sunima",
      description:
        "The whole story of me, nyoman sunima and all of the journey",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-20">
      <ExperienceSection />
      <LogSection />
    </main>
  );
}
