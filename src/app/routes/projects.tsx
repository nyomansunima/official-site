import projects from "@features/data/projects-data.json";
import * as List from "@shared/components/list";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: generatedMetadata({
      title: "Projects | Nyoman Sunima",
      description:
        "See all of my projects, business, products, side husltes and something that i built",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-16">
      {projects.map((group, groupIndex) => (
        <List.Group key={groupIndex}>
          <List.Title>{group.title}:</List.Title>
          <List.Stacks type="LIST">
            {group.list.map((item, itemIndex) => (
              <List.Item
                data={{ title: item.title, url: item.link, desc: item.desc }}
                key={itemIndex}
                type="ALIGN"
              />
            ))}
          </List.Stacks>
        </List.Group>
      ))}
    </main>
  );
}
