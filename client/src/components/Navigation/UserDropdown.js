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
import { Link } from 'react-router-dom';
const Item = ({ icon: Icon, placeholder, href, close }) => {
  return (
    <Link to={href} onClick={() => close()}>
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
          <Avatar
            size={'sm'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Text fontSize="sm" fontWeight="semibold" fontFamily="sans-serif">
            Wiz1991
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
          href="/profile"
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
        />
      </MenuList>
    </Menu>
  );
};

//https://s4.anilist.co/file/anilistcdn/user/avatar/large/b236233-BJIUIZ9HxHd1.jpg
