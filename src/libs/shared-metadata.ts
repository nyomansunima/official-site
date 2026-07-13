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

    { content: title, property: "og:title" },
    { content: description, property: "og:description" },
    {
      content: image ?? "https://nyomansunima.com/images/meta-image.png",
      property: "og:image",
    },
    { content: "website", property: "og:type" },
    { content: "https://nyomansunima.com", property: "og:url" },
    { content: "Nyoman Sunima", property: "og:site_name" },
    { content: "en_US", property: "og:locale" },

    { content: "summary_large_image", name: "twitter:card" },
    { content: title, name: "twitter:title" },
    { content: description, name: "twitter:description" },
    {
      content: image ?? "https://nyomansunima.com/images/meta-image.png",
      name: "twitter:image",
    },
    { content: "@nyomansunima", name: "twitter:creator" },

    { content: "#000000", name: "theme-color" },
  ];
}
