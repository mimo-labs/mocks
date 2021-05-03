import wretch, { Wretcher } from "wretch";

// lib
import { Axivios, User } from "lib/types";

// common
import { safelyGetItem } from "lib/helpers";

// constants
export const BASE_URL = process.env.REACT_APP_MIMO_API;
export const API_URL = `${BASE_URL}/api/v1`;
export const SESSION_URL = `${BASE_URL}`;

// headers
export const generateAuthHeader = (token: string): string => `JWT ${token}`;

// custom fetch
export const axivios = ({ isSession = false }: Axivios = {}): Wretcher => {
  // constants
  const { token } = safelyGetItem<User>("userSession");

  const apiUrl = isSession ? SESSION_URL : API_URL;
  const authenticationToken = isSession ? "" : `token ${token}`;

  return wretch().url(apiUrl).auth(authenticationToken);
};
