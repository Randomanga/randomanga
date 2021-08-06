import { Box, Heading, Input, Text } from '@chakra-ui/react';
import { Card } from '../../components/Card';
import { MangaAccordion } from '../../components/MangaAccordion';

export const Sections = (props) => {
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
        <MangaAccordion />
        <MangaAccordion />

        <MangaAccordion />
      </Box>
    </Box>
  );
};
