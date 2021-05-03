import React, { FC } from "react";
import { Accordion, Flex, Text } from "@chakra-ui/react";

// dashboard
import EndpointAccordion from "modules/dashboard/components/EndpointAccordion";
import { useReadMocksParams } from "modules/dashboard/hooks/useReadMocksParams";
import { parseMocks } from "modules/dashboard/lib/parsers/parseMocks";

// common
import { useOrganizationAndProject } from "modules/common/hooks/useOrganizationAndProject";

const Endpoints: FC = () => {
  // custom hooks
  const { projectId } = useOrganizationAndProject();
  const { isLoading, isError, data: mocks } = useReadMocksParams({ projectId });

  // constants
  const hasMocks = Boolean(mocks);

  if (isLoading) return <h1>Loading</h1>;

  if (isError) return <h1>Error</h1>;

  if (!hasMocks)
    return (
      <Flex align="center" h="full" justify="center" w="full">
        <Text bg="white" border="2px solid black" borderRadius={3} px={4} py={2}>
          No mocks created yet
        </Text>
      </Flex>
    );

  // parsers
  const { endpoints } = parseMocks({ mocks });

  return (
    <Accordion allowToggle p={4} w="full">
      {endpoints?.map((endpoint) => (
        <EndpointAccordion key={endpoint.endpoint} endpoint={endpoint} />
      ))}
    </Accordion>
  );
};

export default Endpoints;
