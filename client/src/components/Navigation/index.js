import { Flex } from '@chakra-ui/layout';
import { useEffect, useRef, useState } from 'react';
import Logo from '../Logo';
import MenuToggle from './MenuToggle';
import { Box } from '@chakra-ui/react';
import { useOutsideClick } from '@chakra-ui/react';
import { MenuLinks } from './MenuItems';


export const Navigation = (props) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [lastPosition , setLastPosition] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  })
  function handleScroll(){
    let scroll = window.scrollY
    if(scroll < 300 ) return
    setVisible(scroll <= lastPosition)
    setLastPosition(scroll)
  }
  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  });
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box
      bg="dark.400"
      boxShadow="lg"
      position="fixed"
      top="0"
      w="full"
      zIndex="banner"
      ref={ref}
      sx={isVisible ? navbarShown : navbarHidden}
    >
      <NavbarContainer maxW="7xl">
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} toggle={toggle} />
      </NavbarContainer>
    </Box>
  );
};

const NavbarContainer = ({ children, ...props }) => {

  return (
    <Flex
      as="nav"
      align="center"
      mx="auto"
      justify={['space-between', 'space-between', 'space-around']}
      h="full"
      wrap="wrap"
      w="100%"
      px={[2, 4, 8]}
      pr={['3', '2', 0, 0]}
      py={['1', '3']}
      color={['white', 'white', 'primary.700', 'primary.700']}

      {...props}
    >
      {children}
    </Flex>
  );
};



let navbarShown = {
  opacity: 1,
  transform: "translateY(0)",
  transition: "all 0.3s ease-in-out",
}
let navbarHidden = {
  opacity: 0,
  transform: "translateY(-100%)",
  transition: "all 0.3s ease-in-out",
}