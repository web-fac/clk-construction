import { ViewLayout, Typography } from "components";

const AboutView = () => {
  return (
    <ViewLayout id="about" className="py-16 md:py-24 lg:py-32 xl:py-40">
      <div className="fg-container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              About Us
            </h2>
          </div>

          <div className="mx-auto max-w-prose">
            <Typography
              element="p"
              as="p"
              className="text-lg leading-relaxed text-gray-700 font-light"
            >
              CLK Construction is a locally owned and operated construction
              company serving the Roanoke, VA area for over 20 years. We are a
              Class A contractor, fully insured and bonded, and a member of the
              Better Business Bureau.
            </Typography>

            <div className="h-6"></div>

            <Typography
              element="p"
              as="p"
              className="text-lg leading-relaxed text-gray-700 font-light"
            >
              We specialize in residential and commercial construction,
              including new construction, remodeling, and renovations. We are
              committed to providing our clients with high-quality workmanship,
              excellent customer service, and competitive pricing.
            </Typography>
          </div>
        </div>
      </div>
    </ViewLayout>
  );
};

export default AboutView;
