import { IntroSection } from "@features/home";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Software Engineer | Nyoman Sunima",
      description:
        "Focused on crafting digital products, website, web app, mobile app to help business",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <IntroSection />
    </main>
  );
}
