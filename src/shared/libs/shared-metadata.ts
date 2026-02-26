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
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "Product Designer, Product Engineer, Software Engineer, Fullstack Engineer, Cloud Native Backend Specialist, React, Node.js, React Native, Go, Java, Rust",
    },
    { name: "creator", content: "nyomansunima" },
    { name: "publisher", content: "nyomansunima" },
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
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1769506360931/4e5a6e4e-bfdc-4e5d-a3e7-4b5040c8d1fc.png",
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
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1769506360931/4e5a6e4e-bfdc-4e5d-a3e7-4b5040c8d1fc.png",
    },
  ];
}
