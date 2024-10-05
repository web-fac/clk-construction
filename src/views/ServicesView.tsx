// import AtomMachine from "components/AtomMachine";
import { ViewLayout, Button } from "components";
import { Card, CardContent } from "components/Card";
import { Service } from "lib/content";
import { useState } from "react";

import Image from "next/image";

type ServicesViewProps = {
  services: Service[];
};

const ServicesView = ({ services }: ServicesViewProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <ViewLayout className="py-12 md:py-24 lg:py-24 xl:py-32">
      <div className="fg-container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 pb-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="cursor-pointer transition-all hover:shadow-lg border border-neutral"
              onClick={() => setCurrentSlide(index)}
            >
              <CardContent className="flex flex-col items-center p-6">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-center text-sm text-gray-500">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
export default ServicesView;
