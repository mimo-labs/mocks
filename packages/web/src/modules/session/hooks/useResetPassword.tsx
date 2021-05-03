import { axivios } from "lib/axivios";

// shared
import { ENDPOINTS } from "lib/api";

type ResetPasswordValues = {
  newPassword: string;
  newPasswordConfirmation: string;
};

// TODO: Type this result
type Result = unknown;

type Values = {
  resetPassword: (resetValues: ResetPasswordValues) => Promise<Result>;
};

export const useResetPassword = (): Values => {
  // methods
  const resetPassword = ({ newPassword }: ResetPasswordValues) =>
    axivios({ isSession: true })
      .url(ENDPOINTS.session.reset())
      .post({ new_password: newPassword })
      .json();

  return { resetPassword };
};
