import React, { FC, useMemo } from "react";
import { useRouter } from "next/router";
import { FiCheck, FiX } from "react-icons/fi";
import { Link, Tag, Text, Flex, IconButton } from "@chakra-ui/react";

// lib
import { CODE_STATUSES } from "lib/constants";

// common
import { Mock } from "modules/common/lib/types";

type Props = {
  mock: Mock;
};

const MockListItem: FC<Props> = ({ mock }) => {
  // router hooks
  const router = useRouter();

  // constants
  const { status_code, id, is_active, is_complete, title } = mock;
  const statusCodeTextAndColor = CODE_STATUSES[status_code];
  const isMockDisabled = !is_complete;

  // react hooks
  const mockStatusIcon = useMemo(() => {
    if (is_active) return FiCheck;
    if (!is_complete) return FiX;

    return undefined;
  }, [is_active, is_complete]);

  const mockStatusBackgroundColor = useMemo(() => {
    if (is_active) return "green.100";
    if (!is_complete) return "red.100";

    return undefined;
  }, [is_active, is_complete]);

  // handlers
  const handleMockClick = () => router.push(`/mock/${id}`);

  return (
    <Link
      _focus={{ boxShadow: "0 0 0 3px rgba(212, 0, 27, 0.7)" }}
      _hover={{ backgroundColor: "rgba(0,0,0,0.04)" }}
      _notLast={{
        borderBottom: "2px solid black",
      }}
      alignItems="center"
      as="button"
      border="2px solid black"
      borderRadius={3}
      d="flex"
      onClick={handleMockClick}
      w="full"
    >
      <Flex h={10} justify="space-between" w="full">
        <Flex align="center">
          <Tag
            borderRadius="inherit"
            borderRight="2px solid black"
            colorScheme={statusCodeTextAndColor.color}
            fontWeight="medium"
            h="full"
            roundedBottomRight={0}
            roundedTopRight={0}
          >
            {status_code}
          </Tag>
          <Tag bg="yellow.100" borderRadius={0} borderRight="2px solid black" h="full">
            {statusCodeTextAndColor.text}
          </Tag>
          <Text color="black" ml={2}>
            {title ?? "No title defined yet"}
          </Text>
        </Flex>
        <Flex align="center">
          <IconButton
            aria-label="Mock selection"
            as={mockStatusIcon}
            bg={mockStatusBackgroundColor}
            border="2px solid black"
            h={8}
            isDisabled={isMockDisabled}
            minW={8}
            mr={1}
            opacity="1 !important"
            p={1}
            rounded="full"
          />
        </Flex>
      </Flex>
    </Link>
  );
};

export default MockListItem;
