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
    <main className="flex flex-col gap-10">
      {projects.map((group, groupIndex) => (
        <List.Group key={groupIndex}>
          <List.Title>{group.title}</List.Title>
          <List.Stacks type="LIST">
            {group.list.map((item, itemIndex) => (
              <List.Item data={item} key={itemIndex} />
            ))}
          </List.Stacks>
        </List.Group>
      ))}
    </main>
  );
}
