import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Link,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
export function Article(props) {
  return (
    <Box
      rounded="lg"
      shadow="md"
      bg={useColorModeValue('white', 'gray.800')}

    >
      <Image
        roundedTop="lg"
        w="full"
        h={'44'}
        fit="cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <Box p={4}>
        <Box>
          <Link
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="lg"
            _hover={{ color: 'gray.600', textDecor: 'underline' }}
          >
            I Built A Successful Blog In One Year
          </Link>
          <Text
            mt={2}
            fontSize="sm"
            noOfLines={2}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </Text>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Link
                mr={2}
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Jone Doe
              </Link>
              <Heading
                mx={1}
                fontSize="xs"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                21 SEP 2015
              </Heading>
            </Flex>
            <Button
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
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
