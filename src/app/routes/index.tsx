import {
  HeroSection,
  NewsletterSection,
  PublicationSection,
  WorkSection,
} from "@features/home";
import { getFeaturedWorks } from "@features/works";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Product designer, software engineer & creator | Nyoman Sunima",
      description:
        "Focused on crafting digital products, website, web app, mobile app to help business",
    }),
  }),
  loader: async () => {
    const featuredWorks = await getFeaturedWorks();
    return { featuredWorks };
  },
  component: PageComponent,
});

function PageComponent() {
  const { featuredWorks } = Route.useLoaderData();

  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <WorkSection works={featuredWorks} />
      <PublicationSection />
      <NewsletterSection />
    </main>
  );
}
