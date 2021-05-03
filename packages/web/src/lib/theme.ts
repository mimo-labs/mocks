import { Theme, extendTheme } from "@chakra-ui/react";

// fonts
const fonts = {
  body: "'Fira Code', monospace",
};

// theme
const customTheme: Theme = extendTheme({
  fonts,
});

export { customTheme as theme };
