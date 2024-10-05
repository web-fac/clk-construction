// import AtomMachine from "components/AtomMachine";
import { ViewLayout, Button, Typography } from "components";
import Image from "next/image";
const IndexView = () => {
  return (
    <ViewLayout className="bg-primary py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="fg-container flex items-center mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography
              element="h1"
              as="h1"
              className="text-primary-foreground"
            >
              Building Your Dreams, One Project at a Time
            </Typography>
            <Typography
              element="p"
              as="p"
              className="mx-auto max-w-[700px] text-primary-foreground"
            >
              CLK Construction: Your trusted partner for residential and light
              commercial construction, remodeling, and custom decks.
            </Typography>
          </div>
          <div className="space-x-4">
            <Button variant="outline" className="text-primary">
              Get a Quote
            </Button>
            <Button variant="outline" className="text-primary">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
};

export default IndexView;
