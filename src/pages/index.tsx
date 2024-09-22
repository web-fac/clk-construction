import React from "react";
import { useState } from "react";

/** Components */
import { IndexView, ContactView, ServicesView, GalleryView } from "views";

import Head from "next/head";
import { Service, createClient, getServices } from "lib/content";

interface IndexPageProps {
  services: Service[];
}

export const IndexPage = ({ services }: IndexPageProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleSlideChange(slide: number, prev: number) {
    setCurrentSlide(slide);
  }

  function handleServiceClick(index: number) {
    setCurrentSlide(index);
  }

  return (
    <>
      <Head>
        <title>Jacob Miller</title>
      </Head>
      <main>
        <IndexView />
        <ServicesView services={services} onServiceClick={handleServiceClick} />
        <GalleryView
          services={services}
          slideNumber={currentSlide}
          onSlideChange={handleSlideChange}
        />
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
