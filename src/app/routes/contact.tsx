import { ContactSection } from "@features/contact";
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
    <main className="flex flex-col gap-20">
      <ContactSection />
    </main>
  );
}
