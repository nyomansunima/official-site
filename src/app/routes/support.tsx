import { SupportSection } from "@features/support";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: generatedMetadata({
      title: "Support Me (Donate) | Nyoman Sunima",
      description:
        "Support me by donating for projects and contents or goodies",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <main className="flex flex-col">
      <SupportSection />
    </main>
  );
}
