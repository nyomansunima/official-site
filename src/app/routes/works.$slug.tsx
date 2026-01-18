import { getWork, WorkDetailSection } from "@features/works";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/works/$slug")({
  head: (ctx) => {
    const work = (ctx.loaderData as any).work;
    return {
      meta: generatedMetadata({
        title: `${work.title} - Works | Nyoman Sunima`,
        description: work.description,
        image: work.image,
      }),
    };
  },

  // @ts-expect-error Just checking error for the return value
  loader: async (ctx) => {
    const slug = ctx.params.slug;
    const work = await getWork({ data: { slug } });

    return { work };
  },
  component: RouteComponent,
  notFoundComponent: () => <p>Hello</p>,
});

function RouteComponent() {
  const { work } = Route.useLoaderData() as any;

  return (
    <main className="flex flex-col">
      <WorkDetailSection work={work} />
    </main>
  );
}
