import styled from 'styled-components';

const InputWrapper = styled.div`
    position: relative;
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.secondaryDark};
    border-radius: ${({ rounded }) => (rounded ? '30px' : '5px')};
    margin-bottom: 1rem;
`;
const InputLabel = styled.label`
    display: flex;
    padding-left: 1.5rem;
    width: 100%;
    left: 0;
    height: 100%;
    position: absolute;
    margin-bottom: 3px;
    text-transform: uppercase;
    top: 0;
    transition: 0.3s;
    font-weight: 600;
    align-items: center;
    letter-spacing: 1px;
    z-index: 2;
    font-size: inherit;
`;
const InputField = styled.input`
    outline: 0;
    border: none;
    width: 100%;
    padding: 15px 7px 10px 15px;
    color: ${({ theme }) => theme.secondaryLight};
    background-color: transparent;
    text-align: left;
    position: relative;
    z-index: 3;
    :focus + ${InputLabel}, :not(:placeholder-shown) + ${InputLabel} {
        transform: translateY(-0.7rem);
        padding-left: 1rem;
        font-size: 0.7rem;
        color: ${({ theme }) => theme.primaryHover};
    }
`;

export { InputWrapper, InputField, InputLabel };
