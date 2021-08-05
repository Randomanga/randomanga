import { Box, Heading, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import { Search } from './Search';
import { Sections } from './Sections';

export const Related = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Box minH={'60vh'} maxW="7xl" mx="auto" mt={20} px={['2', '5']} maxW="4xl">
      <Heading as="h1" px={2} fontFamily="body" fontWeight="bold">
        Recommendations
      </Heading>
      <Search onSearchStateChange={(flag) => setIsVisible(!flag)} />
      {isVisible && <Sections />}
    </Box>
  );
};
