import React, { FC } from "react";
import { Grid, Flex } from "@chakra-ui/react";

// common
import Header from "modules/common/components/Header";

const MainLayout: FC = ({ children }) => (
  <Grid
    background="repeating-linear-gradient(
    to right,
    black,
    black 2px,
    white 2px,
    white 60px
  )"
    minH="100vh"
    minW="100vw"
    templateColumns="1fr"
    templateRows="4.5rem auto"
  >
    <Header />
    <Flex align="flex-start" flexDirection="column" justify="flex-start">
      {children}
    </Flex>
  </Grid>
);

export default MainLayout;
