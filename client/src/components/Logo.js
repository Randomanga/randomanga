import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Logo(props) {
  return (
    <Link to="/">
      <Box {...props} display="inline-flex">
        <Text
          fontSize={['2xl', '3xl']}
          letterSpacing="wide"
          userSelect="none"
          color="white"
          fontFamily="brand"
        >
          Rando
        </Text>
        <Text
          fontSize={['2xl', '3xl']}
          userSelect="none"
          color="blue.400"
          fontFamily="brand"
        >
          Manga
        </Text>
      </Box>
    </Link>
  );
}
