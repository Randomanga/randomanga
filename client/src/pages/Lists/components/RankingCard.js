import {
  Box,
  Heading,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  Image,
  Text,
  Link,
  Badge,
  useMediaQuery,
  IconButton,
} from '@chakra-ui/react';
import DOMPurify from 'dompurify';
import { FaCheckSquare, FaHeart, FaPlusSquare } from 'react-icons/fa';
import { useState } from 'react';
import TagBadge from '../../../components/TagBadge';
import { toast } from 'react-toastify';
import { removeFromPlanning, addToPlanning } from '../../../adapters/api';
export function RankingCard({ mangaData, rank }) {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const [manga, setManga] = useState(mangaData);
  const [onList, setOnList] = useState(mangaData.mediaListEntry != null);

  const onAddToList = async () => {
    if (!localStorage.getItem('alToken')) {
      toast.error('You need to authenticate with anilist to add manga');
      return;
    }
    try {
      const data = await addToPlanning(manga.id);
      toast.success('Manga added to planning list');
      setOnList(true);
      setManga({ ...manga, mediaListEntry: data.SaveMediaListEntry });
    } catch (e) {
      toast.error('An error ocurred. Please try again');
    }
  };
  const onRemoveFromList = async () => {
    if (!localStorage.getItem('alToken')) {
      toast.error('You need to authenticate with anilist to remove manga');
      return;
    }
    try {
      const data = await removeFromPlanning(manga.mediaListEntry.id);
      toast.success('Manga removed from planning list');
      setManga({ ...manga, mediaListEntry: null });
      setOnList(false);
    } catch (e) {
      toast.error('An error occurred. Please try again');
    }
  };

  return (
    <Box
      display={{ md: 'flex' }}
      maxW={{ lg: '2xl' }}
      rounded={{ lg: 'lg' }}
      mt={12}
    >
      <Box w={{ md: '30%' }} mr={{ md: 4 }}>
        <Image
          h="64"
          maxH={{ base: 64, md: '64' }}
          w="full"
          rounded={{ lg: 'lg' }}
          loading="lazy"
          objectFit="cover"
          src={
            isDesktop
              ? manga.coverImage.large
              : manga.bannerImage ?? manga.coverImage.extraLarge
          }
        />
        {isDesktop && (
          <HStack py={2} align="center">
            <Button
              fontWeight="semibold"
              bg="gray.800"
              color="gray.100"
              px={5}
              w="full"
              py={3}
              _hover={{ bg: 'gray.800' }}
              _focus={{ borderColor: '' }}
              leftIcon={onList ? <FaCheckSquare /> : <FaPlusSquare />}
              onClick={onList ? onRemoveFromList : onAddToList}
              mr={2}
            >
              {onList ? 'Remove from list' : 'Add to list'}
            </Button>
            {/* <Button
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              _focus={{ borderColor: '' }}
              _hover={{ bg: 'gray.800' }}
              leftIcon={<FaHeart size={20} />}
              variant="regular"
            >
              39
            </Button> */}
          </HStack>
        )}
      </Box>

      <Box py={2} mt={2} w={{ md: '60%' }}>
        <Heading
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          lineHeight="10"
        >
          <Box bg="gray.800" p={2} mr={2} display="inline">
            {`${rank}.`}
          </Box>
          {manga.title.romaji}
        </Heading>
        <HStack my={4}>
          {manga.genres.map((genre) => (
            <Badge
              rounded="full"
              px="2"
              fontSize="xs"
              textTransform="capitalize"
              color="white"
              bg="gray.700"
            >
              {genre}
            </Badge>
          ))}
        </HStack>
        <Text
          mt={4}
          color={useColorModeValue('gray.600', 'gray.400')}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(manga.description ?? 'No description'),
          }}
        />

        {!isDesktop && (
          <Box mt={8}>
            <Button
              fontWeight="semibold"
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              w="full"
              _hover={{ bg: 'gray.800' }}
              _focus={{ borderColor: '' }}
              leftIcon={onList ? <FaCheckSquare /> : <FaPlusSquare />}
              onClick={onList ? onRemoveFromList : onAddToList}
              mr={2}
            >
              {onList ? 'Remove from list ' : 'Add to list'}
            </Button>
            {/* <Button
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              _focus={{ borderColor: '' }}
              _hover={{ bg: 'gray.800' }}
              leftIcon={<FaHeart size={20} />}
              variant="regular"
            >
              39
            </Button> */}
          </Box>
        )}
      </Box>
    </Box>
  );
}
