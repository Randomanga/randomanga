import styled from 'styled-components';

//Navigation links
const StyledMenu = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-self: end;
    align-items: center;
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
        background-color: #252525;
        display: flex;
        flex-direction: column;
        position: fixed;
        justify-content: start;
        align-items: center;
        margin: 0;
        padding: 0;
        top: 4rem;
        width: 100%;
        z-index: -1;
        height: calc(60vh - 4rem);
        transition: transform 0.5s ease-in-out;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateY(-120%) !important'};
        text-align: center;
        li:last-child {
            margin-top: auto;
            margin-bottom: 1rem;
        }
    }
`;
const StyledItem = styled.li`
    a {
        color: ${({ theme }) => theme.primaryLight};
        font-size: 1rem;
        font-weight: 400;
        text-decoration: none;
        text-align: center;
        vertical-align: middle;
        transition: color 0.3s ease-out;
        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
        a {
            font-size: 1.2rem;
        }
        padding: 15px;
        :first-child {
            margin-top: 1rem;
        }
    }
`;
/* the entire container */
const Dropdown = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
// Part containing image and username
const DropdownTrigger = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: none;
    vertical-align: middle;
    span {
        vertical-align: middle;
        font-size: 1rem;
        margin: 0 10px;
    }
    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 5px;
    }
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`;
//The dropdown list
const DropdownList = styled.nav`
    position: absolute;
    z-index: 100;
    top: 4rem;
    right: 0;
    width: 150px;
    border-radius: 10px;
    color: #ffffff;
    background-color: ${({ theme }) => theme.secondaryDark};
    opacity: ${({ active }) => (active ? '1' : '0')};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transform: ${({ active }) =>
        active ? 'translateY(-20px)' : 'translateY(0)'};
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            margin: 0 10px 0 10px;
            i {
                margin-right: 5px;
                width: 1.1rem;
            }
            a {
                text-align: left;
                padding: 9px 5px;
                display: block;
            }
            :nth-child(2) {
                margin-bottom: 7px;
                border-bottom: 1px solid rgba(199, 199, 199, 0.6);
            }
        }
    }
    /* Show only the list on mobile */
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
        visibility: visible;
        position: relative;
        opacity: 1;
        transform: translateY(0);
        top: 1rem;
        background-color: transparent;
        a {
            display: inline-block !important;
            text-align: center;
        }
    }
`;
const SigninButton = styled.button`
    width: 7rem;
    padding: 4px 1rem;
    font-size: 1rem;
    background-color: #10abee;
    border: 2px solid #10abee;
    border-radius: 8px;
    outline: 0;
    color: #ffffff;
    &:hover {
        background-color: transparent;
    }
`;

export {
    StyledMenu,
    StyledItem,
    Dropdown,
    DropdownTrigger,
    DropdownList,
    SigninButton,
};
