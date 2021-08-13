import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
  Image,
  Checkbox,
  RadioGroup,
  ButtonGroup,
  IconButton,
  Radio,
  useEditableControls,
  VStack,
  FormErrorMessage,
  HStack,
} from '@chakra-ui/react';
import { FaTimes, FaUser } from 'react-icons/fa';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import useUser from '../hooks/data/useUser';
import Dropzone, { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Redirect, useHistory } from 'react-router-dom';
import { getAlIdentity, removeAlAuth } from '../adapters/api';
const EditableControl = (props) => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  );
};

export function Settings() {
  const { user } = useUser();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();
  const [alIdentity, setAlIdentity] = useState();
  const history = useHistory();
  console.log(user);
  const fetchAlIdentity = async () => {
    if (user.alToken) return;
    const { data } = await getAlIdentity();
    setAlIdentity(data.identity);
  };

  useEffect(() => {
    setUsername(user?.username);
    fetchAlIdentity();
  }, [user]);
  const onUsernameChange = (change) => setUsername(change);
  const onEmailChange = (change) => setEmail(change);
  const onDescChange = (e) => setDescription(e.target.value);

  const [uploadedImage, setUploadedImage] = useState();
  const onImageDropAccepted = (acceptedFiles, fileRejections) => {
    setUploadedImage(acceptedFiles[0]);
    console.log(uploadedImage);
  };
  const onImageDropRejected = () => {
    toast.error('Max file size is 2MB. ');
  };

  return (
    <Box mt="24" w={'full'} maxW="md" mx="auto" p={5}>
      <Heading py={5} fontFamily="body">
        Settings
      </Heading>
      <VStack bg="gray.800" p={5} spacing="5">
        <FormControl>
          <FormLabel color="gray.400" fontSize="md">
            Username:
          </FormLabel>
          <Editable
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            fontSize="md"
            value={username}
            onChange={onUsernameChange}
            selectAllOnFocus={false}
          >
            <EditablePreview />
            <EditableInput mr="3" as="input" />
            <EditableControl />
          </Editable>
        </FormControl>
        {/* 
        Shou
        <FormControl>
          <FormLabel color="gray.400" fontSize="md">
            Email:
          </FormLabel>
          <Editable
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            fontSize="md"
            value={email}
            onChange={onEmailChange}
          >
            <EditablePreview />
            <EditableInput mr="3" as="input" />
            <EditableControl />
          </Editable>
        </FormControl> */}
        <FormControl>
          <FormLabel color="gray.400">About: </FormLabel>
          <Textarea
            value={description}
            onChange={onDescChange}
            placeholder="A short description about yourself."
            maxLength={200}
          />
        </FormControl>

        <FormControl>
          <FormLabel color="gray.400">Profile avatar:</FormLabel>
          <Flex alignItems="center" mt={1} w="full" maxH="32">
            <Image
              maxW="100px"
              height="32"
              objectFit="cover"
              loading="lazy"
              fallbackSrc="https://via.placeholder.com/90x120"
              src={user?.avatar}
              css={{
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
            <Dropzone
              onDropAccepted={onImageDropAccepted}
              onDropRejected={onImageDropRejected}
              maxSize={2097152}
              multiple={false}
              accept="image/*"
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  border="dashed"
                  borderWidth="medium"
                  borderColor={'gray.500'}
                  h="32"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  outline="none"
                  mx="2"
                  p={3}
                >
                  <Box {...getRootProps()}>
                    <input {...getInputProps()} name="avatar" />
                    <Box
                      fontSize="sm"
                      h="32"
                      w="full"
                      textAlign="center"
                      display="grid"
                      placeContent="center"
                    >
                      Drag and drop an image here or click to select. Max(2MB)
                    </Box>
                  </Box>
                </Box>
              )}
            </Dropzone>
          </Flex>
        </FormControl>

        <FormControl>
          <FormLabel color="gray.400">Anilist</FormLabel>
          <HStack>
            <Button
              bg={user.alToken ? 'green.500' : 'blue.400'}
              size="sm"
              _hover={{
                bg: user.alToken ? 'green.600' : 'blue.500',
              }}
              _focus
              _active
              disabled={user.alToken !== null}
              as="a"
              href={`https://anilist.co/api/v2/oauth/authorize?client_id=6064&redirect_uri=http://192.168.178.66:5000/api/oauth/token&response_type=code&state=${alIdentity}`}
            >
              {user.alToken ? 'Authorized' : 'Authorize'}
            </Button>
            {/* {user.alToken ? (
              <IconButton
                size="sm"
                aria-label="Log out of anilist"
                icon={<FaTimes />}
                onClick={removeToken}
              />
            ) : null} */}
          </HStack>
          <FormHelperText fontSize="xs">
            Please authorize if you wish to save manga you want to read for
            later directly from randomanga.
          </FormHelperText>
        </FormControl>
        <Button
          size="sm"
          bg="blue.400"
          _hover={{
            bg: 'blue.500',
          }}
          _focus
          _active
        >
          Save changes
        </Button>
      </VStack>
    </Box>
  );
}
{
  /* <Flex alignItems="center" mt={1}>
        <Avatar
          boxSize={12}
          bg={useColorModeValue('gray.100', 'gray.800')}
          icon={
            <Icon
              as={FaUser}
              boxSize={9}
              mt={3}
              rounded="full"
              color={useColorModeValue('gray.300', 'gray.700')}
            />
          }
        />
        <Button
          type="button"
          ml={5}
          variant="outline"
          size="sm"
          fontWeight="medium"
          _focus={{ shadow: 'none' }}
        >
          Change
        </Button>
      </Flex> */
}
