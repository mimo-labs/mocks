import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClientProvider, QueryClient } from "react-query";

// common
import { SessionProvider } from "modules/common/hooks/useSession";
import { OrganizationAndProjectConstateProvider } from "modules/common/hooks/useOrganizationAndProject";

// lib
import { theme } from "lib/theme";
import { isDevelopment } from "lib/helpers";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <OrganizationAndProjectConstateProvider>
          <SessionProvider>
            <Component {...pageProps} theme={theme} />
            {isDevelopment() ? <ReactQueryDevtools position="bottom-right" /> : null}
          </SessionProvider>
        </OrganizationAndProjectConstateProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
