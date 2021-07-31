import { Box, Image, Flex } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Flex
      mt="24"
      w={'full'}
      maxW="md"
      mx="auto"
      h="50vh"
      p={5}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image src="/error404en.png" />
    </Flex>
  );
};
