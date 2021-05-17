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
  SkeletonText,
  Skeleton,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Card } from '../../components/Card';
import useRandomList from '../../hooks/data/useRandomList';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useOnScreen from '../../hooks/useOnScreen';
import { CardSkeleton } from '../../components/Card/CardSkeleton';
import { getRandomListInfo } from '../../adapters/api';
import TagBadge from '../../components/TagBadge';

export const RandomList = props => {
  const ID = props.match.params.id;
  const [listInfo, setListInfo] = useState();
  const {
    data,
    setPage,
    page,
    isLoading: isLoadingInitialData,
    isValidating,
  } = useRandomList(ID);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const list = data ? [].concat(...data) : [];

  const isLoadingMore =
    isLoadingInitialData ||
    (page > 0 && data && typeof data[page - 1] === 'undefined');
  const isReachingEnd = page === listInfo?.lastPage;
  const isRefreshing = isValidating && data && data.length === page;

  useEffect(() => {
    getRandomListInfo(ID).then(res => {
      setListInfo(res.data);
    });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (
      isVisible &&
      !isReachingEnd &&
      !isRefreshing &&
      !isLoadingInitialData &&
      !isValidating
    ) {
      setPage(page + 1);
    }
  }, [isVisible]);

  return (
    <Box minH={'60vh'} maxW="7xl" mx="auto" mt={16} px={['2', '5']} maxW="7xl">
      <Stack py={10} maxW="xl">
        <Heading as="h2" fontFamily="body" fontWeight="bold">
          Random list
        </Heading>
        <SkeletonText noOfLines={1} isLoaded={listInfo}>
          <Text color="gray.400" fontSize="sm">
            {`Number of manga found: ${listInfo?.count}`}
          </Text>
        </SkeletonText>
        <Text color="gray.400" fontSize="sm">
          Included genres:
        </Text>
        <Flex maxW="lg" overflow="hidden" flexWrap="wrap">
          <Skeleton isLoaded={listInfo}>
            {listInfo?.includeFilters?.genre?.map(genre => (
              <TagBadge text={genre} />
            ))}
            {listInfo?.includeFilters?.tags?.map(genre => (
              <TagBadge text={genre} />
            ))}
            {listInfo?.includeFilters?.demographic?.map(genre => (
              <TagBadge text={genre} />
            ))}
            {isFiltersEmpty(listInfo?.includeFilters) && (
              <TagBadge text="All" />
            )}
          </Skeleton>
        </Flex>
        <Text color="gray.400" fontSize="sm">
          Excluded genres:
        </Text>
        <Flex maxW="lg" overflow="hidden" flexWrap="wrap">
          <Skeleton isLoaded={listInfo}>
            {listInfo?.excludeFilters?.genre?.map(genre => (
              <TagBadge text={genre} />
            ))}
            {listInfo?.excludeFilters?.tags?.map(genre => (
              <TagBadge text={genre} />
            ))}
            {listInfo?.excludeFilters?.demographic?.map(genre => (
              <TagBadge text={genre} />
            ))}
            {isFiltersEmpty(listInfo?.excludeFilters) && (
              <TagBadge text="None" />
            )}
          </Skeleton>
        </Flex>
      </Stack>
      <SimpleGrid boxSizing="border-box" columns={[1, 1, 2, 3]} spacing={6}>
        {list.map(manga => {
          return <Card manga={manga} />;
        })}

        {isLoadingMore ? [...Array(3).keys()].map(() => <CardSkeleton />) : ''}
      </SimpleGrid>
      <Box ref={ref} w="full" h="48" p={10}>
        {isReachingEnd && (
          <Heading fontSize="lg" textAlign="center">
            Nothing left
          </Heading>
        )}
      </Box>
    </Box>
  );
};

function isFiltersEmpty(filters) {
  if (
    filters?.genre?.length === 0 &&
    filters?.tags?.length === 0 &&
    filters?.demographic?.length === 0
  )
    return true;
  else return false;
}
