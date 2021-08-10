import {
  InputGroup,
  Box,
  Image,
  Heading,
  InputLeftElement,
  Icon,
  Input,
  InputRightElement,
  IconButton,
  Divider,
  Flex,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { SiAddthis } from 'react-icons/si';
import { alSearch } from '../../../adapters/api';
import useDebounce from '../../../hooks/useDebounce';

export function Search({ onAdd }) {
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedQuery = useDebounce(searchTerm, 500);
  const [results, setResults] = React.useState([]);

  const handleAdd = (entry) => {
    if (onAdd) onAdd(entry);
  };
  useEffect(() => {
    if (debouncedQuery) {
      setIsSearching(true);
      alSearch(debouncedQuery).then((data) => {
        setResults(data.Page.media);
      });
    } else {
      setIsSearching(false);
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <React.Fragment>
      <InputGroup size="md">
        <InputLeftElement>
          <Icon as={FaSearch} color="gray.500" />
        </InputLeftElement>
        <Input
          placeholder="Search"
          rounded="md"
          variant="Filled"
          bg="gray.800"
          pr={12}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {isSearching && (
          <InputRightElement pr={2}>
            <IconButton
              icon={<FaTimes />}
              bg="transparent"
              _focus
              _active
              _hover={{ color: 'red' }}
              onClick={() => setSearchTerm('')}
            />
          </InputRightElement>
        )}
      </InputGroup>
      <Heading as="h4" p={1} fontSize="md" fontFamily="body">
        Results:
      </Heading>
      <Box
        bg="gray.800"
        p="3"
        rounded="md"
        h={'44'}
        overflowY="auto"
        sx={{
          '::-webkit-scrollbar': { height: '5px', width: '7px' },
          '::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'var(--chakra-colors-gray-600)',
            borderRadius: '4px',
          },
        }}
      >
        {results?.map((manga, index) => (
          <Flex justifyContent="space-between" alignItems="center" mb={1}>
            <Flex alignItems="center">
              <Image src={manga.coverImage.medium} w={8} pr={2} />
              <Tooltip
                aria-label={manga.title.romaji}
                label={manga.title.romaji}
                openDelay={200}
              >
                <Text noOfLines={1}>{manga.title.romaji}</Text>
              </Tooltip>
            </Flex>
            <IconButton
              size="md"
              bg="transparent"
              icon={<SiAddthis />}
              onClick={() => handleAdd(manga)}
            />
          </Flex>
        ))}
      </Box>
    </React.Fragment>
  );
}
