import { useQuery, QueryObserverResult } from "react-query";

// lib
import { axivios } from "lib/axivios";
import { ENDPOINTS } from "lib/api";

// common
import { Project } from "modules/common/lib/types";

const getProjectsByParams = (organizationId: number): Promise<Project[]> => {
  // constants
  const queryParams = { organization_id: organizationId };

  return axivios().url(ENDPOINTS.common.projects.params(queryParams)).get().json();
};

type Props = {
  organizationId: number;
};

export const useReadProjectsParams = ({
  organizationId,
}: Props): QueryObserverResult<Project[], unknown> => {
  return useQuery(["mocks", { organizationId }], () => getProjectsByParams(organizationId), {
    enabled: Boolean(organizationId),
  });
};
