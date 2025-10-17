import { ProductSection } from "@features/crafts";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crafts")({
  head: () => ({
    meta: generatedMetadata({
      title: "Crafts | Nyoman Sunima",
      description:
        "See all of my projects, business, products, side husltes and something that i built",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <main className="flex flex-col gap-20">
      <ProductSection />
    </main>
  );
}
