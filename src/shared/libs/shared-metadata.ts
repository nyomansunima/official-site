import { loadConfig } from "./config"

interface GeneratedMetadataInput {
  title: string
  description: string
  image?: string
}

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput) {
  const config = loadConfig()

  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "Product Designer, UI UX Designer, Web Designer, Shopify Developer, Web Developer, Webflow Expert, Framer Expert, Squarespace, Wix Developer, Fullstack, Mobile Developer, Indie Hacker",
    },
    { name: "creator", content: "nyomansunima" },
    { name: "publisher", content: "nyomansunima" },
    { name: "application-name", content: "Nyoman Sunima" },
    { name: "google-site-verification", content: config.verification.google },
    { name: "category", content: "Websites" },
    { name: "generator", content: "React Router" },
    { name: "pinterest-rich-pin", content: "true" },

    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1729709107977/6dabcb40-d18e-48cf-a86b-7b423efb6605.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },

    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "nyomansunima" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1729709107977/6dabcb40-d18e-48cf-a86b-7b423efb6605.png",
    },
  ]
}
