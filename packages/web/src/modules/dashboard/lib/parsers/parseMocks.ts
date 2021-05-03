// lib
import { pureReplace } from "lib/helpers";

// common
import { Endpoint, Mock } from "modules/common/lib/types";

type Props = {
  mocks: Mock[];
};

type Values = {
  endpoints: Endpoint[];
};

export const parseMocks = ({ mocks }: Props): Values => {
  const endpoints = mocks.reduce((acc, mock) => {
    const alreadyExistentEndpoint = acc.find((e) => e.endpoint === mock.path);

    if (alreadyExistentEndpoint) {
      const indexOfDuplicatedEdnpoint = acc.findIndex((e) => e.endpoint === mock.path);

      const newElement = {
        endpoint: alreadyExistentEndpoint?.endpoint,
        mocks: [...alreadyExistentEndpoint?.mocks, mock],
      };

      return pureReplace<Endpoint>(acc, newElement, indexOfDuplicatedEdnpoint);
    } else {
      return [...acc, { endpoint: mock.path, mocks: [mock] }];
    }
  }, [] as Endpoint[]);

  return { endpoints };
};
