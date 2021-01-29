import React, { useState, useContext, useEffect } from 'react';
import { Input } from '../../components';
import { Errors, FormContainer, FormWrapper } from '../SignUp/SignUp.styled';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../context/auth';
import { useHistory } from 'react-router-dom';

function SignIn(props) {
    const { register, errors, handleSubmit } = useForm();
    const [reqError, setReqError] = useState('');
    const { user, login } = useContext(AuthContext);
    const history = useHistory();
    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, []);
    function onSubmit(data) {
        axios
            .post('http://localhost:5000/api/auth/signin', {
                username: data.username,
                password: data.password,
            })
            .then((response) => {
                login(response.data);
                history.push('/');
            })

            .catch((error) => {
                console.log(error.response);
                setReqError(error.response.data.errors.message);
            });
    }
    return (
        <FormWrapper>
            <FormContainer>
                <h1>Sign In</h1>
                {Object.keys(errors).length || reqError ? (
                    <Errors>
                        <ul>
                            {errors.username ? (
                                <li>{errors.username.message}</li>
                            ) : null}
                            {errors.password ? (
                                <li>{errors.password.message}</li>
                            ) : null}
                            {reqError ? <li>{reqError}</li> : null}
                        </ul>
                    </Errors>
                ) : null}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Username"
                        name="username"
                        fieldType="text"
                        ref={register({
                            required: 'Username is required',
                        })}
                    />
                    <Input
                        label="Password"
                        name="password"
                        fieldType="password"
                        ref={register({
                            required: 'Password is required',
                        })}
                    />

                    <button type="submit">Sign in</button>
                </form>
            </FormContainer>
        </FormWrapper>
    );
}
export default SignIn;
