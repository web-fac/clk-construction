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
            <div className="space-y-2">
              <Typography
                element="h1"
                as="h1"
                className="text-primary-foreground drop-shadow-[0_1.2px_1.2px_rgba(0,0,20,0.8)]"
              >
                Building Your Dreams, One Project at a Time
              </Typography>
              <Typography
                element="p"
                as="p"
                className="mx-auto max-w-[700px] text-primary-foreground drop-shadow-[0_1.2px_1.2px_rgba(0,0,20,0.8)]"
              >
                CLK Construction: Your trusted partner for residential and light
                commercial construction, remodeling, and custom decks.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
};

export default IndexView;
