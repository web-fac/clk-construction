import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

export type Service = {
  title: string;
  description: string;
  image: string;
};

export const PRISMIC_REPOSITORY_NAME = process.env.PRISMIC_REPO_NAME;

// https://prismic.io/docs/setup-nextjs#define-routes
const routes = [
  {
    type: "homepage",
    path: "/",
  },
];

export function createClient(config = {}) {
  const client = prismic.createClient(PRISMIC_REPOSITORY_NAME, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
}

export function getServices(client: prismic.Client) {
  return [
    {
      title: "Residential",
      description: "Custom homes and renovations tailored to your lifestyle.",
      image: "https://placeholder.pics/svg/300",
    },
    {
      title: "Light Commercial",
      description: "Efficient and stylish spaces for your business needs.",
      image: "https://placeholder.pics/svg/300",
    },
    {
      title: "Remodeling",
      description:
        "Transform your existing space into something extraordinary.",
      image: "https://placeholder.pics/svg/300",
    },
    {
      title: "Decks",
      description:
        "Create the perfect outdoor living space for relaxation and entertainment.",
      image: "https://placeholder.pics/svg/300",
    },
  ];
}

export function getSocials(client: prismic.Client) {}
