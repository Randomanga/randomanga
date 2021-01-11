import { useState } from 'react';
import { NavWrapper, Nav } from './Nav.styled';
import { Burger, Menu } from '../../components';
import logo from './TitleLogo.svg';
import { Link } from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';

function Navigation(props) {
    const [open, setOpen] = useState(false);
    const ref = useOnclickOutside(() => {
        setOpen(false);
    });
    return (
        <NavWrapper ref={ref}>
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
    return <img draggable="false" src={logo} alt="logo" />;
};

export default Navigation;
