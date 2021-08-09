import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Grid,
} from '@chakra-ui/react';
import { RelatedCompact } from '../../components/RelatedCompact';
import { Link as RouterLink } from 'react-router-dom';
export function QuickRecommendations(props) {
  return (
    <Box maxW="4xl" mx="auto" px={5}>
      <Heading fontFamily="body" fontSize="2xl" px={2} py={5}>
        Recommendations
      </Heading>
      <Flex flexWrap="wrap" w="full" overflow="hidden" p={2}>
        <RelatedCompact />
        <RelatedCompact />
      </Flex>
      <Box w="full" display="grid" placeContent="center">
        <Link
          as={RouterLink}
          to="/recommendations"
          fontWeight="semi-bold"
          my={4}
          mx="auto"
          w="full"
        >
          View all
        </Link>
      </Box>
    </Box>
  );
}
