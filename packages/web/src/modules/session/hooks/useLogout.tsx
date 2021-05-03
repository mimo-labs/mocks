import { useRouter } from "next/router";
import cookies from "cookies-js";

// lib
import { ROUTES } from "lib/routes";

type Values = {
  logout: () => void;
};

export const useLogout = (): Values => {
  // router hooks
  const router = useRouter();

  // methods
  const logout = () => {
    cookies.expire("userSession");
    router.push(ROUTES.login());
  };

  return { logout };
};
