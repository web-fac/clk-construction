import { Button as BaseButton } from "@headlessui/react";
import clsx from "clsx";

type ButtonProps = {
  children: any;
  className?: string;
  [rest: string]: any;
};

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <BaseButton
      className={clsx(
        "py-2 px-4 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 outline outline-neutral-200",
        className
      )}
      {...rest}
    >
      {children}
    </BaseButton>
  );
}

export default Button;
