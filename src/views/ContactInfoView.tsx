import { ViewLayout, Typography } from "components";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfoView = () => {
  return (
    <ViewLayout className="py-16 md:py-24 lg:py-32 xl:py-40">
      <div id="contact" className="fg-container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Contact Us
            </h2>
          </div>

          <div className="mx-auto max-w-lg">
            <div className="grid gap-8">
              <div className="flex items-center space-x-4">
                <a
                  href="tel:5403096975"
                  className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                >
                  <Phone className="w-6 h-6 text-blue-600" />
                </a>
                <div className="flex-1">
                  <Typography
                    element="p"
                    as="p"
                    className="text-lg leading-relaxed text-gray-700 font-light"
                  >
                    <a
                      href="tel:5403096975"
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      540-309-6975
                    </a>
                  </Typography>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="mailto:kempanst@aol.com"
                  className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                >
                  <Mail className="w-6 h-6 text-blue-600" />
                </a>
                <div className="flex-1">
                  <Typography
                    element="p"
                    as="p"
                    className="text-lg leading-relaxed text-gray-700 font-light"
                  >
                    <a
                      href="mailto:kempanst@aol.com"
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      kempanst@aol.com
                    </a>
                  </Typography>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <Typography
                    element="p"
                    as="p"
                    className="text-lg leading-relaxed text-gray-700 font-light"
                  >
                    CLK Construction Inc.
                    <br />
                    PO Box 89
                    <br />
                    Bent Mountain, VA 24059
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
};

export default ContactInfoView;

// import { ViewLayout, Typography } from "components";

// const ContactInfoView = () => {
//   return (
//     <ViewLayout className="py-16 md:py-24 lg:py-32 xl:py-40">
//       <div className="fg-container max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="space-y-12">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
//               Contact Us
//             </h2>
//           </div>

//           <div className="mx-auto max-w-prose">
//             <Typography
//               element="p"
//               as="p"
//               className="text-lg leading-relaxed text-gray-700 font-light"
//             >
//               CLK Construction is a locally owned and operated construction
//               company serving the Roanoke, VA area for over 20 years. We are a
//               Class A contractor, fully insured and bonded, and a member of the
//               Better Business Bureau.
//             </Typography>

//             <div className="h-6"></div>

//             <Typography
//               element="p"
//               as="p"
//               className="text-lg leading-relaxed text-gray-700 font-light"
//             >
//               We specialize in residential and commercial construction,
//               including new construction, remodeling, and renovations. We are
//               committed to providing our clients with high-quality workmanship,
//               excellent customer service, and competitive pricing.
//             </Typography>
//           </div>
//         </div>
//       </div>
//     </ViewLayout>
//   );
// };

// export default ContactInfoView;
