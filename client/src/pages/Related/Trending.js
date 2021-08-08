import React from 'react';
import { useTrending } from '../../hooks/data/useTrending';
import {
  Box,
  Button,
  Heading,
  Input,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { MangaAccordion } from '../../components/MangaAccordion';
import { v4 as uuidv4 } from 'uuid';

export function Trending(props) {
  const { data, isLoadingMore, page, setPage } = useTrending();
  return (
    <React.Fragment>
      <Heading
        as="h2"
        fontSize="3xl"
        px={2}
        my={8}
        fontFamily="body"
        fontWeight="bold"
      >
        Trending now
      </Heading>
      <Box px={2}>
        {data?.map((manga) => (
          <MangaAccordion manga={manga} key={uuidv4()} />
        ))}
        {isLoadingMore && (
          <>
            <Skeleton
              isLoaded={!isLoadingMore}
              mx="auto"
              maxW="4xl"
              mb={4}
              w="full"
              h="40"
              rounded="md"
            />

            <Skeleton
              isLoaded={!isLoadingMore}
              mx="auto"
              maxW="4xl"
              mb={4}
              w="full"
              h="40"
              rounded="md"
            />
          </>
        )}
      </Box>
      <Button
        w="full"
        size={'sm'}
        mt={2}
        mb={6}
        onClick={() => setPage(page + 1)}
      >
        Load more
      </Button>
    </React.Fragment>
  );
}
