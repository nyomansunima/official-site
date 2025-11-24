import { CraftSection } from "@features/crafts";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crafts")({
  head: () => ({
    meta: generatedMetadata({
      title: "Crafts | Nyoman Sunima",
      description:
        "See all of my projects, business, products, side husltes and something that i built",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-20">
      <CraftSection />
    </main>
  );
}
