import {
  Box,
  Heading,
  HStack,
  SkeletonText,
  Text,
  Button,
  useBoolean,
} from '@chakra-ui/react';
import Disqus from "disqus-react"

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useList from '../../hooks/data/useList';
import { RankingCard } from './components/RankingCard';
import { FaHeart } from 'react-icons/fa';
import useUser from '../../hooks/data/useUser';
import { toast } from 'react-toastify';
import { toggleListLike } from '../../adapters/api';
export function List(props) {
  const { id } = useParams();
  const { data, isLoading, error, mutate } = useList(id);
  const { user } = useUser();
  const disqusShortname = "Randomanga"
  const disqusConfig = {
    url: `https://randomanga.net/lists/${id}`,
    identifier: id,
    title: "List",
  }

  const onLike = async () => {
    if (!user) {
      toast.error('Please login to like this list.');
      return;
    }
    await toggleListLike(data._id, data.likes.includes(user._id));
    mutate();
  };

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
          <Text color="gray.500" m={1}>Description</Text>
          {data?.description}
        </Text>
      </SkeletonText>
      <HStack>
        <Button
          bg="gray.900"
          color="gray.100"
          px={5}
          py={3}
          _focus={{ borderColor: '' }}
          _hover={{ bg: 'gray.800' }}
          leftIcon={
            <FaHeart
              color={data?.likes.includes(user?._id) ? 'red' : 'gray.100'}
              size={20}
            />
          }
          onClick={onLike}
          variant="regular"
        >
          {data?.likes.length}
        </Button>
      </HStack>
      <Box mt={16}>
        {data?.list
          .sort((a, b) => {
            return b.rank - a.rank;
          })
          .map((manga, index) => (
            <RankingCard
              mangaData={manga}
              rank={data.list.length - index}
              key={manga.id}
            />
          ))}
      </Box>
      <Box className="article-container" my={'20'}>
        <Heading as="h4" fontSize="lg" fontFamily="body">Comments</Heading>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Box>
    </Box>
  );
}
