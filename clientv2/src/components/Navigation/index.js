import { Flex } from '@chakra-ui/layout';
import { useRef, useState } from 'react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import { Box } from '@chakra-ui/react';
import { useOutsideClick } from '@chakra-ui/react';
import { MenuLinks } from './MenuItems';
const NavbarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            mx="auto"
            justify="space-between"
            wrap="wrap"
            w="100%"
            px={[2, 4, 8]}
            pr={['3', '2', 0, 0]}
            py="1"
            color={['white', 'white', 'primary.700', 'primary.700']}
            {...props}>
            {children}
        </Flex>
    );
};

export const Navigation = (props) => {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    useOutsideClick({
        ref: ref,
        handler: () => setIsOpen(false),
    });
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Box bg="dark.400" boxShadow="lg" ref={ref}>
            <NavbarContainer maxW="7xl">
                <Logo
                    color={['white', 'white', 'primary.500', 'primary.500']}
                />
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <MenuLinks isOpen={isOpen} toggle={toggle} />
            </NavbarContainer>
        </Box>
    );
};
