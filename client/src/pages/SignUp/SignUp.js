import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components';
import { FormContainer, FormWrapper } from './SignUp.styled';
function SignUp(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <FormWrapper>
            <FormContainer>
                <h1>Sign Up</h1>
                <form onSubmit={onSubmit}>
                    <Input
                        handleChange={(e) => setEmail(e.target.value)}
                        value={email}
                        fieldType="email"
                        label="Email Address"
                        required
                    />
                    <Input
                        handleChange={(e) => setUsername(e.target.value)}
                        fieldType="text"
                        value={username}
                        label="Username"
                        required
                        minimium="6"
                    />
                    <Input
                        handleChange={(e) => setPassword(e.target.value)}
                        value={password}
                        fieldType="password"
                        label="Password"
                        required
                    />
                    <Input
                        handleChange={(e) => setPassword2(e.target.value)}
                        value={password2}
                        fieldType="password"
                        label="Confirm password"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
                <small>
                    or <Link to="/sign-in">Sign in</Link>
                </small>
            </FormContainer>
        </FormWrapper>
    );
}

export default SignUp;
