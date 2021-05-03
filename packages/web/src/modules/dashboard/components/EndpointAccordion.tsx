import React, { FC } from "react";
import {
  AccordionItem,
  Stack,
  AccordionIcon,
  AccordionButton,
  Box,
  AccordionPanel,
  Tag,
} from "@chakra-ui/react";

// common
import { Endpoint } from "modules/common/lib/types";

// mocks
import MockLink from "modules/dashboard/components/MockLink";

type Props = {
  endpoint: Endpoint;
};

const EndpointAccordion: FC<Props> = ({ endpoint }) => (
  <AccordionItem
    _last={{ borderBottom: "2px solid black" }}
    _notLast={{
      mb: 4,
    }}
    bg="white"
    border="2px solid black"
    borderRadius={3}
    w="full"
  >
    <AccordionButton _focus={{ boxShadow: "0 0 0 4px rgba(212, 0, 27, 0.6)" }}>
      <Box flex={1} textAlign="left">
        <Tag border="2px solid black" borderRadius={3} colorScheme="blue">
          {endpoint?.endpoint}
        </Tag>
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel borderTop="2px solid black" p={4}>
      <Stack spacing={1}>
        {endpoint?.mocks.map((mock) => (
          <MockLink key={mock.id} mock={mock} />
        ))}
      </Stack>
    </AccordionPanel>
  </AccordionItem>
);

export default EndpointAccordion;
