import * as React from "react";
import { Field, Label, Select as HeadlessSelect } from "@headlessui/react";
import { cn } from "utils";
import { useRef } from "react";
import { SelectOptions } from "lib/content";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions;
}

const defaultOptions: SelectOptions = ["Loading"];

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options = defaultOptions }, ref) => {
    return (
      <div>
        <Field>
          {/* <Label className="text-sm font-medium text-black">Options</Label> */}
          <div className="relative">
            <HeadlessSelect
              className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              )}
            >
              {options.map((optionType) => (
                <option key={optionType} value={optionType}>
                  {optionType}
                </option>
              ))}
            </HeadlessSelect>
          </div>
        </Field>
      </div>
    );
  }
);

export { Select };
