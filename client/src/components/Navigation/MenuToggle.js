import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaTimes, FaBars } from 'react-icons/fa';
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <FaTimes size="24" /> : <FaBars size="24" />}
    </Box>
  );
};
export default MenuToggle;
