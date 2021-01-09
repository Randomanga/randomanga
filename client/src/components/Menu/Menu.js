import { bool } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu, StyledItem } from './Menu.styled';

const Menu = ({ open }) => {
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
        </StyledMenu>
    );
};
Menu.propTypes = {
    open: bool.isRequired,
};
export default Menu;
