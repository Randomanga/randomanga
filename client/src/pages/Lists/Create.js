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
  FormErrorMessage,
} from '@chakra-ui/react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { FaGripVertical, FaTimes } from 'react-icons/fa';
import { Search } from './components/search';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { uploadList } from '../../adapters/api';
import { useHistory } from 'react-router-dom';
export function Create(props) {
  const [list, setList] = React.useState([]);
  const [isUploading, setIsUploading] = React.useState(false);
  const { register, handleSubmit, formState } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    if (list.length < 5) {
      toast.error('List must have at least 5 entries');
      return;
    }
    const ids = list.map((item, index) => {
      return { id: item.id, rank: index + 1 };
    });
    setIsUploading(true);
    uploadList({ ...data, list: ids })
      .then((res) => {
        setIsUploading(false);
        history.push(`/lists/${res.data._id}`);
      })
      .catch((err) => {
        setIsUploading(false);
        toast.error('There was an error creating the list. Please try again');
      });
  };

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
        Create list
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
        <Stack
          spacing={2}
          as="form"
          onSubmit={(e) => e.preventDefault()}
          w={['full', 'full', '50%']}
        >
          <FormControl isInvalid={formState.errors.title}>
            <Input
              rounded="md"
              placeholder="List title"
              name="title"
              variant="Filled"
              bg="gray.800"
              {...register('title', {
                required: 'Tite is required',
                minLength: {
                  value: 15,
                  message: 'Title must be at least 15 characters long',
                },
              })}
            />
            <FormErrorMessage>
              {formState.errors.title && formState.errors.title.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formState.errors.description}>
            <Textarea
              placeholder="Describe the list shortly"
              bg="gray.800"
              {...register('description', {
                required: 'Description is required',
                minLength: {
                  value: 20,
                  message: 'Description must be at least 20 characters long',
                },
              })}
              variant="Filled"
            />
            <FormErrorMessage>
              {formState.errors.description &&
                formState.errors.description.message}
            </FormErrorMessage>
          </FormControl>
          <Search onAdd={onAdd} list={list} />
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
                        {(provided, snapshot) => (
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
                    {list.length === 0 ? (
                      <Text
                        my="32"
                        textAlign="center"
                        fontFamily="body"
                        color="gray.500"
                      >
                        No manga in the list.
                      </Text>
                    ) : null}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Box>
        </Box>
      </Flex>
      <Button
        w="full"
        my={4}
        isLoading={isUploading}
        onClick={handleSubmit(onSubmit)}
      >
        Create list
      </Button>
    </Box>
  );
}
