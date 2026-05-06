import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Product Engineer - Build Software & Systems | Nyoman Sunima",
      description:
        "Helped businesses to create their software, websites, automations and workflows that lift the profits, increase efficiencies and reduce the costs",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <article className="prose">
        <h1>
          Product specialized
          <br />
          software engineer
        </h1>

        <p>
          A product engineer based in bali, indonesia. Currently working as
          freelancer.
        </p>

        <p>
          I've successfully helped companies to generate <i>$207M+</i> in annual
          revenue and reduced over <i>$1.5M</i> of total development costs 🎉.
        </p>

        <p>
          Previously worked at{" "}
          <a
            className="italic"
            href="https://www.rimlogistics.com"
            rel="noopener"
            target="_blank"
          >
            RIM
          </a>
          ,{" "}
          <a
            className="italic"
            href="https://www.withjoy.com"
            rel="noopener"
            target="_blank"
          >
            Joy
          </a>
          ,{" "}
          <a
            className="italic"
            href="https://www.procore.com"
            rel="noopener"
            target="_blank"
          >
            Procore
          </a>{" "}
          and{" "}
          <a
            className="italic"
            href="https://dimata.com"
            rel="noopener"
            target="_blank"
          >
            Dimata
          </a>{" "}
          to built products and transform the legacy systems to lift profits,
          increase efficiencies & reduce the costs.
        </p>

        <img alt="Clickhouse" src="/images/clickhouse-bg.webp" />

        <p>
          Currently, focus on design & develop projects to ship globally, also
          helping business to create their products. See more of{" "}
          <a className="italic" href={"/projects"}>
            what i've shipped
          </a>
          ,{" "}
          <a className="italic" href={"/thoughts"}>
            my thoughts
          </a>{" "}
          and{" "}
          <a className="italic" href={"/contact"}>
            reach out
          </a>{" "}
          for collaboration 📮.
        </p>
      </article>
    </main>
  );
}
