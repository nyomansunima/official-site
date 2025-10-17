import {
  BenefitSection,
  CTASection,
  IntroSection,
  ServiceSection,
  TeamSection,
} from "@features/collabs";
import { ArticleContent } from "@shared/components";
import { generatedMetadata } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collabs")({
  head: () => ({
    meta: generatedMetadata({
      title: "Collabs | Nyoman Sunima",
      description: "Serving with love and crafting for better impawcts",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <div className="flex flex-col gap-10">
      <ArticleContent>
        <IntroSection />
        <ServiceSection />
        <TeamSection />
        <BenefitSection />
        <CTASection />
      </ArticleContent>
    </div>
  );
}
