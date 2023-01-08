import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { buildFileUrl } from "@sanity/asset-utils";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_ID_SANITY,
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_TOKEN_SANITY,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export const getFileUrl = (source) =>
  buildFileUrl(source, {
    projectId: process.env.NEXT_PUBLIC_ID_SANITY,
    dataset: "production",
  });
