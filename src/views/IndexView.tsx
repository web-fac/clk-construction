// import AtomMachine from "components/AtomMachine";
import Image from "next/image";
import { ViewLayout, Button, Typography } from "components";

// const IndexView = () => {
//   return (
//     <ViewLayout className="bg-primary py-12 md:py-24 lg:py-32 xl:py-48">
//       <div className="fg-container flex items-center mx-auto">
//         <div className="flex flex-col items-center space-y-4 text-center">
//           <div className="space-y-2">
//             <Typography
//               element="h1"
//               as="h1"
//               className="text-primary-foreground"
//             >
//               Building Your Dreams, One Project at a Time
//             </Typography>
//             <Typography
//               element="p"
//               as="p"
//               className="mx-auto max-w-[700px] text-primary-foreground"
//             >
//               CLK Construction: Your trusted partner for residential and light
//               commercial construction, remodeling, and custom decks.
//             </Typography>
//           </div>
//           <div className="space-x-4">
//             <Button variant="outline" className="text-primary">
//               Get a Quote
//             </Button>
//             <Button variant="outline" className="text-primary">
//               Our Services
//             </Button>
//           </div>
//         </div>
//       </div>
//     </ViewLayout>
//   );
// };

const IndexView = () => {
  return (
    <ViewLayout
      className=""
      innerClassName="min-w-100 sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full"
    >
      {/* <div className="bg-primary py-12 md:py-24 lg:py-32 xl:py-48 w-100 min-w-100 flex flex-grow">
        test
      </div> */}
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
