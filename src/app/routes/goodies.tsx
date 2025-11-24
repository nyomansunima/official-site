import { GoodiesSection } from "@features/goodies";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/goodies")({
  head: () => ({
    meta: generatedMetadata({
      title: "Goodies | Nyoman Sunima",
      description: "Get free resources and things that help your works",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <GoodiesSection />
    </main>
  );
}
