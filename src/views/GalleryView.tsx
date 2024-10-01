import Image from "next/image";
import { ViewLayout, Button } from "components";
import { Service } from "lib/content";

type GalleryViewProps = {
  services: Service[];
  slideNumber: number;
  onSlideChange: (slide: number, prev: number) => any;
};

const GalleryView = ({
  slideNumber,
  services,
  onSlideChange,
}: GalleryViewProps) => {
  return (
    <ViewLayout className="py-12 md:py-24 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Work
        </h2>
      </div>
    </ViewLayout>
  );
};
export default GalleryView;
