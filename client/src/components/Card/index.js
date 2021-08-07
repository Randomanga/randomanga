import {
  Heading,
  Flex,
  useColorModeValue,
  chakra,
  HStack,
  Image,
  Stack,
  Box,
  Badge,
  VStack,
  Text,
  Button,
  Icon,
  Tooltip,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  Skeleton,
} from '@chakra-ui/react';
import DOMPurify from 'dompurify';
import { FaPlusSquare, FaCheckSquare } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useDebounce from '../../hooks/useDebounce';
import request from 'graphql-request';
import axios from 'axios';
import { toast } from 'react-toastify';
import { addToPlanning, removeFromPlanning } from '../../adapters/api';

export const Card = ({ data, ...rest }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const debouncedExpand = useDebounce(isHovering, 300);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const [manga, setManga] = useState(data);
  const [onList, setOnList] = useState(manga.mediaListEntry != null);
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
    setOnList(manga.mediaListEntry != null);
  }, [manga]);

  useEffect(() => {
    debouncedExpand ? setExpanded(true) : setExpanded(false);
  }, [debouncedExpand]);
  return (
    <React.Fragment key={manga.id}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="md"
        minH="48"
        height={['52', '52', '56', '60']}
        overflow="hidden"
        {...rest}
      >
        <Image
          w={[28, 32, 36]}
          objectFit="cover"
          src={manga.coverImage.large}
          loading="lazy"
        />

        <Flex direction="column" w={'full'} h={'full'} maxH="">
          <VStack
            p={{ base: 2, md: 4 }}
            maxH={'full'}
            py={1}
            flex="1"
            overflow="hidden"
          >
            <Box
              maxH="100%"
              minW="full"
              overflow="auto"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              css={{
                overscrollBehavior: 'contain',
                '&::-webkit-scrollbar': {
                  width: '7px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#373737',
                  borderRadius: '24px',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Heading
                fontFamily="body"
                maxW="full"
                fontSize={['md', 'md']}
                borderBottom="2px"
                borderColor="orange.500"
                pb={0.5}
                mr={2}
                noOfLines={expanded ? null : 2}
              >
                {manga.title.romaji}
              </Heading>
              <Text
                mt={1}
                fontSize={'xs'}
                fontFamily="body"
                color={expanded ? 'gray.300' : 'gray.500'}
                noOfLines={expanded ? null : [6, 6, 6, 7]}
                lineHeight={'4'}
                minH={0}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    DOMPurify.sanitize(manga.description)
                  ),
                }}
              />
            </Box>
          </VStack>
          <Flex
            width="full"
            justifyContent="space-between"
            alignItems="center"
            py={2}
            pr={2}
            bg={'gray.900'}
          >
            <HStack
              pl={{ base: 2, md: 3 }}
              overflow="hidden"
              flexWrap="wrap"
              maxH="1.12rem"
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
            </HStack>
            <Tooltip
              label={onList ? 'Remove from list' : 'Add to planning'}
              bg="gray.700"
              color="white"
              hasArrow
              fontSize="md"
              aria-label={onList ? 'Remove from list' : 'Add to planning'}
              openDelay={350}
            >
              <IconButton
                bg="transparent"
                _hover
                _focus
                _active
                onClick={onList ? () => setIsOpen(true) : () => addToList()}
                icon={onList ? <FaCheckSquare /> : <FaPlusSquare />}
                size="xs"
                fontSize={'lg'}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        isCentered
        leastDestructiveRef={cancelRef}
        onClose={onClose}
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
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onClose();
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
