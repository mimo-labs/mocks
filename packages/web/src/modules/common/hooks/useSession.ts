import { useState, useMemo } from "react";
import cookies from "cookies-js";
import constate from "constate";

// lib
import { User } from "lib/types";

const useSessionConstate = () => {
  // react hooks
  const [userSession, setUserSession] = useState<User | null>(() =>
    cookies.get("userSession") ? JSON.parse(cookies.get("userSession")) : null,
  );

  const isAuthenticated = useMemo(() => {
    if (!userSession?.token) return false;

    return true;
  }, [userSession]);

  return { userSession, setUserSession, isAuthenticated };
};

const [SessionProvider, useSession] = constate(useSessionConstate);

export { SessionProvider, useSession };
