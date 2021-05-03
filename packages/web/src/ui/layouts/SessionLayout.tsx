import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";

const SessionLayout: FC = ({ children }) => (
  <Flex
    align="center"
    background="repeating-linear-gradient(
    to right,
    black,
    black 2px,
    white 2px,
    white 60px
  )"
    h="100vh"
    justify="center"
    w="100vw"
  >
    {children}
  </Flex>
);

export default SessionLayout;
