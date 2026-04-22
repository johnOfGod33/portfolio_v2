import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    imageSizes: [
      {
        name: "card",
        width: 1200,
        height: 630,
        position: "centre",
      },
    ],
    adminThumbnail: "card",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: false,
    },
  ],
};
