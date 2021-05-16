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
} from '@chakra-ui/react';
import { FaPlusSquare, FaCheckSquare } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
export const Card = props => {
  const [isHovering, setIsHovering] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const debouncedExpand = useDebounce(isHovering, 200);

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  useEffect(() => {
    debouncedExpand ? setExpanded(true) : setExpanded(false);
  }, [debouncedExpand]);

  return (
    <React.Fragment>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="md"
        minH="48"
        height={['52', '52', '56', '60']}
        overflow="hidden"
      >
        <Image
          w={[28, 32, 36]}
          objectFit="cover"
          src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx108428-wTg20rSpvkU9.jpg"
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
              }}
            >
              <Heading
                fontFamily="body"
                maxW="full"
                fontSize={['md', 'md']}
                borderBottom="2px"
                borderColor="orange.500"
                mr={2}
                noOfLines={expanded ? null : 2}
              >
                Kage no Jitsuryokusha ni Naritakute!
              </Heading>
              <Text
                mt={1}
                fontSize={'xs'}
                fontFamily="body"
                color={expanded ? 'gray.300' : 'gray.500'}
                noOfLines={expanded ? null : [6, 6, 6, 7]}
                lineHeight={'4'}
                minH={0}
              >
                Enim quis anim amet exercitation laboris irure magna quis
                consequat. Officia voluptate eiusmod voluptate duis Lorem sunt
                irure et cupidatat. Dolore anim est est incididunt ea sit tempor
                id velit ipsum eiusmod anim in. Fugiat voluptate irure quis eu.
                Adipisicing nisi adipisicing qui officia ipsum ad voluptate
                culpa duis officia ex proident et. Dolor reprehenderit duis
                ipsum in quis elit laboris. Est dolore consequat consectetur
                exercitation minim minim fugiat reprehenderit dolor ut. Ex dolor
                occaecat sint deserunt aliquip adipisicing consectetur velit
                cupidatat sint pariatur ad velit ipsum. Lorem in pariatur id
                pariatur est et duis consectetur ex ipsum nulla. Aute minim elit
                exercitation non aliqua aute esse officia deserunt exercitation
                aliqua.
              </Text>
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
              maxH="1.1rem"
            >
              {['Action', 'Romance', 'Comedy', 'Harem', 'Ecchi'].map(genre => (
                <Badge
                  rounded="full"
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
              label="On list"
              bg="gray.700"
              color="white"
              hasArrow
              fontSize="md"
              aria-label="Add/Remove manga from list"
              openDelay={300}
            >
              <IconButton
                bg="transparent"
                _hover
                _focus
                _active
                onClick={() => setIsOpen(true)}
                icon={<FaPlusSquare />}
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
              Are you sure you want to remove it?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </React.Fragment>
  );
};
