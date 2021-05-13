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
export default function Login() {
  return (
    <Flex minH={'60vh'} align={'center'} justify={'center'} mt={16}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={2}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} fontFamily="body">
            Sign in
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
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox defaultChecked={true}>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Stack spacing={2} alignItems="center">
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
                <Link as={RouterLink} to="/sign-up">
                  <Text
                    as="span"
                    fontSize="sm"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                  >
                    Dont have an account? Sign up
                  </Text>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
