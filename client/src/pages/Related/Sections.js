import { Box, Heading, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MangaAccordion } from '../../components/MangaAccordion';
import { fetchPopular, fetchTrending } from '../../adapters/api';
export const Sections = (props) => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular().then((data) => {
      setPopular(data.Page.media);
    });
    fetchTrending().then((data) => {
      setTrending(data.Page.media);
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
        Trending
      </Heading>
      <Box px={2}>
        {trending.map((manga) => (
          <MangaAccordion manga={manga} />
        ))}
      </Box>

      <Heading
        as="h2"
        fontSize="3xl"
        px={2}
        my={8}
        fontFamily="body"
        fontWeight="bold"
      >
        Top Manga
      </Heading>
      <Box px={2}>
        {popular.map((manga) => (
          <MangaAccordion manga={manga} />
        ))}
      </Box>
    </Box>
  );
};
