import { Heading, HStack } from "@chakra-ui/react";

import { SongRiverLogo } from "./SongRiverLogo";
import { SearchInput } from "./SearchInput";

export function Header() {
  return (
    <>
    <HStack
      direction="row"
      justify="flex-start"
      align="center"
      spacing={8}
      boxShadow="md"
      p={5}
      w="100vw"
    >
      <SongRiverLogo size="5xl" />
      <Heading as="h1" size="lg">
        Employee&nbsp;&nbsp;Directory
      </Heading>
      <SearchInput />
    </HStack>
    </>
  );
}
