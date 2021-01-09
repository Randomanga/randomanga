import { bool } from 'prop-types';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    StyledMenu,
    StyledItem,
    StyledProfile,
    Dropdown,
    DropdownTrigger,
    DropdownList,
    SigninButton,
} from './Menu.styled';
import Placeholder from './user-placehold.svg';

const DropdownMenu = ({ user }) => {
    const dropdownRef = useRef(null);
    const [isActive, setActive] = useState(false);
    const handleClick = () => setActive(!isActive);
    return (
        <Dropdown>
            <DropdownTrigger onClick={handleClick}>
                <img
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
                        <Link to="/profile">
                            <i class="far fa-user"></i>Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <i class="fas fa-cogs"></i>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <i class="fas fa-sign-out-alt"></i>
                            Log out
                        </Link>
                    </li>
                </ul>
            </DropdownList>
        </Dropdown>
    );
};
const Menu = ({ open }) => {
    const user = {};
    return (
        <StyledMenu open={open}>
            <StyledItem>
                <Link to="/">Home</Link>
            </StyledItem>
            <StyledItem>
                <Link to="/recommendations">Recommendations</Link>
            </StyledItem>
            <StyledItem>
                <Link to="/lists">Top Lists</Link>
            </StyledItem>
            <StyledItem>
                {user ? (
                    <DropdownMenu
                        user={{ avatar: '/avatar.jpg', username: 'Wiz1991' }}
                    />
                ) : <SigninButton>
                    Sign in
                    </SigninButton>}
            </StyledItem>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
};
export default Menu;
