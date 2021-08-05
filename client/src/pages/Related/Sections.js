import { Box, Heading, Input, Text } from '@chakra-ui/react';
import { Card } from '../../components/Card';
import { MangaAccordion } from '../../components/MangaAccordion';

export const Sections = (props) => {
  return (
    <Box mt={12}>
      <Heading
        as="h2"
        fontSize="3xl"
        px={2}
        fontFamily="body"
        fontWeight="bold"
      >
        Trending
      </Heading>
      <Box px={2}>
        <MangaAccordion>
          {[...Array(10).keys()].map((key) => {
            return (
              <Card
                data={{
                  id: 126161,
                  title: {
                    romaji: 'Ore no Joushi wa Mate ga Dekinai',
                  },
                  description:
                    "Energetic teenager Shuichi Shindo is the lead singer and songwriter for the smash-hit pop band, Bad Luck. He's recently moved in with his older boyfriend, Eiri Yuki, the handsome, sophisticated, and uber-famous romance novelist. Nothing goes smoothly for Shuichi, however. Yuki is inexplicably cold and cruel toward him, more so than usual; due to a rash of publicity appearances on comedy sketch shows, he can't get anyone to take his band seriously; and he's suddenly entered, totally unprepared, into a nationally televised concert with Bad Luck's rival band, Ask.",
                  coverImage: {
                    large:
                      'https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx126161-GPs2Pa537844.jpg',
                    medium:
                      'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx126161-GPs2Pa537844.jpg',
                  },
                  genres: ['Romance'],
                  mediaListEntry: null,
                }}
              />
            );
          })}
        </MangaAccordion>
      </Box>
    </Box>
  );
};
