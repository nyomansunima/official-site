import contents from "@features/data/contents-data.json";
import * as List from "@shared/components/list";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contents")({
  head: () => ({
    meta: generatedMetadata({
      title: "Contents | Nyoman Sunima",
      description:
        "Everyday i write, record, and create any resources to sharing into the social media and community platforms",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-6">
      <h1 className="font-medium text-xl leading-tight">Contents.</h1>
      <div className="flex flex-col gap-10">
        {contents.map((group, groupIndex) => (
          <List.Group key={groupIndex}>
            <List.Title>{group.title}</List.Title>
            <List.Stacks
              type={
                group.title.toLowerCase().includes("publications")
                  ? "GRID"
                  : "LIST"
              }
            >
              {group.list.map((item, itemIndex) => (
                <List.Item data={item} key={itemIndex} />
              ))}
            </List.Stacks>
          </List.Group>
        ))}
      </div>
    </main>
  );
}
