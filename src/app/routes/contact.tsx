import contacts from "@features/data/contact-data.json";
import * as List from "@shared/components/list";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: generatedMetadata({
      title: "Contact | Nyoman Sunima",
      description: "Get in touch with me right now, start your idea",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <h1 className="text-balance font-medium text-xl leading-tight tracking-tighter">
        Connect &
        <br />
        getting in touch
      </h1>
      <div className="mt-5 flex flex-col gap-10">
        {contacts.map((group, groupIndex) => (
          <List.Group key={groupIndex}>
            <List.Title>{group.title}</List.Title>
            <List.Stacks type="GRID">
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
