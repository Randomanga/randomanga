import styled from 'styled-components';

const StyledMenu = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-self: end;
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
        background-color: #252525;
        display: flex;
        flex-direction: column;
        position: fixed;
        justify-content: start;
        top: 5rem;
        width: 100%;
        height: calc(100vh - 5rem);
        transition: transform 0.7s ease-in-out;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(-100%) !important'};
        text-align: center;
        overflow: hidden;
    }
`;
const StyledItem = styled.li`
    a {
        color: ${({ theme }) => theme.primaryLight};
        font-size: 1rem;
        font-weight: 400;
        text-decoration: none;
        transition: color 0.3s ease-out;
        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
        padding: 15px;
        :first-child {
            margin-top: 1rem;
        }
    }
`;

export { StyledMenu, StyledItem };
