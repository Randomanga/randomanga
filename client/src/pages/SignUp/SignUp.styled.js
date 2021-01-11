import styled from 'styled-components';
const FormWrapper = styled.div`
    max-width: 400px;
    
    margin: 60px auto;
    flex-direction: column;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    background-color: ${({ theme }) => theme.foreground};
    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
        width: 90vw;
    }
`;
const FormContainer = styled.div`
    padding: 2rem;
    small a {
        color: lightblue;
    }
`;

export { FormContainer, FormWrapper };
