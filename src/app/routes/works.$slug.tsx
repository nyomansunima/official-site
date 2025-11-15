import {
  getRelatedWorks,
  getWorkDetail,
  RelatedWorkSection,
  WorkDetailSection,
} from "@features/works";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/works/$slug")({
  head: (ctx) => {
    const work = (ctx.loaderData as any).work;
    return {
      meta: generatedMetadata({
        title: `Works - ${work.title}| Nyoman Sunima`,
        description: work.description,
        image: work.image,
      }),
    };
  },

  // @ts-expect-error Just checking error for the return value
  loader: async (ctx) => {
    const slug = ctx.params.slug;
    const work = await getWorkDetail({ data: { slug } });
    const relatedWorks = await getRelatedWorks({ data: { slug } });

    return { work, relatedWorks };
  },
  component: PageComponent,
});

function PageComponent() {
  const { work, relatedWorks } = Route.useLoaderData() as any;

  return (
    <main className="flex flex-col">
      <WorkDetailSection work={work} />
      <RelatedWorkSection relatedWorks={relatedWorks} />
    </main>
  );
}
