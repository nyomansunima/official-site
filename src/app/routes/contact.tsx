import { ContactSection, SocialSection } from "@features/contact"
import { generatedMetadata } from "@shared/libs"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: generatedMetadata({
      title: "Contact | Nyoman Sunima",
      description: "Get in touch with me right now, start your idea",
    }),
  }),
  component: PageComponent,
})

function PageComponent() {
  return (
    <main className="flex flex-col gap-20">
      <ContactSection />
      <SocialSection />
    </main>
  )
}
