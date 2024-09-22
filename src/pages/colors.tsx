import ViewLayout from "components/ViewLayout";
import React from "react";

export const ColorsPage = ({ colors }) => {
  return (
    <ViewLayout>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.keys(colors).map((colorKey) =>
            colors[colorKey].shades.map((shade) => (
              <div
                key={`${colorKey}-${shade.name}`}
                className="flex flex-col items-center justify-center p-4 border rounded-lg"
              >
                <div
                  className={shade.class}
                  style={{
                    width: "100%",
                    height: "6rem",
                    borderRadius: "0.5rem",
                  }}
                />
                <p className="mt-2 text-sm text-gray-600">{`${colorKey}${
                  shade.name === "DEFAULT" ? "" : `-${shade.name}`
                }`}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </ViewLayout>
  );
};

export const getStaticProps = async () => {
  const colors = {
    primary: {
      shades: [
        { name: "light", class: "bg-primary-light" },
        { name: "DEFAULT", class: "bg-primary" },
        { name: "dark", class: "bg-primary-dark" },
      ],
    },
    secondary: {
      shades: [
        { name: "light", class: "bg-secondary-light" },
        { name: "DEFAULT", class: "bg-secondary" },
        { name: "dark", class: "bg-secondary-dark" },
      ],
    },
    accent: {
      shades: [
        { name: "light", class: "bg-accent-light" },
        { name: "DEFAULT", class: "bg-accent" },
        { name: "dark", class: "bg-accent-dark" },
      ],
    },
    neutral: {
      shades: [
        { name: "light", class: "bg-neutral-light" },
        { name: "DEFAULT", class: "bg-neutral" },
        { name: "dark", class: "bg-neutral-dark" },
      ],
    },
  };

  return {
    props: {
      colors,
    },
  };
};

export default ColorsPage;
