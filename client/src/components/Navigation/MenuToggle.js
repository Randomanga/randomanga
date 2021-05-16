import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaTimes, FaBars } from 'react-icons/fa';
const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
            {isOpen ? <FaTimes size="27" /> : <FaBars size="27" />}
        </Box>
    );
};
export default MenuToggle;
