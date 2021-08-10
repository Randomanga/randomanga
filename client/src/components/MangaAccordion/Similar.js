import {
  HStack,
  Button,
  Box,
  Text,
  Heading,
  Divider,
  Grid,
  Flex,
  Icon,
  IconButton,
  Skeleton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaList, FaThList, FaBars } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';
import useRelated from '../../hooks/data/useRelated';
import { Card } from '../Card';
import { ListCard } from '../ListCard';

export const Similar = ({ id }) => {
  const [cardView, setCardView] = useState(
    localStorage.getItem('view') === 'card'
  );
  const onViewChange = (flag) => {
    setCardView(flag);
    localStorage.setItem('view', flag ? 'card' : 'list');
  };
  const { data, isLoading, error } = useRelated(id);

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
            onClick={() => onViewChange(true)}
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
            onClick={() => onViewChange(false)}
          />
        </HStack>
      </Flex>
      <Divider bg="orange" my={2} py={'1px'} />
      <Grid mt={5} gap={4}>
        {data?.map((manga) =>
          cardView ? (
            <Card data={manga} key={manga.id} />
          ) : (
            <ListCard data={manga} key={manga.id} />
          )
        )}
        {error && <Text textAlign="center">No similar manga found</Text>}
        <Skeletons isLoading={isLoading} cardView={cardView} />
      </Grid>
      <Button w="full" size={'sm'} mt={2} mb={6} hidden>
        Load more
      </Button>
    </Box>
  );
};

const Skeletons = ({ isLoading, cardView }) => {
  return (
    <>
      {isLoading && cardView ? <Skeleton w="full" h="40" rounded="md" /> : null}
      {isLoading && cardView ? <Skeleton w="full" h="40" rounded="md" /> : null}
      {isLoading && !cardView ? (
        <Skeleton w="full" h="12" rounded="md" />
      ) : null}
      {isLoading && !cardView ? (
        <Skeleton w="full" h="12" rounded="md" />
      ) : null}
    </>
  );
};
