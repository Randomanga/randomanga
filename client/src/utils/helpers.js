import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const getStoredUserAuth = () => {
    const auth = JSON.parse(window.localStorage.getItem('rmgid'));
    if (auth) {
        const decoded = jwtDecode(auth.token);
        if (decoded.exp * 1000 < Date.now()) {
            window.localStorage.removeItem('rmgid');
        } else {
            return auth;
        }
    }
    return null;
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
