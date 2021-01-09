import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import styled from 'styled-components';
import useComponentVisible from '../hooks/useComponentVisible';

const NavBarWrapper = styled.section`
    height: 70px;
    background: #262626;
`;
const NavBarContainer = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;
const Brand = styled.div`
    position: absolute;
    padding-left: 20px;
    float: left;
    line-height: 70px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 2rem;
    span {
        color: #10abee;
    }
    a,
    a:visited {
        color: #ffffff;
        text-decoration: none;
    }
    @media only screen and (max-width: 798px) {
        a img {
            max-height: 60px;
            margin-top: 5px;
        }
    }
`;
const Nav = styled.nav`
    float: right;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            float: left;
            position: relative;

            a,
            a:visited {
                display: block;
                padding: 0 20px;
                line-height: 70px;
                background: #262626;
                color: #bbbbbb;
                text-decoration: none;
            }
            a,
            a:visited:hover {
                color: #ffffff;
            }
            a:not(:only-child):after,
            a:visited:not(:only-child):after {
                padding-left: 4px;
                content: ' ▾';
            }
            ul li {
                min-width: 190px;
                a {
                    padding: 15px;
                    line-height: 20px;
                }
            }
        }
    }
    @media only screen and (max-width: 798px) {
        width: 100%;
        padding: 70px 0 15px;
        ul {
            display: none;
            li {
                float: none;
                a {
                    padding: 15px;
                    line-height: 20px;
                    padding-left: 25%;
                }
                ul li a {
                    padding-left: 30%;
                }
            }
        }
    }
`;
const NavMobile = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: #262626;
    height: 70px;
    width: 70px;
    @media only screen and (max-width: 798px) {
        display: block;
    }
`;
const NavToggle = styled.a`
    position: absolute;
    left: 18px;
    top: 22px;
    cursor: pointer;
    padding: 10px 35px 16px 0px;

    span,
    span:before,
    span:after {
        cursor: pointer;
        border-radius: 1px;
        height: 5px;
        width: 35px;
        background: #ffffff;
        position: absolute;
        display: block;
        content: '';
        transition: all 300ms ease-in-out;
    }
    span:before {
        top: -10px;
    }
    span:after {
        bottom: -10px;
    }
    .active span {
        background-color: transparent;
    }
    .active span:before,
    .active span:after {
        top: 0;
    }
    .active span:before {
        transform: rotate(45deg);
    }
    .active span:after {
        transform: rotate(-45deg);
    }
`;
const NavList = styled.ul`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    @media screen and (min-width: 799px) {
        display: block !important;
    }
`;
const NavDropdown = styled.ul`
    position: absolute;
    display: none;
    z-index: 1;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    @media only screen and (max-width: 798px) {
        position: static;
    }
`;

const Account = styled.a`
    display: flex;
    align-items: center;
    img {
        height: 2rem;
        width: 2rem;
        object-fit: contain;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
    }
`;
const Button = styled.button`
    background-color: #10abee;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid #10abee;
    outline: 0;
    color: #f5f5f5;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
    -ms-border-radius: 0.5rem;
    -o-border-radius: 0.5rem;
    width: 4.5rem;
    :hover {
        background-color: transparent;
        color: #ffffff;
    }
`;

function NavItem(props) {
    return (
        <li>
            <Link to={props.href} onClick={props.handleClick}>
                {props.icon}
                {props.page}
            </Link>
        </li>
    );
}

function UserDropdown(props) {
    let { user } = props;
    return (
        <Account>
            {user.avatar ? (
                <img src={user.avatar} alt="Profile picture" />
            ) : (
                <img
                    alt="Profile placeholder"
                    src="https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-286x300.jpg"
                />
            )}
            <span>{user.username}</span>
        </Account>
    );
}

function NavBar(props) {
    const context = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible,
    } = useComponentVisible(false);

    return (
        <NavBarWrapper>
            <NavBarContainer>
                <Brand>
                    <Link to="/">
                        Rando<span>Manga</span>
                    </Link>
                </Brand>
                <Nav>
                    <NavMobile>
                        <NavToggle
                            id="nav-toggle"
                            className={isComponentVisible ? 'active' : null}
                            ref={ref}
                            onClick={() => {
                                setIsComponentVisible(!isComponentVisible);
                            }}>
                            <span></span>
                        </NavToggle>
                    </NavMobile>
                    <NavList ref={ref} visible={isComponentVisible}>
                        <NavItem href="/" page="Home" />
                        <NavItem
                            href="/recommendations"
                            page="Recommendations"
                        />
                        <NavItem href="/lists" page="Top lists" />
                        <li>
                            {context.user ? (
                                <UserDropdown user={context.user} />
                            ) : (
                                <NavLink to="/sign-in" className="sign-in">
                                    <Button>Sign in</Button>
                                </NavLink>
                            )}
                            {context.user ? (
                                <NavDropdown>
                                    <NavItem
                                        href="/profile"
                                        page="Profile"
                                        icon={
                                            <i className="fa-fw fas fa-user"></i>
                                        }
                                    />
                                    <NavItem
                                        href="/"
                                        page="Logout"
                                        icon={
                                            <i className="fa-fw fas fa-sign-out-alt"></i>
                                        }
                                        handleClick={() => {
                                            context.logout();
                                        }}
                                    />
                                </NavDropdown>
                            ) : null}
                        </li>
                    </NavList>
                </Nav>
            </NavBarContainer>
        </NavBarWrapper>
    );
}
export default NavBar;
