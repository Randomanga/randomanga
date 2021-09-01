import React from 'react';
import { FeatureDisplay } from '../../components/Feature';
import { Daily } from '../../components/DailyManga';
import { Box } from '@chakra-ui/layout';
import GeneratorForm from '../../components/GeneratorForm';
import { QuickRecommendations } from './QuickRecommendations';
import { Helmet } from 'react-helmet';
export const Home = (props) => {
  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Randomanga - Randomanga</title>
        <meta property="og:title" content="Randomanga - Randomanga" />
        <meta name="keywords" content="random manga, random manga generator, random list generator, manga recommendations, list recommendations, manga list, random manga list, manga, manga to read, what manga to read" />
        <meta property="og:description" content="Need a random manga? Or need some recommendations? Use this website to get a random list of manga, browse user curated lists or find recommendations created by our recommendations engine. " />
        <link rel="canonical" href="https://randomanga.net" />
        <meta name="author" content="Wiz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://randomanga.net" />
        <meta property="og:image" content="https://randomanga.net/logo512.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo192.png" />
      </Helmet>
      <Daily />
      <FeatureDisplay />
      <GeneratorForm />
      {/* <QuickRecommendations /> */}
    </Box>
  );
};
