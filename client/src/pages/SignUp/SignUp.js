import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components';
import { Errors, FormContainer, FormWrapper } from './SignUp.styled';
import { useForm } from 'react-hook-form';

function SignUp(props) {
    const { register, errors, handleSubmit, watch } = useForm();
    const password = useRef({});
    password.current = watch('password', '');

    function onSubmit(data) {}

    return (
        <FormWrapper>
            <FormContainer>
                <h1>Sign Up</h1>
                {Object.keys(errors).length ? (
                    <Errors>
                        <ul>
                            {errors.email && <li>{errors.email.message}</li>}
                            {errors.username && (
                                <li>{errors.username.message}</li>
                            )}
                            {errors.password && (
                                <li>{errors.password.message}</li>
                            )}
                            {errors.password_repeat && (
                                <li>{errors.password_repeat.message}</li>
                            )}
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
