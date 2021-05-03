import qs from "qs";

// lib
import { QueryParam } from "lib/types";

// local storage
export const safelyGetItem = <T>(key: string): T => JSON.parse(localStorage.getItem(key) || "{}");

// query params
export const convertQueryParams = (params: QueryParam): string => qs.stringify(params);

// checkers
export const isDevelopment = (): boolean => {
  const { NODE_ENV } = process.env;

  return NODE_ENV === "development";
};

// array
export const pureReplace = <T>(array: T[], newElement: T, indexOfElementToReplace: number): T[] => [
  ...array.slice(0, indexOfElementToReplace),
  newElement,
  ...array.slice(++indexOfElementToReplace),
];
