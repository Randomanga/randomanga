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
  Center,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { Article } from '../../components/Article';
import { FaTimes, FaSearch, FaSort } from 'react-icons/fa';
import useDebounce from '../../hooks/useDebounce';
import { getListCover, searchLists } from '../../adapters/api';
import { useEffect, useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../hooks/data/useUser';
import { Pagination } from '../../components/Pagination';

export function Browse(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const query = useQuery();
  const { page } = useParams();
  const { user } = useUser();
  const history = useHistory();
  const location = useLocation();
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(searchTerm, 300);
  const [results, setResults] = useState([]);
  const [pageInfo, setPageInfo] = useState();
  const [isFetching, setIsFetching] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const search = async (url) => {
    setIsFetching(true)
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
        cover: cor?.bannerImage || cor?.coverImage?.extraLarge,
      };
    });
    setIsFetching(false)
    return list;
  };



  //updates search term
  useEffect(() => {
    const search = query.get('search');
    if (search) setSearchTerm(search);
    else setSearchTerm('');
  }, [query.get('search')]);


  useEffect(() => {
    setCurrentPage(Number(page))
    let currentUrlParams = new URLSearchParams(location.search);
    currentUrlParams.set('page', page)
    setResults([])
    search(currentUrlParams.toString()).then((data) => setResults(data));
  }, [page]);


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




  const handlePageChange = (change) => {
    let currentUrlParams = new URLSearchParams(location.search);
    history.push({
      pathname: `/lists/browse/${change}`,
      search: currentUrlParams.toString(),
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

          <Button
            bg="gray.800"
            onClick={() => {
              if (!user) {
                toast.error('Please login to create a list');
                return;
              }
              history.push('/lists/browse/create');
            }}
          >
            Create list
          </Button>
        </Flex>
      </Box>

      <Grid
        templateColumns={'repeat(auto-fit,minmax(280px,1fr))'}
        rowGap={6}
        columnGap={3}
      >
        {results?.map((list) => (
          <Article article={list} />
        ))}
        {
          isFetching &&
          [...Array(5).keys()].map(() => {
            return (
              <Box maxW="lg" bg="gray.800" rounded="lg"
                shadow="md">
                <Skeleton h="44" />
                <Box p={2}>
                  <SkeletonText noOfLines={2} my={2} />
                  <SkeletonText noOfLines={4} my={6} />
                  <SkeletonText noOfLines={2} my={2} />
                </Box>
              </Box>
            )
          })
        }
      </Grid>
      {
        isSearching && results?.length < 1 && (
          <Text textAlign="center" fontSize="lg">
            No list found
          </Text>
        )
      }
      <Flex py={5} width="full" direction="column" alignItems="center" justifyContent="center">
        {!isFetching &&
          <Pagination totalCount={20 * pageInfo.total} defaultPage={page ?? 1} onPageChange={handlePageChange} pageSize={20} />
        }
      </Flex>
    </Box >
  );
}
