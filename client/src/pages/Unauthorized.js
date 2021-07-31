import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';
export const Unauthorized = (props) => {
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
      <Image src="/unauthorized.jpeg" />
      <Heading fontFamily="body">Unauthorized</Heading>
      <Text>Please sign in to view this page. </Text>
    </Flex>
  );
};
