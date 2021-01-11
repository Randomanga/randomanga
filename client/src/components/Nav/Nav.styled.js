import styled from 'styled-components';

const NavWrapper = styled.div`
    width: 100%;
    position: sticky;
    position: --webkit-sticky;
    top: 0;
    background-color: ${({ theme }) => theme.primaryDark};
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    height: 4rem;
    max-width: 1400px;
    margin: 0 auto;
    img {
        height: 2rem;
        width: auto;
        justify-self: start;
        margin-left: 20px;
        @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
            height: 1.8rem;
        }
    }
`;

export { NavWrapper, Nav };
