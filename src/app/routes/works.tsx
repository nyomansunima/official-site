import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: generatedMetadata({
      title: "Works | Nyoman Sunima",
      description: "Crafts, works and case studies",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-10">Yeah, still working on it.</div>
    </main>
  );
}
