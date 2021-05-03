import { QueryParam } from "lib/types";
import { convertQueryParams } from "lib/helpers";

export const DASHBOARD_ENDPOINTS = {
  mocks: {
    params: (queryParams: QueryParam): string => `/mocks?${convertQueryParams(queryParams)}`,
    all: (): string => `/mocks/`,
  },
};
