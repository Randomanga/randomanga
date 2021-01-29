import { bool } from 'prop-types';
import React, { useContext, useRef, useState } from 'react';
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
import { AuthContext } from '../../context/auth';

const DropdownMenu = ({ user, close }) => {
    const { logout } = useContext(AuthContext);
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
                        <a
                            onClick={() => {
                                closeMenuAndDropdown();
                                logout();
                            }}>
                            <i className="fas fa-sign-out-alt"></i>
                            Log out
                        </a>
                    </li>
                </ul>
            </DropdownList>
        </Dropdown>
    );
};
const Menu = ({ open, setOpen }) => {
    const { user } = useContext(AuthContext);
    const handleClick = () => {
        setOpen(false);
    };

    return (
        <StyledMenu open={open} user={user}>
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
            {user ? null : (
                <StyledItem>
                    <Link to="sign-in" onClick={handleClick}>
                        Sign In
                    </Link>
                </StyledItem>
            )}
            <StyledItem>
                {user ? (
                    <DropdownMenu user={user} close={handleClick} />
                ) : (
                    <SigninButton onClick={handleClick}>
                        <Link to="/sign-up">Sign Up</Link>
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
