import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

// dashbaord
import { useCreateMocksParams } from "modules/dashboard/hooks/useCreateMocksParams";

// common
import { useOrganizationAndProject } from "modules/common/hooks/useOrganizationAndProject";

const NewEndpointLink: FC = () => {
  // custom hook
  const { projectId } = useOrganizationAndProject();
  const { mutate: createMock } = useCreateMocksParams();

  console.log("projectId", projectId);
  // handlers
  const handleCreateNewMock = () => {
    createMock({ projectId });
  };

  return (
    <Button
      bg="white"
      border="2px solid black"
      borderRadius={3}
      bottom={4}
      onClick={handleCreateNewMock}
      pos="fixed"
      right={4}
    >
      New mock
    </Button>
  );
};

export default NewEndpointLink;
