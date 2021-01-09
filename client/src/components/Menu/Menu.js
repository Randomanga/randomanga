import { bool } from 'prop-types';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';

import {
    StyledMenu,
    StyledItem,
    Dropdown,
    DropdownTrigger,
    DropdownList,
    SigninButton,
} from './Menu.styled';
import Placeholder from './user-placehold.svg';

const DropdownMenu = ({ user, close }) => {
    const dropdownRef = useRef(null);
    const [isActive, setActive] = useState(false);
    const closeMenuAndDropdown = () => {
        setActive(!isActive);
        close();
    };
    const ref = useOnclickOutside(() => {
        setActive(false);
    });
    return (
        <Dropdown ref={ref}>
            <DropdownTrigger onClick={closeMenuAndDropdown}>
                <img
                    draggable="false"
                    src={user.avatar ? user.avatar : Placeholder}
                    alt="Profile avatar"></img>
                <span>
                    {user.username}
                    <i className="fas fa-caret-down" />{' '}
                </span>
            </DropdownTrigger>
            <DropdownList ref={dropdownRef} active={isActive}>
                <ul>
                    <li>
                        <Link to="/profile" onClick={closeMenuAndDropdown}>
                            <i className="far fa-user"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" onClick={closeMenuAndDropdown}>
                            <i className="fas fa-cogs"></i>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" onClick={closeMenuAndDropdown}>
                            <i className="fas fa-sign-out-alt"></i>
                            Log out
                        </Link>
                    </li>
                </ul>
            </DropdownList>
        </Dropdown>
    );
};
const Menu = ({ open, setOpen }) => {
    const user = {};
    const handleClick = () => {
        setOpen(false);
    };
    const ref = useOnclickOutside(() => {
        setOpen(false);
    });
    return (
        <StyledMenu open={open} ref={ref}>
            <StyledItem>
                <Link to="/" onClick={handleClick}>
                    Home
                </Link>
            </StyledItem>
            <StyledItem>
                <Link to="/recommendations" onClick={handleClick}>
                    Recommendations
                </Link>
            </StyledItem>
            <StyledItem>
                <Link to="/lists" onClick={handleClick}>
                    Top Lists
                </Link>
            </StyledItem>
            <StyledItem>
                {user ? (
                    <DropdownMenu
                        user={{ avatar: '/avatar.jpg', username: 'Wiz1991' }}
                        close={handleClick}
                    />
                ) : (
                    <SigninButton onClick={handleClick}>
                        <Link to="/sign-in">Sign in</Link>
                    </SigninButton>
                )}
            </StyledItem>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
};
export default Menu;
