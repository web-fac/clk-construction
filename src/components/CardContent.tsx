import clsx from "clsx";

type CardContentProps = {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
};

function CardContent({ children, className }: CardContentProps) {
  return <div className={clsx("", className)}>{children}</div>;
}

export default CardContent;
