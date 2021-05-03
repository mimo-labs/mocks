import { QueryParam } from "lib/types";
import { convertQueryParams } from "lib/helpers";

export const COMMON_ENDPOINTS = {
  organizations: {
    all: (): string => `/organizations`,
  },
  projects: {
    params: (queryParams: QueryParam): string => `/projects?${convertQueryParams(queryParams)}`,
  },
};
