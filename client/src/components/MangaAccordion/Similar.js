import {
  HStack,
  Box,
  Heading,
  Divider,
  Grid,
  Flex,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaList, FaThList, FaBars } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';
import { Card } from '../Card';
import { ListCard } from '../ListCard';

export const Similar = ({ id }) => {
  const [cardView, setCardView] = useState(false);
  const [similar, setSimilar] = useState([1]);
  useEffect(() => {}, []);

  return (
    <Box mt={4}>
      <Flex>
        <Heading
          flex="1"
          as="h4"
          fontSize="lg"
          fontWeight="bold"
          fontFamily="body"
        >
          Similar manga
        </Heading>
        <HStack spacing={'0'}>
          <IconButton
            icon={<FaBars />}
            bg="transparent"
            size="lg"
            color={cardView ? 'white' : 'whiteAlpha.600'}
            _focus
            _hover={{
              color: 'gray.100',
            }}
            _active
            height="0"
            minW={8}
            onClick={() => setCardView(true)}
          />
          <IconButton
            icon={<FaThList />}
            bg="transparent"
            size="lg"
            color={cardView ? 'whiteAlpha.600' : 'white'}
            _focus
            _hover={{
              color: 'gray.100',
            }}
            _active
            height="0"
            minW={8}
            onClick={() => setCardView(false)}
          />
        </HStack>
      </Flex>
      <Divider bg="orange" my={2} py={'1px'} />
      <Grid mt={5} gap={4}>
        {similar.map(({ id, title, url }) =>
          cardView ? (
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
          ) : (
            <ListCard />
          )
        )}
      </Grid>
    </Box>
  );
};
