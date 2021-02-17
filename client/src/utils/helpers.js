import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const getStoredUserAuth = () => {
    const auth = window.localStorage.getItem('rmgid');
    if (auth) {
        const decoded = jwtDecode(auth);
        if (decoded.exp * 1000 < Date.now()) {
            window.localStorage.removeItem('rmgid');
        } else {
            return decoded;
        }
    }
    return null;
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
