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
  FormErrorMessage,
  toast,
} from '@chakra-ui/react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../adapters/api';
import axios from 'axios';
import useUser from '../hooks/data/useUser';

export default function Login() {
  const { register, handleSubmit, formState } = useForm();
  const { mutate } = useUser();
  const history = useHistory();
  const onSubmit = async (data) => {
    try {
      const res = await login(data);
      mutate(res, true);
      history.push('/');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };
  return (
    <Flex minH={'60vh'} align={'center'} justify={'center'} mt={16}>
      <Stack spacing={8} w="full" maxW={['90%', 'sm']} py={12}>
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
          <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
            <FormControl isInvalid={formState.errors.username}>
              <Input
                autoFocus
                variant="flushed"
                placeholder="Username"
                type="text"
                {...register('username', {
                  required: 'Username is required',
                })}
              />
              <FormErrorMessage>
                {formState.errors.username && formState.errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formState.errors.password}>
              <Input
                variant="flushed"
                placeholder="Password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <FormErrorMessage>
                {formState.errors.password && formState.errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox {...register('rememberMe')}>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Stack spacing={2} alignItems="center">
                <Button
                  type="submit"
                  disabled={formState.isSubmitting}
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
