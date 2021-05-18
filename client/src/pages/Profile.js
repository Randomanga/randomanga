import {
  Avatar,
  Box,
  VStack,
  Text,
  HStack,
  Heading,
  Image,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  SimpleGrid,
  Link,
  Button,
} from '@chakra-ui/react';
import useUser from '../hooks/data/useUser';
import { FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../adapters/api';

export const Profile = (props) => {
  const { user, mutate } = useUser();

  const onLogout = async () => {
    await logout();
    mutate(null, true);
  };

  return (
    <Box minH="70vh" maxW="3xl" mx="auto" my={'48'} px={3}>
      <Box bg="gray.800" w={['full', 'sm']} mx="auto" boxShadow="lg" p={6}>
        <Box mt={'-24'} pb={'4'}>
          <Image
            w="32"
            h="36"
            loading="lazy"
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/128x144"
            src={'https://source.unsplash.com/random'}
          />
          <Text pt={2} fontWeight="bold" color="white">
            {user?.username}
          </Text>
          <Text color="gray.400" fontSize="sm">
            {`Joined: ${new Date(user?.createdAt).toDateString()}`}
          </Text>
        </Box>
        <Divider />
        <Text color="gray.400" p={'1'} fontSize="sm">
          I am an avid comic lover who wants to share his favourite comics with
          others. Or some other weeb description.
        </Text>
        <Divider />
        <HStack justifyContent="space-between" p={'2'}>
          <Box textAlign="center">
            <Text color="red.400">Top lists:</Text>
            <Text color="gray.400">320</Text>
          </Box>
          <Box textAlign="center">
            <Text color="red.400">Random lists:</Text>
            <Text color="gray.400">320</Text>
          </Box>
        </HStack>
      </Box>
      <Box bg="gray.800" w="md" mx="auto" boxShadow="lg" mt={20} p={'6'}>
        <Heading fontFamily="body" fontSize="xl" pb="2">
          Top lists
        </Heading>
        <Divider />
        <List py="2">
          <Link>
            <ListItem>Consectetur adipiscing elit</ListItem>
          </Link>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </List>
      </Box>
      {user && (
        <VStack p={5} alignItems="center">
          <Button
            bg="red.500"
            leftIcon={<FaSignOutAlt />}
            _active
            _focus
            _hover={{
              bgColor: 'red.600',
            }}
            onClick={onLogout}
          >
            Log out
          </Button>
        </VStack>
      )}
    </Box>
  );
};
