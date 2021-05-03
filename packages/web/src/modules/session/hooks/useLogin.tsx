import { axivios } from "lib/axivios";
import cookies from "cookies-js";

// lib
import { ENDPOINTS } from "lib/api";
import { User } from "lib/types";

// hooks
import { useSession } from "modules/common/hooks/useSession";

type LoginValues = {
  email: string;
  password: string;
};

type Values = {
  login: (loginValues: LoginValues) => Promise<void>;
};

export const useLogin = (): Values => {
  // router hooks
  const { setUserSession } = useSession();

  // methods
  const login = ({ email, password }: LoginValues) =>
    axivios({ isSession: true })
      .url(ENDPOINTS.session.login())
      .post({ email, password })
      .json()
      .then((userData: User) => {
        setUserSession(userData);
        const userDataParsed = JSON.stringify(userData);

        cookies.set("userSession", userDataParsed);
      })
      .catch((error) => console.error(error.message));

  return { login };
};
