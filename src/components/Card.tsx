import clsx from "clsx";

type CardProps = {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  [rest: string]: any;
};

function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={clsx("rounded shadow-lg overflow-hidden h-full", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
