import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function SignUp() {
  return (
    <Flex minH="100vh" align={'center'} justify={'center'} mt={16}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={2}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} fontFamily="body">
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'lg'}
          p={8}
          px={5}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={2} pt={5} alignItems="center">
              <Button
                bg={'blue.400'}
                w={'full'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                _active={{
                  bg: 'blue.400',
                }}
                _focus={{
                  border: 'none',
                }}
              >
                Sign in
              </Button>
              <Link as={RouterLink} to="/login">
                <Text
                  as="span"
                  fontSize="sm"
                  color="gray.400"
                  _hover={{ color: 'white' }}
                >
                  Already have an account? Sign in
                </Text>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
