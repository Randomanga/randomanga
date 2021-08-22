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
import { getListCover, searchLists } from '../../adapters/api';
import { useEffect, useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../hooks/data/useUser';

export function Browse(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const query = useQuery();
  const { user } = useUser();
  const history = useHistory();
  const location = useLocation();
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(searchTerm, 300);
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('popularity_desc');
  const [pageInfo, setPageInfo] = useState();
  const search = async (url) => {
    const { data } = await searchLists(url);
    setPageInfo(data.pageInfo);
    const ids = data.list.map((article) => {
      const [{ id }] = article.list;
      return id;
    });
    const covers = await getListCover(ids);
    const list = data.list.map((list, index) => {
      const [{ id }] = list.list;
      const cor = covers.find((cover) => cover.id == id);
      return {
        ...list,
        cover: cor.bannerImage || cor.coverImage.extraLarge,
      };
    });
    return list;
  };
  const onSortChange = (change) => {
    setSortBy(change);
    let currentUrlParams = new URLSearchParams(location.search);
    const [sort, order] = change.split('_');
    currentUrlParams.set('sort', sort);
    currentUrlParams.set('order', order);
    search(currentUrlParams.toString()).then((data) => setResults(data));
    history.push({
      pathname: location.pathname,
      search: currentUrlParams.toString(),
    });
  };
  // Updates sort and order state from the url
  useEffect(() => {
    const sort = query.get('sort');
    const order = query.get('order');
    if (sort && order) setSortBy(`${sort}_${order}`);
  }, [query.get('sort'), query.get('order')]);
  //updates search term
  useEffect(() => {
    const search = query.get('search');
    if (search) setSearchTerm(search);
    else setSearchTerm('');
  }, [query.get('search')]);

  // adds or removed search param based on debounced state
  useEffect(() => {
    let currentUrlParams = new URLSearchParams(location.search);
    debouncedQuery
      ? currentUrlParams.set('search', debouncedQuery)
      : currentUrlParams.delete('search');
    debouncedQuery ? setIsSearching(true) : setIsSearching(false);
    setResults([]);
    search(currentUrlParams.toString()).then((data) => setResults(data));
    history.push({
      pathname: location.pathname,
      search: currentUrlParams.toString(),
    });
  }, [debouncedQuery]);

  const onNextPage = async () => {
    let currentUrlParams = new URLSearchParams(location.search);
    currentUrlParams.set('page', pageInfo.currentPage + 1);
    search(currentUrlParams.toString()).then((data) => {
      setResults([...results, ...data]);
    });
  };

  return (
    <Box minH={'60vh'} maxW="6xl" mx="auto" mt={20} px={['2', '5']}>
      <Box mt={24}>
        <Heading as="h1" mb={12} fontFamily="body" fontWeight="bold">
          {isSearching ? 'Search' : 'Browse'}
        </Heading>
        <Flex py={6} mb={12} justifyContent="space-between">
          <Box maxW="sm" mr={2}>
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
          {/* <Menu>
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
                <MenuItemOption value="popularity_asc">
                  Popularity ascending
                </MenuItemOption>
                <MenuItemOption value="popularity_desc">
                  Popularity descending
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu> */}
          <Button
            bg="gray.800"
            onClick={() => {
              if (!user) {
                toast.error('Please login to create a list');
                return;
              }
              history.push('/lists/create');
            }}
          >
            Create new list
          </Button>
        </Flex>
      </Box>

      <Grid
        templateColumns={'repeat(auto-fit,minmax(var(--chakra-sizes-xs),1fr))'}
        gridGap="6"
      >
        {results?.map((list) => (
          <Article article={list} />
        ))}
      </Grid>
      {isSearching && results?.length < 1 && (
        <Text textAlign="center" fontSize="lg">
          No list found
        </Text>
      )}
      {pageInfo?.hasNextPage && (
        <Button w="full" size={'md'} mt={6} mb={6} onClick={onNextPage}>
          Load more
        </Button>
      )}
    </Box>
  );
}
