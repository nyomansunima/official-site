interface GeneratedMetadataInput {
  description: string;
  image?: string;
  title: string;
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
      content: description,
      name: "description",
    },
    {
      content:
        "Product Designer, Product Engineer, Software Engineer, Fullstack Engineer, Cloud Native Backend Specialist, React, Node.js, React Native, Go, Java, Rust",
      name: "keywords",
    },
    { content: "nyomansunima", name: "creator" },
    { content: "nyomansunima", name: "publisher" },
    { content: "Nyoman Sunima", name: "application-name" },
    {
      content: "YbWaUzcbw5swUBX5q_CTy2_zSMu1ou9ZOPWxiXjh97o",
      name: "google-site-verification",
    },
    { content: "Websites", name: "category" },
    { content: "true", name: "pinterest-rich-pin" },
    {
      content: title,
      name: "og:title",
    },
    {
      content: description,
      name: "og:description",
    },
    {
      content: image ?? "https://nyomansunima.com/images/meta-image.png",
      name: "og:image",
    },
    { content: "en_US", name: "og:locale" },
    { content: "website", name: "og:type" },
    {
      content: title,
      name: "twitter:title",
    },
    {
      content: description,
      name: "twitter:description",
    },
    { content: "summary_large_image", name: "twitter:card" },
    { content: "nyomansunima", name: "twitter:site" },
    { content: "@nyomansunima", name: "twitter:creator" },
    {
      content: image ?? "https://nyomansunima.com/images/meta-image.png",
      name: "twitter:image",
    },
  ];
}
