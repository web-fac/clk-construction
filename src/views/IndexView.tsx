import Image from "next/image";
import { ViewLayout, Typography } from "components";

const IndexView = () => {
  return (
    <ViewLayout
      className=""
      innerClassName="min-w-100 sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full"
    >
      <div className="w-full">
        <div className="relative">
          <Image
            src={"/tmp/images/ranch.jpg"}
            alt={"service.title"}
            unoptimized
            width={100}
            height={500}
            className="w-full h-[500px] object-cover blur-sm"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="space-y-4 px-4 text-center">
              <Typography
                element="h1"
                as="h1"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground drop-shadow-[0_1.2px_1.2px_rgba(0,0,20,0.8)]"
              >
                Building Your Dreams, One Project at a Time
              </Typography>
              <Typography
                element="h4"
                as="h4"
                className="text-xl md:text-2xl lg:text-3xl mx-auto max-w-[800px] text-primary-foreground drop-shadow-[0_1.2px_1.2px_rgba(0,0,20,0.8)]"
              >
                Your trusted partner for residential and light commercial
                construction, remodeling, and custom decks.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
};

export default IndexView;
