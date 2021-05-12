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
      zIndex="-5"
    >
      <Image
        w="full"
        h="full"
        objectFit="cover"
        objectPosition="center"
        src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/46686-4m2RTKwIUV8S.jpg"
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
        fontWeight="bold"
        fontFamily="body"
        textShadow="1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%);"
        pl={['5%', '12%']}
      >
        Random Manga For You
      </Heading>
    </Box>
  )
}
export { Banner }
