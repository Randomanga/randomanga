import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Avatar,
  HStack,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaCog, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import useUser from '../../hooks/data/useUser';
import { logout } from '../../adapters/api';

import { Link } from 'react-router-dom';
const Item = ({ icon: Icon, placeholder, href, close, ...rest }) => {
  return (
    <Link to={href} onClick={() => close()} {...rest}>
      <MenuItem
        icon={<Icon size="15" />}
        _hover={{ bg: 'gray.700', color: 'white' }}
        _active={{ bg: 'gray.700' }}
        _focus={{ bg: 'gray.700' }}
      >
        {placeholder}
      </MenuItem>
    </Link>
  );
};

export const UserDropdown = ({ closeNavigation }) => {
  const { user, mutate, isLoading } = useUser();
  const onLogout = async () => {
    await logout();
    mutate(null);
  };
  return (
    <Menu closeOnBlur={true} closeOnSelect={true} autoSelect={false}>
      <MenuButton
        as={Button}
        background="transparent"
        color={'gray.400'}
        _focus={{ bg: 'transparent' }}
        _hover={{ bg: 'transparent', color: 'white' }}
        _active={{ bg: 'transparent' }}
      >
        <HStack spacing={1}>
          <Avatar size={'sm'} src={user.avatar} loading="lazy" />
          <Text fontSize="sm" fontWeight="semibold" fontFamily="sans-serif">
            {user.username}
          </Text>
          <ChevronDownIcon fontSize={'xl'} />
        </HStack>
      </MenuButton>
      <MenuList
        bg="gray.800"
        color="gray.400"
        border="none"
        fontSize={'0.9rem'}
        fontWeight={'normal'}
      >
        <Item
          icon={FaUserAlt}
          placeholder="Profile"
          close={closeNavigation}
          href={`/profile/${user._id}`}
        />
        <Item
          icon={FaCog}
          placeholder="Settings"
          close={closeNavigation}
          href="/settings"
        />
        <MenuDivider mx="2" />
        <Item
          icon={FaSignOutAlt}
          placeholder="Log out"
          close={closeNavigation}
          onClick={() => {
            closeNavigation();
            onLogout();
          }}
        />
      </MenuList>
    </Menu>
  );
};

//https://s4.anilist.co/file/anilistcdn/user/avatar/large/b236233-BJIUIZ9HxHd1.jpg
