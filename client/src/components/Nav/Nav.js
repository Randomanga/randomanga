import  { useState } from 'react';
import { NavWrapper, Nav } from './Nav.styled';
import { Burger, Menu } from '../../components';
import logo from './TitleLogo.svg';
import { Link } from 'react-router-dom';
function Navigation(props) {
    const [open, setOpen] = useState(false);

    return (
        <NavWrapper>
            <Nav>
                <Link to="/">
                    <Logo />
                </Link>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </Nav>
        </NavWrapper>
    );
}

const Logo = () => {
    return (
        <img
            draggable="false"
            src={logo}
            alt="logo"
        />
    );
};

export default Navigation;
