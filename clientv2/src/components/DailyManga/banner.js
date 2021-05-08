import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Image,
  Heading,
} from '@chakra-ui/react'
import React from 'react'
//https://s4.anilist.co/file/anilistcdn/media/manga/banner/101233-4Q41vXLKrjhe.jpg
const Banner = ({ manga }) => {
  return (
    <Box
      w="full"
      h={useBreakpointValue({
        base: '96',
        md: 'var(--chakra-space-104)',
      })}
      position="relative"
      marginTop="53px"
    >
      <Image
        w="full"
        h="full"
        objectFit="cover"
        objectPosition="center"
        src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/101233-4Q41vXLKrjhe.jpg"
      />
      <Box
        bgGradient="linear(to-t, dark.800,transparent)"
        w="full"
        height="full"
        position={'absolute'}
        top={'0'}
      />
      <Heading
        fontSize={['2xl', '3xl']}
        position="absolute"
        top={16}
        color="white"
        textShadow="1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%);"
        pl={['5%', '10%']}
      >
        Random Manga For You
      </Heading>
    </Box>
  )
}
export { Banner }
