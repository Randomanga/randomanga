import {
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  return (
    <Flex minH="60vh" align={'center'} justify={'center'} mt={16}>
      <Stack spacing={8} mx={'auto'} maxW={'sm'} py={12} px={2}>
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
              <Input placeholder="Email" type="email" variant="flushed" />
            </FormControl>
            <FormControl id="username">
              <Input type="text" placeholder="Username" variant="flushed" />
            </FormControl>
            <FormControl id="password">
              <Input type="password" placeholder="Password" variant="flushed" />
            </FormControl>
            <FormControl id="confirmpassword">
              <Input
                type="password"
                placeholder="Confirm password"
                variant="flushed"
              />
            </FormControl>
            <FormControl id="terms">
              <Checkbox size="md" defaultChecked={true}>
                <Link as={RouterLink} to="/terms" target="_blank">
                  You agree to our terms of use
                </Link>
              </Checkbox>
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
