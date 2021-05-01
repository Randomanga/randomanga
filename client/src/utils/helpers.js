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

export const fetch = async (url) => {
    try {
        const res = await axios.get(url, { withCredentials: true });
        console.log(res.data);
        return res.data;
    } catch (err) {
        const errorResponse = err.response;
        const error = new Error('Error while fetching data.');
        error.info = errorResponse.data.error;
        error.status = err.response.status;
        throw error;
    }
};
