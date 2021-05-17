import {
  useBreakpointValue,
  Box,
  Image,
  Heading,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
//https://s4.anilist.co/file/anilistcdn/media/manga/banner/101233-4Q41vXLKrjhe.jpg
const Banner = ({ manga }) => {
  const { data, error } = useSWR('http://192.168.1.242:5000/api/manga/daily', {
    refreshInterval: 0,
  });
  return (
    <Box
      w="full"
      h={useBreakpointValue({
        base: '96',
        md: 'var(--chakra-space-104)',
      })}
      position="relative"
      marginTop={['44px', '61px']}
      zIndex="-5"
    >
      <Skeleton
        h={useBreakpointValue({
          base: '96',
          md: 'var(--chakra-space-104)',
        })}
        isLoaded={data}
      >
        <Image
          w="full"
          h="full"
          objectFit="cover"
          alt="daily manga banner"
          loading="lazy"
          objectPosition="center"
          src={data?.manga.banner}
        />
      </Skeleton>
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
        {data && 'Random Manga For You'}
      </Heading>
    </Box>
  );
};
export { Banner };
