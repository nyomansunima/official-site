import publications from "@features/data/publication-data.json";
import writings from "@features/data/writing-data.json";
import * as List from "@shared/components/list";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

const reversedWritings = writings.reverse();

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
    <main className="flex flex-col gap-10">
      <List.Group>
        <List.Title>Publications:</List.Title>
        <List.Stacks type="GRID">
          {publications.map((item, itemIndex) => (
            <List.Item
              data={{ title: item.title, url: item.url }}
              key={itemIndex}
            />
          ))}
        </List.Stacks>
      </List.Group>

      <List.Group>
        <List.Title>Writings:</List.Title>
        <List.Stacks type="LIST">
          {reversedWritings.map((item, itemIndex) => (
            <List.Item
              data={{ title: item.title, url: item.url }}
              key={itemIndex}
            />
          ))}
        </List.Stacks>
      </List.Group>

      <List.Group>
        <List.Title>Videos:</List.Title>
        <List.Stacks type="LIST">
          <List.Item
            data={{
              title: "Cooking - Crafting the videos for you",
              url: "/",
            }}
          />
        </List.Stacks>
      </List.Group>

      <List.Group>
        <List.Title>Speaks:</List.Title>
        <List.Stacks type="LIST">
          <List.Item
            data={{
              title: "Cooking - Crafting the podcasts for you",
              url: "/",
            }}
          />
        </List.Stacks>
      </List.Group>
    </main>
  );
}
