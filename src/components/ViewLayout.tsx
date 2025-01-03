import clsx from "clsx";
/** Components */

type ViewLayoutProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  innerClassName?: string;
  [rest: string]: any;
};

const ViewLayout = ({
  children,
  className = "",
  innerClassName = "",
  ...rest
}: ViewLayoutProps) => {
  return (
    <section
      className={clsx(
        "w-full flex items-center justify-center overflow-hidden",
        className
      )}
      {...rest}
    >
      <div
        className={clsx(
          "max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full flex items-center justify-center",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default ViewLayout;
