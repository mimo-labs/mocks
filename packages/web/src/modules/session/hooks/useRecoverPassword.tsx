import { axivios } from "lib/axivios";

// shared
import { ENDPOINTS } from "lib/api";

type RecoverPasswordValues = {
  email: string;
};

// TODO: Type this result
type Result = unknown;

type Values = {
  recoverPassword: (recoverValues: RecoverPasswordValues) => Promise<Result>;
};

export const useRecoverPassword = (): Values => {
  // methods
  const recoverPassword = ({ email }: RecoverPasswordValues) =>
    axivios({ isSession: true }).url(ENDPOINTS.session.recover()).post({ email }).json();

  return { recoverPassword };
};
