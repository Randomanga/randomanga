import React, { useState } from 'react';
import { NavWrapper, Nav } from './Nav.styled';
import { Burger, Menu } from '../../components';
import logo from './TitleLogo.svg';
function Navigation(props) {
    const [open, setOpen] = useState(false);

    return (
        <NavWrapper>
            <Nav>
                <Logo />
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </Nav>
        </NavWrapper>
    );
}

const Logo = () => {
    return <img src={logo} alt="logo" />;
};

export default Navigation;
