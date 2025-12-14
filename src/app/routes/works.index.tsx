import { getWorks, WorkListSection } from "@features/works";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Works | Nyoman Sunima",
      description:
        "See all of my works including projects, apps, products, case studies, idea and playground",
    }),
  }),
  loader: async () => {
    const works = await getWorks();
    return { works };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { works } = Route.useLoaderData();

  return (
    <main className="flex flex-col">
      <WorkListSection works={works} />
    </main>
  );
}
