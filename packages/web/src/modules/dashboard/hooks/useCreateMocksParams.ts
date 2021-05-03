import { useMutation, UseMutationResult } from "react-query";

// lib
import { ENDPOINTS } from "lib/api";
import { axivios } from "lib/axivios";

type Variables = {
  projectId: number;
};

// TODO: type this result
type Result = unknown;

const createMock = (variables: Variables): Promise<Result> => {
  const { projectId } = variables;
  const body = { project_id: projectId };
  const endpoint = ENDPOINTS.dashboard.mocks.all();

  return axivios().url(endpoint).post(body).json();
};

export const useCreateMocksParams = (): UseMutationResult<Result, unknown, Variables, unknown> => {
  return useMutation(createMock, {
    onSuccess: (newMock) => {
      console.log("newMock", newMock);
    },
  });
};
