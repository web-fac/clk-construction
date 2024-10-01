import React from "react";
import { useState } from "react";

/** Components */
import { IndexView, ContactView, ServicesView, GalleryView } from "views";

import Head from "next/head";
import { Service, createClient, getServices } from "lib/content";
import TopBar from "views/TopBar";

interface IndexPageProps {
  services: Service[];
}

export const IndexPage = ({ services }: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>Jacob Miller</title>
      </Head>
      <TopBar />
      <main>
        <IndexView />
        <ServicesView services={services} />
        {/* <GalleryView
          services={services}
          slideNumber={currentSlide}
          onSlideChange={handleSlideChange}
        /> */}
        <ContactView />
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
