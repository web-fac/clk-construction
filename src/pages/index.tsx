import React from "react";

/** Components */
import { IndexView, ContactView, ServicesView, Footer, TopBar } from "views";

import Head from "next/head";
import {
  Service,
  createClient,
  getServices,
  getOptions,
  SelectOptions,
} from "lib/content";

interface IndexPageProps {
  services: Service[];
  options: SelectOptions;
}

export const IndexPage = ({ services, options }: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>Jacob Miller</title>
      </Head>
      <main className="bg-container">
        <TopBar />
        <IndexView />
        <ServicesView services={services} />
        <ContactView options={options} />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;

export async function getStaticProps(params, previewData) {
  const client = createClient(previewData);

  const services = await getServices(client);

  const options: SelectOptions = getOptions(client);

  return {
    props: {
      services,
      options,
    },
    revalidate: 60,
  };
}
