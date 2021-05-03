export const ROUTES = {
  home: (): string => "/",
  login: (): string => "/login",
  recover: (): string => "/recover",
  reset: (): string => "/reset",
  mock: (id: number): string => `/mock/${id}`,
};
