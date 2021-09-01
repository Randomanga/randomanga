import { Box, Heading, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import { Search } from './Search';
import { Helmet } from "react-helmet";
import { Sections } from './Sections';

export const Related = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box minH={'60vh'} maxW="7xl" mx="auto" mt={20} px={['2', '5']} maxW="4xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Randomanga - Recommendations</title>
        <meta name="keywords" content="manga recommendations, related, similar manga, rleated manga, manga, manga like, manga like... ," />
        <meta name="description" content="Have a favourite manga? Use this feature to find what's similar to your favourite manga using our machine learning algorithm.  " />
        <link rel="canonical" href="https://randomanga.net/recommendations" />
        <meta property="og:description" content="Have a favourite manga? Use this feature to find what's similar to your favourite manga using our machine learning algorithm.  " />
        <meta property="og:title" content="Randomanga - Recommendations" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo512.png" />
        <meta name="author" content="Wiz" />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo192.png" />
      </Helmet>
      <Heading as="h1" px={2} fontFamily="body" fontWeight="bold">
        Recommendations
      </Heading>
      <Text
        p={2}
        maxW="2xl"
        fontFamily="body"
        fontSize="sm"
        color="whiteAlpha.800"
      >
        Get manga recommendations generated using our machine learning algorithm.<br />
        Find recommendations by browsing the current trending and popular
        section, or search for a specific title. You can also sign in and
        authenticate with Anilist to see recommendations for your own list.
      </Text>
      <Search
        onSearchStateChange={(flag) => {
          setIsVisible(!flag);
        }}
      />
      {isVisible && <Sections />}
    </Box>
  );
};
