// import AtomMachine from "components/AtomMachine";
import { ViewLayout, Card, CardContent, Button } from "components";

const services = [
  {
    title: "Residential",
    description: "Custom homes and renovations tailored to your lifestyle.",
  },
  {
    title: "Light Commercial",
    description: "Efficient and stylish spaces for your business needs.",
  },
  {
    title: "Remodeling",
    description: "Transform your existing space into something extraordinary.",
  },
  {
    title: "Decks",
    description:
      "Create the perfect outdoor living space for relaxation and entertainment.",
  },
];

const IndexView = () => {
  return (
    <ViewLayout className="py-12 md:py-24 lg:py-32 xl:py-48 bg-neutral-200">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Building Your Dreams, One Project at a Time
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              CLK Construction: Your trusted partner for residential and light
              commercial construction, remodeling, and custom decks.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="text-white bg-black outline-black">
              Get a Quote
            </Button>
            <Button>Our Services</Button>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
};
export default IndexView;
