import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useState } from "react";
/** Data */

/** Components */
import { IndexView, ContactView, ServicesView, GalleryView } from "views";

import Head from "next/head";

type Service = {
  title: string;
  description: string;
  image: string;
};

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

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  // TODO: Replace these with CMS Served Data
  const services = [
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

  return {
    props: {
      services,
    },
    revalidate: 60,
  };
};
