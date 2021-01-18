import React, { useState, useEffect } from 'react';
import { Input } from '../../components';
import { Errors, FormContainer, FormWrapper } from '../SignUp/SignUp.styled';
import { useForm } from 'react-hook-form';

function SignIn(props) {
    const { register, errors, handleSubmit } = useForm();
    function onSubmit(data) {}
    return (
        <FormWrapper>
            <FormContainer>
                <h1>Sign In</h1>
                {Object.keys(errors).length ? (
                    <Errors>
                        <ul>
                            {errors.username && (
                                <li>{errors.username.message}</li>
                            )}
                            {errors.password && (
                                <li>{errors.password.message}</li>
                            )}
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
