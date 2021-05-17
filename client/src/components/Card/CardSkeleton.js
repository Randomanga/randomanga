import { Skeleton, SkeletonText } from '@chakra-ui/skeleton';
import {
  Heading,
  Flex,
  useColorModeValue,
  HStack,
  Image,
  Box,
  VStack,
  Text,
} from '@chakra-ui/react';
import { FaPlusSquare, FaCheckSquare } from 'react-icons/fa';

export const CardSkeleton = props => {
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      shadow="lg"
      rounded="md"
      minH="48"
      height={['52', '52', '56', '60']}
      overflow="hidden"
    >
      <Skeleton>
        <Image w={[28, 32, 36]} objectFit="cover" />
      </Skeleton>

      <Flex direction="column" w={'full'} h={'full'} maxH="">
        <VStack
          p={{ base: 2, md: 4 }}
          maxH={'full'}
          py={1}
          flex="1"
          overflow="hidden"
        >
          <Box maxH="100%" minW="full" overflow="auto">
            <SkeletonText>
              <Heading
                fontFamily="body"
                maxW="full"
                fontSize={['md', 'md']}
                borderBottom="2px"
                borderColor="orange.500"
                pb={1}
                mr={2}
              />
            </SkeletonText>
            <SkeletonText noOfLines={5}>
              <Text
                mt={1}
                fontSize={'xs'}
                fontFamily="body"
                lineHeight={'4'}
                minH={0}
              />
            </SkeletonText>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
};
