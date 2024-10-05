import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const isProd = (): boolean => {
  return process.env.NODE_ENV === "production";
};

export const isSameMonth = (date1: Date, date2: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }

  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isSameYear = (date1: Date, date2: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear();
};

export const dateToMonthYearString = (date: Date): string => {
  if (!date) {
    return "";
  }
  return `${date.getMonth() + 1}/${date.getFullYear()}`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
