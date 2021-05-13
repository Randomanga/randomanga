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
import { useState } from 'react';
import useSWR from 'swr';
const Controls = ({ manga, ...props }) => {
  const { data, error } = useSWR('http://192.168.1.242:5000/api/manga/daily',{
    refreshInterval: 0,
  });
  const [liked, setLiked] = useState(data?.manga.liked);

  const onAddToList = () => {};
  const onLike = () => {
    setLiked(!liked);
  };
  if (!data) return <Skeleton />;
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
          <FaHeart color={liked ? 'red' : 'white'} tra size={20} pr={0} />
        }
        variant="regular"
        onClick={onLike}
      >
        {data?.manga.likes_count}
      </Button>
    </HStack>
  );
};

function Card(props) {
  const { data, error } = useSWR('http://192.168.1.242:5000/api/manga/daily', {
    refreshInterval: 0,
  });
  console.log(!(!data && !error));
  if (error) console.log(error);
  return (
    <Box mt={['-28', '-40']} pl={['2%', '3%', '1%', '12%']}>
      <HStack align="left" spacing={['2', '4']}>
        <Skeleton isLoaded={!(!data && !error)}>
          <VStack align="left">
            <Image
              w={['24', '36', '40', '36']}
              rounded="sm"
              boxShadow="dark-lg"
              src={data?.manga.cover_image.large}
            />
            <Controls
              minW="full"
              maxW="full"
              display={['none', 'none', 'block']}
            />
          </VStack>
        </Skeleton>
        <VStack align="left" pt={['9']} color="white" spacing={2} pr={4}>
          <SkeletonText noOfLines={1} isLoaded={!(!data && !error)}>
            <Heading fontSize={['md', 'xl']} fontFamily="body">
              Gokshoku
            </Heading>
          </SkeletonText>
          <SkeletonText noOfLines={1} isLoaded={!(!data && !error)}>
            <HStack>
              {data?.manga.genre.map(genre => (
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
            </HStack>
          </SkeletonText>
          <SkeletonText noOfLines={5} isLoaded={!(!data && !error)}>
            <Description
              display={['none', 'none', '-webkit-box']}
              text={data?.manga.description}
            />
            <Controls display={['block', 'block', 'none']} pt={2} />
          </SkeletonText>
        </VStack>
      </HStack>
      <Box>
        <SkeletonText noOfLines={5} isLoaded={!(!data && !error)}>
          <Description
            pt={4}
            display={['-webkit-box', '-webkit-box', 'none']}
            text={`Aute in adipisicing consectetur consequat anim qui magna enim voluptate dolor eu exercitation. Incididunt ipsum quis in nisi officia incididunt culpa minim tempor ullamco duis laboris sint proident. Ipsum commodo deserunt voluptate ad sunt ut minim veniam sit consectetur irure velit. Incididunt nulla magna amet ipsum sit est id Lorem proident magna dolor elit irure veniam. Eiusmod ea pariatur Lorem do voluptate. Laboris sit ipsum nulla id proident minim officia nulla occaecat.
          
          In consectetur enim ad ullamco sint ullamco adipisicing labore culpa. Minim sit commodo voluptate ad. Quis proident cupidatat pariatur Lorem enim. Laboris minim est voluptate eu anim id consequat aute consequat commodo. Amet do aliquip irure nostrud irure. `}
          />
        </SkeletonText>
      </Box>
    </Box>
  );
}
export default Card;
