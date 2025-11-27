import { ProductsSection } from "@features/products";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: generatedMetadata({
      title: "Products | Nyoman Sunima",
      description:
        "See all of my projects, business, products, side husltes and something that i built",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <ProductsSection />
    </main>
  );
}
