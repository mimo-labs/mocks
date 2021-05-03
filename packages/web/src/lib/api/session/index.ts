export const SESSION_ENDPOINTS = {
  login: (): string => `/login`,
  logout: (): string => `/logout`,
  reset: (): string => `/password-reset`,
  recover: (): string => `/password-reset-request`,
};
