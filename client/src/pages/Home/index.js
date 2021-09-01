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
        <meta name="keywords" content="random manga, random manga generator, random list generator, manga recommendations, list recommendations, manga list, random manga list, manga, manga to read, what manga to read" />
        <meta name="description" content="Need a random manga? Or need some recommendations? Use this website to get a random list of manga, browse user curated lists or find recommendations created by our recommendations engine. " />
        <link rel="canonical" href="https://randomanga.net" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta name="author" content="Wiz" />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo192.png" />
      </Helmet>
      <Daily />
      <FeatureDisplay />
      <GeneratorForm />
      {/* <QuickRecommendations /> */}
    </Box>
  );
};
