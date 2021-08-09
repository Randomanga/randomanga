import { Flex, Image, Icon, Box, Text, HStack } from '@chakra-ui/react';
import { FaExchangeAlt } from 'react-icons/fa';
export function RelatedCompact() {
  return (
    <Box
      bg="gray.800"
      boxShadow="lg"
      rounded="md"
      maxW={['sm', 'sm', '47%']}
      w="full"
      p={2}
      m={2}
    >
      <Flex>
        <Box position="relative">
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-oT7YguhEK1TE.jpg"
            w={'16'}
            flexShrink="0"
            boxShadow="md"
          />
        </Box>
        <Icon as={FaExchangeAlt} w={8} h={8} mx={2} my={'auto'} />
        <HStack
          spacing={1}
          overflowX="scroll"
          flex="1"
          pb="1"
          sx={{
            '::-webkit-scrollbar': { height: '5px' },
            '::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
              background: 'var(--chakra-colors-gray-600)',
              borderRadius: '4px',
            },
          }}
        >
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-oT7YguhEK1TE.jpg"
            w={'16'}
            boxShadow="md"
          />
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-oT7YguhEK1TE.jpg"
            w={'16'}
            boxShadow="md"
          />
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-oT7YguhEK1TE.jpg"
            w={'16'}
            boxShadow="md"
          />
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-oT7YguhEK1TE.jpg"
            w={'16'}
            boxShadow="md"
          />
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-oT7YguhEK1TE.jpg"
            w={'16'}
            boxShadow="md"
          />
        </HStack>
      </Flex>
    </Box>
  );
}
