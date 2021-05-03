import { useQuery, QueryObserverResult } from "react-query";

// lib
import { axivios } from "lib/axivios";
import { ENDPOINTS } from "lib/api";

// common
import { Organization } from "modules/common/lib/types";

const getAllOrganizations = (): Promise<Organization[]> => {
  return axivios().url(ENDPOINTS.common.organizations.all()).get().json();
};

export const useReadOrganizationsAll = (): QueryObserverResult<Organization[], unknown> => {
  return useQuery("organizations", getAllOrganizations);
};
