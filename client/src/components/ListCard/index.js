import {
  Flex,
  Heading,
  Image,
  Text,
  Box,
  Badge,
  HStack,
  IconButton,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  Tooltip,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import { FaCheckSquare, FaPlusSquare } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { addToPlanning, removeFromPlanning } from '../../adapters/api';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
export const ListCard = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure();
  const cancelRef = useRef();
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const [manga, setManga] = useState(data);
  const [onList, setOnList] = useState(manga?.mediaListEntry != null);
  const addToList = async () => {
    if (!localStorage.getItem('alToken')) {
      toast.error('You need to authenticate with anilist to add manga');
      return;
    }
    try {
      const data = await addToPlanning(manga.id);
      toast.success('Manga added to planning list');
      setManga({ ...manga, mediaListEntry: data.SaveMediaListEntry });
    } catch (e) {
      toast.error('An error ocurred. Please try again');
    }
  };
  const removeFromList = async () => {
    try {
      const response = await removeFromPlanning(manga.mediaListEntry.id);
      toast.success('Manga removed from list');
      setManga({ ...manga, mediaListEntry: null });
    } catch (e) {
      toast.error('An error ocurred. Please try again');
    }
  };

  useEffect(() => {
    setOnList(manga?.mediaListEntry != null);
  }, [manga]);

  return (
    <React.Fragment>
      <Flex bg={'gray.800'} rounded="sm" boxShadow="md">
        <Image
          roundedLeft="sm"
          src={manga.coverImage.medium}
          w={12}
          h={16}
          fallbackSrc={'https://placehold.it/48x64?text=NO%20IMAGE'}
          loading="lazy"
        />

        <Flex alignItems="center" flex="1" justifyContent="space-between">
          <Box px="2" role="group" maxW="lg">
            <Heading fontSize="md" fontFamily="body" noOfLines={1} py={1}>
              {manga.title.romaji}
            </Heading>
            <HStack
              maxW="lg"
              // sx={{
              //   '::-webkit-scrollbar': { height: '5px' },
              //   '::-webkit-scrollbar-track': {
              //     background: 'transparent',
              //   },
              //   '::-webkit-scrollbar-thumb': {
              //     background: 'var(--chakra-colors-gray-600)',
              //     borderRadius: '4px',
              //   },
              // }}
              overflow="hidden"
              wrap="wrap"
              h="18px"
              // _groupHover={{
              //   overflow: 'auto',
              // }}
              // _groupFocus={{
              //   overflow: 'auto',
              // }}
              pb={1}
            >
              {manga.genres.map((genre) => (
                <Badge
                  rounded="full"
                  key={uuidv4()}
                  px="2"
                  fontSize="xs"
                  textTransform="capitalize"
                  color="white"
                  bg="blue.500"
                >
                  {genre}
                </Badge>
              ))}
              {manga.tags.map((tag) => (
                <Badge
                  rounded="full"
                  key={uuidv4()}
                  px="2"
                  fontSize="xs"
                  textTransform="capitalize"
                  color="white"
                  bg="blue.500"
                >
                  {tag.name}
                </Badge>
              ))}
            </HStack>
          </Box>

          <Button
            _hover
            _focus
            _active
            mx={2}
            bg="transparent"
            onClick={onList ? () => onToggle() : () => addToList()}
            leftIcon={onList ? <FaCheckSquare /> : <FaPlusSquare />}
          >
            {isDesktop ? (onList ? 'Remove from list' : 'Add to list') : ''}
          </Button>
        </Flex>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        isCentered
        leastDestructiveRef={cancelRef}
        onClose={onToggle}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg="gray.800">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove manga from list
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to remove this manga from your list?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onToggle}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onToggle();
                  removeFromList(manga.mediaListEntry.id);
                }}
                ml={3}
              >
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </React.Fragment>
  );
};
