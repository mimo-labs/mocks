import { SESSION_ENDPOINTS } from "lib/api/session";
import { DASHBOARD_ENDPOINTS } from "lib/api/dashboard";
import { COMMON_ENDPOINTS } from "lib/api/common";

export const ENDPOINTS = {
  session: { ...SESSION_ENDPOINTS },
  dashboard: { ...DASHBOARD_ENDPOINTS },
  common: { ...COMMON_ENDPOINTS },
};
