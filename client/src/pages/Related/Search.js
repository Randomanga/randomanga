import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  IconButton,
  List,
  Skeleton,
  Heading,
  ListItem,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Box } from '@chakra-ui/react';
import { useQuery } from '../../hooks/useQuery';
import { CloseIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { alSearch } from '../../adapters/api';
import { useHistory } from 'react-router-dom';
import { MangaAccordion } from '../../components/MangaAccordion';
export const Search = ({ onSearchStateChange }) => {
  const query = useQuery();
  const history = useHistory();
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const debounceSearchQuery = useDebounce(searchInput, 500);

  useEffect(() => {
    const search = query.get('search');
    if (search) setSearchInput(search);
    else setSearchInput('');
  }, [query.get('search')]);
  useEffect(() => {
    if (debounceSearchQuery) {
      setIsSearching(true);
      setIsLoading(true);
      history.push(`/recommendations?search=${debounceSearchQuery}`);
      alSearch(debounceSearchQuery).then((data) => {
        setResults(data.Page.media);
        setIsLoading(false);
      });
    } else {
      setIsSearching(false);
      setIsLoading(false);
      history.push(`/recommendations`);
    }
  }, [debounceSearchQuery]);
  useEffect(() => {
    if (onSearchStateChange) onSearchStateChange(isSearching);
  }, [isSearching]);

  return (
    <Box py={5} px={2}>
      <InputGroup size="md" w={['full', 'full', 'xs']}>
        <InputLeftElement>
          <Icon as={FaSearch} color="gray.500" />
        </InputLeftElement>
        <Input
          placeholder="Search"
          rounded="md"
          variant="Filled"
          bg="gray.800"
          pr={12}
          value={searchInput}
          onChange={(change) => setSearchInput(change.target.value)}
        />
        {isSearching && (
          <InputRightElement pr={2}>
            <IconButton
              icon={<FaTimes />}
              bg="transparent"
              _focus
              _active
              _hover={{ color: 'red' }}
              onClick={() => setSearchInput('')}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {isSearching && (
        <Box>
          <Heading
            as="h2"
            fontSize="3xl"
            px={2}
            my={8}
            fontFamily="body"
            fontWeight="bold"
          >
            Search
          </Heading>
          {results.map((manga) => (
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
      )}
    </Box>
  );
};
