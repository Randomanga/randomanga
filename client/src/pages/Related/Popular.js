import React from 'react';
import { usePopular } from '../../hooks/data/usePopular';
import {
  Box,
  Heading,
  Input,
  Button,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { MangaAccordion } from '../../components/MangaAccordion';
import { v4 as uuidv4 } from 'uuid';

export function Popular(props) {
  const { data, isLoadingMore, page, setPage } = usePopular();
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
        Popular
      </Heading>
      <Box px={2}>
        {data?.map((manga) => (
          <MangaAccordion manga={manga} key={uuidv4()} />
        ))}
        {isLoadingMore && (
          <>
            <Skeleton
              mx="auto"
              maxW="4xl"
              mb={4}
              w="full"
              h="40"
              rounded="md"
            />

            <Skeleton
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
