import {
  Box,
  Heading,
  Flex,
  HStack,
  Button,
  useColorModeValue,
  Image,
  Text,
  Link,
  Badge,
  useMediaQuery,
  IconButton,
} from '@chakra-ui/react';
import { FaHeart, FaPlusSquare } from 'react-icons/fa';
import TagBadge from '../../../components/TagBadge';
export function RankingCard(props) {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  return (
    <Box display={{ md: 'flex' }} maxW={{ lg: '2xl' }} rounded={{ lg: 'lg' }}>
      <Box w={{ md: '30%' }} mr={{ md: 4 }}>
        <Box
          h="64"
          maxH={{ base: 64, md: '64' }}
          rounded={{ lg: 'lg' }}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
          }}
        ></Box>
        {isDesktop && (
          <HStack py={2} align="center">
            <Button
              fontWeight="semibold"
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              _hover={{ bg: 'gray.800' }}
              _focus={{ borderColor: '' }}
              leftIcon={<FaPlusSquare />}
              mr={2}
            >
              Add to list
            </Button>
            <Button
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              _focus={{ borderColor: '' }}
              _hover={{ bg: 'gray.800' }}
              leftIcon={<FaHeart size={20} />}
              variant="regular"
            >
              39
            </Button>
          </HStack>
        )}
      </Box>

      <Box py={2} mt={2} maxW={{ base: 'xl', lg: '5xl' }} w={{ md: '60%' }}>
        <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
          <Box bg="gray.800" p={2} mr={2} display="inline">
            10.
          </Box>
          Naruto
        </Heading>
        <HStack my={4}>
          <Badge
            rounded="full"
            px="2"
            fontSize="xs"
            textTransform="capitalize"
            color="white"
            bg="gray.700"
          >
            Action
          </Badge>
        </HStack>
        <Text mt={4} color={useColorModeValue('gray.600', 'gray.400')}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus
          enim expedita aperiam mollitia iure consectetur dicta tenetur, porro
          consequuntur saepe accusantium consequatur. Occaecat laborum fugiat ea
          ea qui reprehenderit anim ea. Do minim anim tempor quis velit sint
          Lorem quis laboris cillum dolore velit esse. Eiusmod fugiat consequat
          ullamco est. Velit officia consequat et cillum labore. Anim est
          proident elit et minim aute quis irure ex ea culpa aute aliqua nisi.
          Dolor ut ullamco labore sit aliquip id amet dolor velit.
        </Text>
        {!isDesktop && (
          <Box mt={8}>
            <Button
              fontWeight="semibold"
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              _hover={{ bg: 'gray.800' }}
              _focus={{ borderColor: '' }}
              leftIcon={<FaPlusSquare />}
              mr={2}
            >
              Add to list
            </Button>
            <Button
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              _focus={{ borderColor: '' }}
              _hover={{ bg: 'gray.800' }}
              leftIcon={<FaHeart size={20} />}
              variant="regular"
            >
              39
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
