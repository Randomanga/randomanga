import { Box, Heading, SkeletonText, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useList from '../../hooks/data/useList';
import { RankingCard } from './components/RankingCard';
export function List(props) {
  const { id } = useParams();
  const { data, isLoading, error } = useList(id);

  if (data) console.log(data);
  return (
    <Box minH={'60vh'} maxW="4xl" mx="auto" mt={20} px={['2', '5']}>
      <SkeletonText noOfLines={4} isLoaded={!isLoading}>
        <Heading as="h1" mt={24} fontFamily="body" fontWeight="bold">
          {data?.title}
        </Heading>
        <Text color="gray.400" fontSize="sm">
          Author: {data?.author.username}
        </Text>
      </SkeletonText>
      <SkeletonText noOfLines={4} isLoaded={!isLoading}>
        <Text py={4} color="gray.300">
          Description: <br />
          {data?.description}
        </Text>
      </SkeletonText>
      <RankingCard />
    </Box>
  );
}
