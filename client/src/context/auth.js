import React, { useReducer, createContext } from 'react';
import { getStoredUserAuth } from '../utils/helpers';

const initialState = {
    user: getStoredUserAuth(),
};

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {},
});
function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}
function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    function login(userData) {
        localStorage.setItem('rmgid', JSON.stringify(userData));
        dispatch({
            type: 'LOGIN',
            payload: userData,
        });
    }
    function logout() {
        localStorage.removeItem('rmgid');
        dispatch({ type: 'LOGOUT' });
    }
    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout }}
            {...props}
        />
    );
}
export { AuthContext, AuthProvider };
