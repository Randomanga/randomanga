import styled from 'styled-components';
const FormWrapper = styled.div`
    max-width: 400px;
    box-shadow:  0 0 25px rgba(0, 0, 0, 0.2);
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
        color: #34d5eb;
    }
    button {
        width: 6rem;
        background-color: #10abee;
        outline: 0;
        border: 0;
        color: #ffffff;
        padding: 8px;
        border-radius: 5px;
        margin-bottom: 5px;
        :hover{
            background-color: #0d8abf;
        }
    }
`;
const Errors = styled.div`
    width: 100%;
    background-color: #10abee;
    height: auto;
    text-align: left;
    padding: 1rem;
    margin: 10px 0 10px 0;
    border-radius: 1rem;
    ul {
        padding: 0 0 0 10px;
        margin: 0;
    }
`;
export { FormContainer, FormWrapper, Errors };
