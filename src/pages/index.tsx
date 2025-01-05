import React from "react";
import { attributes, react as HomeContent } from '../../content/home.md'
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
  let { title, cats } = attributes
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
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
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
