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

type ServicesViewProps = {
  services: any[];
  onServiceClick: (i: number) => any;
};

const ServicesView = ({ services, onServiceClick }: ServicesViewProps) => {
  return (
    <ViewLayout className="py-12 md:py-24 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {services.map((service, index) => (
            // <a
            //   key={service.title}
            //   href={`#gallery`}
            //   // onClick={() => setCurrentSlide(index)}
            // >
            <Card
              className="cursor-pointer transition-all hover:shadow-lg border border-neutral"
              onClick={() => onServiceClick(index)}
            >
              <CardContent className="flex flex-col items-center p-6">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-center text-sm text-gray-500">
                  {service.description}
                </p>
              </CardContent>
            </Card>
            // </a>
          ))}
        </div>
      </div>
    </ViewLayout>
  );
};
export default ServicesView;
