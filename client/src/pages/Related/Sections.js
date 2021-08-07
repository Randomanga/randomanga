import {
  Box,
  Heading,
  Input,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MangaAccordion } from '../../components/MangaAccordion';
import { fetchPopular, fetchTrending, fetchSections } from '../../adapters/api';
export const Sections = (props) => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchSections().then((data) => {
      setTrending(data.trending.media);
      setPopular(data.popular.media);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box mt={12}>
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
        {trending.map((manga) => (
          <MangaAccordion manga={manga} />
        ))}
        {isLoading && (
          <>
            <Skeleton
              isLoaded={!isLoading}
              mx="auto"
              maxW="4xl"
              mb={4}
              w="full"
              h="40"
              rounded="md"
            />

            <Skeleton
              isLoaded={!isLoading}
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
        {popular.map((manga) => (
          <MangaAccordion manga={manga} />
        ))}
        {isLoading && (
          <>
            <Skeleton
              isLoaded={!isLoading}
              mx="auto"
              maxW="4xl"
              mb={4}
              w="full"
              h="40"
              rounded="md"
            />

            <Skeleton
              isLoaded={!isLoading}
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
    </Box>
  );
};
