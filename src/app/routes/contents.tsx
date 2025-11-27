import { PublicationSection, WritingSection } from "@features/contents";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contents")({
  head: () => ({
    meta: generatedMetadata({
      title: "Contents | Nyoman Sunima",
      description:
        "Everyday i write, record, and create any resources to sharing into the social media and community platforms",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-20">
      <PublicationSection />
      <WritingSection />
    </main>
  );
}
