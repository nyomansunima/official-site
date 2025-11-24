import {
  AchievementSection,
  ActivitySection,
  EndWordSection,
  IndieSection,
  IntroSection,
  SharingSection,
} from "@features/about";
import { ArticleContent } from "@shared/components";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: generatedMetadata({
      title: "About | Nyoman Sunima",
      description: "The whole story about me and all of the journey",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <ArticleContent>
        <IntroSection />
        <ActivitySection />
        <SharingSection />
        <IndieSection />
        <AchievementSection />
        <EndWordSection />
      </ArticleContent>
    </main>
  );
}
