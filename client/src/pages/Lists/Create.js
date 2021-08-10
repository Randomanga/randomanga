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
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { FaGripVertical, FaTimes } from 'react-icons/fa';
import { Search } from './components/search';
import React from 'react';
import { GrDrag } from 'react-icons/gr';
export function Create(props) {
  const [list, setList] = React.useState([]);

  const onAdd = (entry) => {
    setList(list.concat([entry]));
  };
  const onDragEnd = (param) => {
    const { source, destination } = param;
    if (!destination) {
      return;
    }
    let result = Array.from(list);
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);

    setList(result);
  };

  return (
    <Box minH={'60vh'} maxW="7xl" mx="auto" mt={20} px={['2', '5']}>
      <Heading as="h1" mt={16} fontFamily="body" fontWeight="bold">
        Create top list
      </Heading>
      <Text
        fontSize="sm"
        maxW="lg"
        letterSpacing="wide"
        color="gray.300"
        my={4}
        mb={12}
      >
        Fill in the form below to create a list of recommendations. It can be
        anything you'd like. (eg. Best shounen manga from the 90's). <br />
        The list is meant to be ranked(optional), to rearrange the entries you
        can hold and drag them.
      </Text>
      <Flex direction={['column', 'column', 'row']} w={'full'}>
        <Stack spacing={2} as="form" w={['full', 'full', '50%']}>
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
          mt={useBreakpointValue({ base: '8', md: null, lg: null, xl: null })}
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
            minH={'54vh'}
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
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {list.map((manga, index) => (
                      <Draggable
                        key={manga.id}
                        draggableId={manga.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{ ...provided.draggableProps.style }}
                            h={'min-content'}
                            userSelect="none"
                          >
                            <Flex alignItems="center">
                              <Text pr={2}>{index + 1}.</Text>
                              <Icon w="7" h="90%" as={FaGripVertical} pr={1} />
                              <Image
                                src={manga.coverImage.medium}
                                w={8}
                                pr={2}
                              />
                              <Text textAlign="left">{manga.title.romaji}</Text>
                            </Flex>
                            <IconButton
                              size="md"
                              bg="transparent"
                              icon={<FaTimes />}
                              onClick={() => {
                                setList(
                                  list.filter((item) => item.id !== manga.id)
                                );
                              }}
                            />
                          </Flex>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Box>
        </Box>
      </Flex>
      <Button w="full" my={4}>
        Create list
      </Button>
    </Box>
  );
}
const dummyData = [
  {
    id: 1,
    sequence_no: 1,
    title: 'The Avengers',
    release_year: 2012,
  },
  {
    id: 2,
    sequence_no: 2,
    title: 'The Avengers - Age of Ultron',
    release_year: 2016,
  },
  {
    id: 3,
    sequence_no: 3,
    title: 'The Avengers - Infinity War',
    release_year: 2019,
  },
  {
    id: 4,
    sequence_no: 4,
    title: 'The Avengers - End Game',
    release_year: 2020,
  },
];

/* 
{list?.map((manga, index) => (
              <Flex
                alignItems="center"
                justifyContent="space-between"
                ref={_provided.innerRef}
                {..._provided.draggableProps}
                {..._provided.dragHandleProps}
                userSelect="none"
                sx={{ ..._provided.draggableProps.style }}
                bg={_snapshot.isDragging ? 'var(--chakra-colors-gray-900)' : ''}
              >
                <Flex alignItems="center" justifyContent="space-between" mb={1}>
                  <Text pr={3}>{index + 1}. </Text>
                  <Icon
                    w="7"
                    as={FaGripVertical}
                    bg="transparent"
                    color="white"
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

*/
