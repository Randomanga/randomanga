import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input } from '../../components';
import { Errors, FormContainer, FormWrapper } from './SignUp.styled';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/auth';
import axios from 'axios';

function SignUp(props) {
    const { login, user } = useContext(AuthContext);
    const { register, errors, handleSubmit, watch } = useForm();
    const history = useHistory();
    const [reqError, setReqError] = useState('');
    const password = useRef({});
    password.current = watch('password', '');

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, []);
    function onSubmit(data) {
        axios
            .post('http://localhost:5000/api/auth/signup', {
                username: data.username,
                email: data.email,
                password: data.password,
            })
            .then((response) => {
                login(response.data);
                history.push('/');
            })

            .catch((error) => {
                setReqError(error.response.data.errors.message);
            });
    }

    return (
        <FormWrapper>
            <FormContainer>
                <h1>Sign Up</h1>
                {Object.keys(errors).length || reqError ? (
                    <Errors>
                        <ul>
                            {errors.email ? (
                                <li>{errors.email.message}</li>
                            ) : null}
                            {errors.username ? (
                                <li>{errors.username.message}</li>
                            ) : null}
                            {errors.password ? (
                                <li>{errors.password.message}</li>
                            ) : null}
                            {errors.password_repeat ? (
                                <li>{errors.password_repeat.message}</li>
                            ) : null}
                            {reqError ? <li>{reqError}</li> : null}
                        </ul>
                    </Errors>
                ) : null}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Email Address"
                        name="email"
                        ref={register({
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    <Input
                        label="Username"
                        name="username"
                        fieldType="text"
                        ref={register({
                            required: 'Username is required',
                            minLength: {
                                value: 4,
                                message:
                                    'Username must be at least 4 characters long',
                            },
                        })}
                    />
                    <Input
                        label="Password"
                        name="password"
                        fieldType="password"
                        ref={register({
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                message:
                                    'Password must contain at least one uppercase letter, one lowercase letter and one number',
                            },
                            minLength: {
                                value: 8,
                                message:
                                    'Password must have at least 8 characters',
                            },
                        })}
                    />
                    <Input
                        label="Confirm password"
                        name="password_repeat"
                        fieldType="password"
                        ref={register({
                            required: 'Confirm your password',
                            validate: (value) =>
                                value === password.current ||
                                'The passwords do not match',
                        })}
                    />
                    <button type="submit">Sign up</button>
                </form>
                <small>
                    Have an account? <Link to="/sign-in">Sign in</Link>
                </small>
            </FormContainer>
        </FormWrapper>
    );
}

export default SignUp;
