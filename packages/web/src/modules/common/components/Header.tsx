import React, { FC } from "react";
import { Flex, Select, HStack, IconButton } from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";

// common
import { useOrganizationAndProject } from "modules/common/hooks/useOrganizationAndProject";
import { useReadProjectsParams } from "modules/common/hooks/useReadProjectsParams";
import { useReadOrganizationsAll } from "modules/common/hooks/useReadOrganizationsAll";

const Header: FC = () => {
  // custom hooks
  const {
    organizationId,
    setOrganizationId,
    projectId,
    setProjectId,
  } = useOrganizationAndProject();

  const { data: organizations } = useReadOrganizationsAll();
  const { data: projects } = useReadProjectsParams({ organizationId });

  // constants
  const isProjectDisabled = Boolean(!organizationId);

  // handlers
  const handleOrganizationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selectedOrganization = Number(value);

    setOrganizationId(selectedOrganization);
  };

  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const selectedProject = Number(value);

    setProjectId(selectedProject);
  };

  return (
    <Flex
      alignItems="center"
      bg="white"
      borderBottom="2px solid black"
      justifyContent="space-between"
      pl={4}
    >
      <HStack align="center" spacing={4}>
        <Select
          _focus={{ boxShadow: "0 0 0 3px rgba(212, 0, 27, 0.7)" }}
          borderColor="black"
          borderRadius={3}
          borderWidth={2}
          minW={44}
          onChange={handleOrganizationChange}
          placeholder="Organization"
          value={organizationId}
        >
          {organizations?.map((organization) => (
            <option key={organization.id} value={organization.id}>
              {organization.name}
            </option>
          ))}
        </Select>
        <Select
          _focus={{ boxShadow: "0 0 0 3px rgba(212, 0, 27, 0.7)" }}
          borderColor="black"
          borderRadius={3}
          borderWidth={2}
          isDisabled={isProjectDisabled}
          minW={44}
          onChange={handleProjectChange}
          placeholder="Project"
          value={projectId}
        >
          {projects?.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </Select>
      </HStack>
      <Flex pr={4}>
        <IconButton
          _focus={{ boxShadow: "0 0 0 3px rgba(212, 0, 27, 0.7)" }}
          alignItems="center"
          aria-label="Configure user settings"
          backgroundColor="white"
          border="2px solid black"
          borderRadius="50%"
          icon={<FiPhone />}
          justifyContent="center"
          minH={10}
          minW={10}
          p={1}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
