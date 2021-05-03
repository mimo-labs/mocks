import { useState } from "react";
import constate from "constate";

type Values = {
  projectId: number;
  organizationId: number;
  setProjectId: React.Dispatch<React.SetStateAction<number>>;
  setOrganizationId: React.Dispatch<React.SetStateAction<number>>;
};

const useOrganizationAndProjectConstate = (): Values => {
  // react hooks
  const [projectId, setProjectId] = useState<number>(0);
  const [organizationId, setOrganizationId] = useState<number>(0);

  return {
    projectId,

    setProjectId,
    organizationId,

    setOrganizationId,
  };
};

export const [OrganizationAndProjectConstateProvider, useOrganizationAndProject] = constate(
  useOrganizationAndProjectConstate,
);
