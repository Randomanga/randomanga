import {
  Box,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  InputRightElement,
  Text,
  IconButton,
  Flex,
  Menu,
  MenuList,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
import { Article } from '../../components/Article';
import { FaTimes, FaSearch, FaSort } from 'react-icons/fa';
import useDebounce from '../../hooks/useDebounce';
import { useState } from 'react';

export function Browse(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(searchTerm, 300);
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('pop_desc');

  const onSortChange = (change) => {
    setSortBy(change);
  };

  return (
    <Box minH={'60vh'} maxW="6xl" mx="auto" mt={20} px={['2', '5']}>
      <Box mt={16} px={4}>
        <Heading as="h1" mb={12} fontFamily="body" fontWeight="bold">
          Browse lists
        </Heading>
        <Flex py={6} mb={12} justifyContent="space-between">
          <Box maxW="sm">
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
          </Box>
          <Menu>
            <MenuButton color="gray.400">
              <Icon size="md" as={FaSort} color="gray.500" />
              Sort
            </MenuButton>
            <MenuList bg="gray.800" color="gray.400" border="none">
              <MenuOptionGroup
                defaultValue={sortBy}
                type="radio"
                onChange={onSortChange}
              >
                <MenuItemOption value="title_asc">
                  Title ascending
                </MenuItemOption>
                <MenuItemOption value="title_desc">
                  Title descending
                </MenuItemOption>
                <MenuItemOption value="pop_asc">
                  Popularity ascending
                </MenuItemOption>
                <MenuItemOption value="pop_desc">
                  Popularity descending
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      <Grid
        templateColumns={'repeat(auto-fit,minmax(var(--chakra-sizes-xs),1fr))'}
        gridGap="6"
      ></Grid>
    </Box>
  );
}
