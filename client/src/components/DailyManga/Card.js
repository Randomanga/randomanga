import { Badge, VStack } from '@chakra-ui/layout';
import {
  Button,
  Image,
  Heading,
  Box,
  Skeleton,
  SkeletonText,
  HStack,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Description from '../MangaDescription';
import AlIcon from '../al.svg';
import { toggleLikeManga } from '../../adapters/api';
import { toast } from 'react-toastify';

import useDaily from '../../hooks/data/useDaily';

const Controls = (props) => {
  const { manga, isLoading, mutate, error } = useDaily();

  const onAddToList = () => {};
  const onLike = async () => {
    try {
      const res = await toggleLikeManga(manga?.al_id, manga?.liked);
      mutate();
    } catch (e) {
      toast.error('You need to sign in to like manga', {
        toastId: 'likeerr',
      });
    }
  };
  if (isLoading) return <Skeleton />;
  return (
    <HStack {...props} overflowX="visible">
      <Button
        leftIcon={<Image w={4} bg={'black'} rounded="full" src={AlIcon} />}
        bg="blue.400"
        py={4}
        px={4}
        size="xs"
        _hover={{ bg: 'blue.500' }}
        _active={{ bg: 'blue.300' }}
        _focus={{ borderColor: 'blue.200' }}
      >
        Save
      </Button>
      <Button
        colorScheme="blue"
        size="xs"
        px={0}
        _focus={{ borderColor: '' }}
        leftIcon={
          <FaHeart
            color={manga?.liked ? 'red' : 'white'}
            tra
            size={20}
            pr={0}
          />
        }
        variant="regular"
        onClick={onLike}
      >
        {manga?.likes_count}
      </Button>
    </HStack>
  );
};

function Card(props) {
  const { manga, isLoading } = useDaily();
  return (
    <Box mt={['-28', '-36']} pl={['2%', '3%', '1%', '12%']}>
      <HStack align="left" spacing={['2', '4']}>
        <Skeleton isLoaded={!isLoading}>
          <VStack align="left" w="full">
            <Image
              w={['24', '36', '40', '36']}
              rounded="sm"
              boxShadow="dark-lg"
              loading="lazy"
              alt="daily manga cover"
              src={manga?.cover_image.large}
            />
            <Controls
              minW="full"
              maxW="full"
              display={['none', 'none', 'block']}
            />
          </VStack>
        </Skeleton>
        <VStack
          align="left"
          // pt={['4', '9']}
          color="white"
          spacing={2}
          pr={4}
          flex="1"
          maxW="2xl"
        >
          <SkeletonText noOfLines={1} isLoaded={!isLoading}>
            <Heading fontSize={['md', 'xl']} fontFamily="body" noOfLines={2}>
              {manga?.title}
            </Heading>
          </SkeletonText>
          <SkeletonText noOfLines={1} isLoaded={!isLoading}>
            <HStack
              maxW={['44', '56', 'container.xl']}
              overflow="hidden"
              flexWrap="wrap"
              maxH="1.1rem"
            >
              {manga?.genre.map((genre) => (
                <Badge
                  rounded="full"
                  px="2"
                  fontSize="xs"
                  textTransform="capitalize"
                  color="white"
                  bg="orange.500"
                >
                  {genre}
                </Badge>
              ))}
              {manga?.tags.map((tag) => (
                <Badge
                  rounded="full"
                  px="2"
                  fontSize="xs"
                  textTransform="capitalize"
                  color="white"
                  bg="orange.500"
                >
                  {tag}
                </Badge>
              ))}
            </HStack>
          </SkeletonText>
          <SkeletonText noOfLines={5} isLoaded={!isLoading}>
            <Description
              display={['none', 'none', '-webkit-box']}
              text={manga?.description}
            />
            <Controls display={['block', 'block', 'none']} pt={2} />
          </SkeletonText>
        </VStack>
      </HStack>
      <Description
        pt={4}
        display={['-webkit-box', '-webkit-box', 'none']}
        text={manga?.description}
      />
    </Box>
  );
}
export default Card;
