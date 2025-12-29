interface GeneratedMetadataInput {
  title: string;
  description: string;
  image?: string;
}

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput):
  | (
      | React.DetailedHTMLProps<
          React.MetaHTMLAttributes<HTMLMetaElement>,
          HTMLMetaElement
        >
      | undefined
    )[]
  | undefined {
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
    { name: "creator", content: "heysunima" },
    { name: "publisher", content: "heysunima" },
    { name: "application-name", content: "Nyoman Sunima" },
    {
      name: "google-site-verification",
      content: "YbWaUzcbw5swUBX5q_CTy2_zSMu1ou9ZOPWxiXjh97o",
    },
    { name: "category", content: "Websites" },
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
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1765965435790/7bbfaf15-b304-4385-875b-adc76cb8b3e8.png",
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
    { name: "twitter:site", content: "heysunima" },
    { name: "twitter:creator", content: "@heysunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1765965435790/7bbfaf15-b304-4385-875b-adc76cb8b3e8.png",
    },
  ];
}
