import { Box, Center, SimpleGrid } from '@chakra-ui/layout';
import {
  Heading,
  Flex,
  useColorModeValue,
  chakra,
  HStack,
  Stack,
  Text,
  Badge,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Card } from '../../components/Card';

const FilterList = ({ list }) => {
  return (
    <Flex maxW="lg" overflow="hidden" flexWrap="wrap">
      {[
        'Action',
        'Romance',
        'Comedy',
        'Harem',
        'Ecchi',
        'Male protagonist',
        'Drama',
        'Action',
        'Romance',
        'Comedy',
        'Harem',
        'Ecchi',
        'Male protagonist',
        'Drama',
      ].map(genre => (
        <Badge
          rounded="full"
          px="2"
          fontSize="xs"
          textTransform="capitalize"
          cursor="default"
          color="gray.400"
          margin={0.5}
          bg="gray.700"
        >
          {genre}
        </Badge>
      ))}
    </Flex>
  );
};

export const RandomList = props => {
  const ID = props.match.params.id;

  return (
    <Box minH={'60vh'} maxW="7xl" mx="auto" mt={16} px={['2', '5']} maxW="7xl">
      <Stack py={10}>
        <Heading as="h2" fontFamily="body" fontWeight="bold">
          Random list
        </Heading>
        <Text color="gray.400" fontSize="sm">
          Manga count: 4050
        </Text>
        <Text color="gray.400" fontSize="sm">
          Included genres:
        </Text>
        <FilterList />
        <Text color="gray.400" fontSize="sm">
          Excluded genres
        </Text>
        <FilterList />
      </Stack>
      <SimpleGrid boxSizing="border-box" columns={[1, 1, 2, 3]} spacing={6}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Box>
  );
};
