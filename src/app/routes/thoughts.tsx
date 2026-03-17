import thoughts from "@features/data/thoughts-data.json";
import * as List from "@shared/components/list";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thoughts")({
  head: () => ({
    meta: generatedMetadata({
      title: "Thoughts | Nyoman Sunima",
      description:
        "Everyday i write, record, and create any resources to sharing into the social media and community platforms",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-10">
        {thoughts.map((group, groupIndex) => (
          <List.Group key={groupIndex}>
            <List.Title>{group.title}</List.Title>
            <List.Stacks type={"LIST"}>
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
