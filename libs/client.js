import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_ID_SANITY,
  dataset: "production",
  token: process.env.NEXT_PUBLIC_TOKEN_SANITY,
  useCdn: false,
  apiVersion: "v1",
});
