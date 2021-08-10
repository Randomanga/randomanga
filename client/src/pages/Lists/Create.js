import {
  Box,
  Input,
  Heading,
  Icon,
  IconButton,
  Image,
  Tooltip,
  Text,
  Flex,
  FormControl,
  Textarea,
  Stack,
  InputLeftElement,
  Button,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  StackDivider,
  Divider,
} from '@chakra-ui/react';
import { FaGripVertical, FaTimes } from 'react-icons/fa';
import { Search } from './components/search';
import React from 'react';
import { GrDrag } from 'react-icons/gr';
export function Create(props) {
  const [list, setList] = React.useState([]);

  const onAdd = (entry) => {
    setList(list.concat([entry]));
  };

  return (
    <Box minH={'60vh'} maxW="7xl" mx="auto" mt={20} px={['2', '5']}>
      <Heading as="h1" my={12} fontFamily="body" fontWeight="bold">
        Create top list
      </Heading>
      <Flex direction={['column', 'column', 'row']} w={'full'}>
        <Stack spacing={2} as="form" w="full" w={['full', 'full', '50%']}>
          <FormControl>
            <Input
              rounded="md"
              placeholder="List title"
              name="title"
              variant="Filled"
              bg="gray.800"
            />
          </FormControl>
          <FormControl>
            <Textarea
              placeholder="Describe the list shortly"
              bg="gray.800"
              variant="Filled"
            />
          </FormControl>
          <Search onAdd={onAdd} />
        </Stack>
        <Box
          w={['full', 'full', '50%']}
          mt={useBreakpointValue({ base: '8', md: null })}
          ml={useBreakpointValue({ md: '4' })}
        >
          <Flex justifyContent="space-between" p={1} alignItems="center">
            <Heading as="h4" p={1} fontSize="md" fontFamily="body">
              List:
            </Heading>
            <Button variant="ghost" size="sm" onClick={() => setList([])}>
              Remove all
            </Button>
          </Flex>
          <Box
            bg="gray.800"
            w="full"
            rounded="md"
            p={4}
            overflowY="auto"
            maxH="54vh"
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
            {list?.map((manga, index) => (
              <Flex alignItems="center" justifyContent="space-between" mb={1}>
                <Flex alignItems="center">
                  <Text pr={3}>{index + 1}. </Text>
                  <Icon
                    size="md"
                    as={FaGripVertical}
                    bg="transparent"
                    color="white"
                    h="full"
                    w={4}
                    pr={1}
                  />
                  <Image src={manga.coverImage.medium} w={8} pr={2} />
                  <Tooltip
                    aria-label={manga.title.romaji}
                    label={manga.title.romaji}
                    openDelay={200}
                  >
                    <Text noOfLines={1}>{manga.title.romaji}</Text>
                  </Tooltip>
                </Flex>
                <IconButton size="md" bg="transparent" icon={<FaTimes />} />
              </Flex>
            ))}
            {!list || list.length === 0 ? (
              <Text opacity={0.7}>
                Search for a manga and click the add button.
              </Text>
            ) : null}
          </Box>
        </Box>
      </Flex>
      <Button w="full" my={4}>
        Create list
      </Button>
    </Box>
  );
}
