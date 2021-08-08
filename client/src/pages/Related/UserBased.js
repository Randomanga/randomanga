import useUser from '../../hooks/data/useUser';
import { Heading,Skeleton, Box, Button, list } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { getUserMangaList } from '../../adapters/api';
import { MangaAccordion } from '../../components/MangaAccordion';
import { useUserList } from '../../hooks/data/useUserList';

export const UserBased = () => {
  const { user } = useUser();
  const { list, setPage, page, isLoadingMore } = useUserList();

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
        On your list
      </Heading>
      <Box px={2}>
        {list?.map((manga, index) => (
          <MangaAccordion manga={manga} key={index} />
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
};
