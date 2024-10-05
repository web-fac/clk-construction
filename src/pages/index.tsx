import React from "react";

/** Components */
import { IndexView, ContactView, ServicesView, Footer, TopBar } from "views";

import Head from "next/head";
import { Service, createClient, getServices } from "lib/content";

interface IndexPageProps {
  services: Service[];
}

export const IndexPage = ({ services }: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>Jacob Miller</title>
      </Head>
      <main className="bg-container">
        <TopBar />
        <IndexView />
        <ServicesView services={services} />
        {/* <GalleryView
          services={services}
          slideNumber={currentSlide}
          onSlideChange={handleSlideChange}
        /> */}
        <ContactView />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;

export async function getStaticProps(params, previewData) {
  const client = createClient(previewData);

  const services = getServices(client);

  return {
    props: {
      services,
    },
    revalidate: 60,
  };
}
