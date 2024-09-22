import { useState } from "react";
import Image from "next/image";
import { ViewLayout, Card, CardContent, Button } from "components";

type GalleryViewProps = {
  services: any[];
  slideNumber: number;
  onSlideChange: (slide: number, prev: number) => any;
};

const GalleryView = ({
  slideNumber,
  services,
  onSlideChange,
}: GalleryViewProps) => {
  const nextSlide = () => {
    onSlideChange((slideNumber + 1) % services.length, slideNumber);
  };

  const prevSlide = () => {
    onSlideChange(
      (slideNumber - 1 + services.length) % services.length,
      slideNumber
    );
  };

  return (
    <ViewLayout className="py-12 md:py-24 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Work
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${slideNumber * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    unoptimized
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                  <p className="mt-4 text-center text-lg font-semibold">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            {/* <ChevronLeft className="h-4 w-4" /> */}
            {"<"}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            {/* <ChevronRight className="h-4 w-4" /> */}
            {">"}
          </Button>
        </div>
      </div>
    </ViewLayout>
  );
};
export default GalleryView;
