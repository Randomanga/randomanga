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
  FormErrorMessage,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { signup } from '../adapters/api';
import useUser from '../hooks/data/useUser';
import { toast } from 'react-toastify';

export default function SignUp() {
  const { register, handleSubmit, formState, watch } = useForm();
  const { user, mutate } = useUser();
  const history = useHistory();
  const password = useRef({});
  password.current = watch('password', '');

  useEffect(() => {
    if (user) history.push('/');
  }, [user]);

  const onSubmit = async (data) => {
    try {
      const res = await signup(data);
      mutate(null, true);
      history.push('/');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error(err.response.data.error);
      } else {
        toast.error('There was an error signing you up. Please try again. ');
      }
    }
  };
  return (
    <Flex minH="60vh" align={'center'} justify={'center'} mt={16}>
      <Stack spacing={8} w="full" maxW={['90%', 'sm']} py={12} px={2}>
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
          <Stack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
            {/* EMAIL INPUT  */}
            <FormControl id="email" isInvalid={formState.errors.email}>
              <Input
                placeholder="Email"
                type="email"
                variant="flushed"
                {...register('email', {
                  required: 'Email is required and must be in a valid format',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Email is not in a valid format',
                  },
                })}
              />
              <FormErrorMessage>
                {formState.errors.email && formState.errors.email.message}
              </FormErrorMessage>
            </FormControl>

            {/* USERNAME INPUT */}
            <FormControl id="username" isInvalid={formState.errors.username}>
              <Input
                type="text"
                placeholder="Username"
                variant="flushed"
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 5,
                    message: 'Username must have at least 5 characters',
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){5,15}[a-zA-Z0-9]$/,
                    message:
                      'Username must be 5 to 15 characters and only contain letters and numbers',
                  },
                })}
              />
              <FormErrorMessage>
                {formState.errors.username && formState.errors.username.message}
              </FormErrorMessage>
            </FormControl>

            {/* PASSWORD INPUT */}
            <FormControl id="password" isInvalid={formState.errors.password}>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                variant="flushed"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters',
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][?=\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,}$/,
                    message:
                      'Password must contain at least one letter and one number',
                  },
                })}
              />
              <FormErrorMessage>
                {formState.errors.password && formState.errors.password.message}
              </FormErrorMessage>
            </FormControl>

            {/* PASSWORD REPEAT  */}
            <FormControl
              id="confirmpassword"
              isInvalid={formState.errors.confirmpassword}
            >
              <Input
                type="password"
                placeholder="Confirm password"
                variant="flushed"
                {...register('confirmpassword', {
                  required: 'Password confirmation is required',
                  validate: (value) =>
                    value === password.current || 'Passwords must match',
                })}
              />
              <FormErrorMessage>
                {formState.errors.confirmpassword &&
                  formState.errors.confirmpassword.message}
              </FormErrorMessage>
            </FormControl>
            {/* TERMS CHECKBOX */}
            <FormControl id="terms" isInvalid={formState.errors.terms}>
              <Checkbox
                size="md"
                {...register('terms', {
                  required: 'You must agree to the terms and conditions',
                })}
              >
                <Link as={RouterLink} to="/terms" target="_blank">
                  You agree to our terms of use
                </Link>
              </Checkbox>
              <FormErrorMessage>
                {formState.errors.terms && formState.errors.terms.message}
              </FormErrorMessage>
            </FormControl>
            {/* CONFIRM */}

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
                onClick={handleSubmit(onSubmit)}
              >
                Sign up
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
