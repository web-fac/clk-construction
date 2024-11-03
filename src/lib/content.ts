import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

export type Service = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
};

export type SelectOptions = string[];

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

export function getServices(client: prismic.Client): Promise<Service[]> {
  return Promise.resolve([
    {
      title: "Residential",
      description:
        "A longer description used to show more text for the service descriptions so that I can efficiently style the ServicesView. This shouldn't be too long, but just long enough to get the job done.",
      shortDescription:
        "Custom homes and renovations tailored to your lifestyle.",
      image: "/tmp/images/43666884_1058094561036030_8834559724268552192_n.jpg",
    },
    {
      title: "Light Commercial",
      description:
        "A longer description used to show more text for the service descriptions so that I can efficiently style the ServicesView. This shouldn't be too long, but just long enough to get the job done.",
      shortDescription: "Efficient and stylish spaces for your business needs.",
      image: "/tmp/images/ranch.jpg",
    },
    {
      title: "Remodeling",
      description:
        "A longer description used to show more text for the service descriptions so that I can efficiently style the ServicesView. This shouldn't be too long, but just long enough to get the job done.",
      shortDescription:
        "Transform your existing space into something extraordinary.",
      image: "/tmp/images/69051185_1256422067869944_7781846932028129280_n.jpg",
    },
    {
      title: "Decks",
      description:
        "A longer description used to show more text for the service descriptions so that I can efficiently style the ServicesView. This shouldn't be too long, but just long enough to get the job done.",
      shortDescription:
        "Create the perfect outdoor living space for relaxation and entertainment.",
      image: "/tmp/images/brick-white-fence.jpg",
    },
  ]);
}

export function getSocials(client: prismic.Client) {}

export function getOptions(client: prismic.Client) {
  return ["Get a Quote", "General Inquiry", "Other"];
}
