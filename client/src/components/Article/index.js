import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Link,
  Flex,
  useColorModeValue,
  Skeleton,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { unlikeList, likeList, toggleListLike } from '../../adapters/api';
import useUser from '../../hooks/data/useUser';
export function Article({ article }) {
  const { user } = useUser();
  const [list, setList] = useState(article);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const liked = list.likes.includes(user?._id);
    setLiked(liked);
  }, [list, user]);

  const onLike = async () => {
    const liked = list.likes.includes(user?._id);
    const res = await toggleListLike(list._id, liked);
    setList({ ...list, likes: res.data.likes });
  };
  return (
    <LinkBox>
      <Flex
        direction="column"
        rounded="lg"
        shadow="md"
        maxW="lg"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Image
          roundedTop="lg"
          w="full"
          h={'44'}
          fit="cover"
          loading="lazy"
          fallbackSrc="https://placehold.it/400/202020?text=LOADING"
          src={list.cover}
          alt="Article"
        />

        <Flex p={4} flex="1" justifyContent="space-between" direction="column">
          <Box>
            <Link
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="lg"
              noOfLines={1}
              _hover={{ color: 'gray.600', textDecor: 'underline' }}
            >
              {list.title}
            </Link>
            <Text
              mt={2}
              fontSize="sm"
              h="3rem"
              noOfLines={3}
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {list.description}
            </Text>
          </Box>

          <Box mt={4} flex="1">
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center">
                <LinkOverlay
                  as={RouterLink}
                  mr={2}
                  to={`/lists/${list._id}`}
                  fontWeight="bold"
                  fontSize="xs"
                  color={useColorModeValue('gray.700', 'gray.200')}
                >
                  Author: {list.author.username}
                </LinkOverlay>
                {/* <Heading
                mx={1}
                fontSize="xs"
                color={useColorModeValue('gray.600', 'gray.300')}
                >
                21 SEP 2015
              </Heading> */}
              </Flex>
              {liked ? (
                <Button
                  color="gray.100"
                  px={5}
                  py={3}
                  _focus={{ borderColor: '' }}
                  _hover={{ bg: 'gray.800' }}
                  leftIcon={<FaHeart color="red" size={20} />}
                  onClick={onLike}
                  variant="regular"
                >
                  {list.likes.length}
                </Button>
              ) : (
                <Button
                  color="gray.100"
                  px={5}
                  py={3}
                  _focus={{ borderColor: '' }}
                  _hover={{ bg: 'gray.800' }}
                  leftIcon={<FaHeart color="white" size={20} />}
                  onClick={onLike}
                  variant="regular"
                >
                  {list.likes.length}
                </Button>
              )}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </LinkBox>
  );
}
