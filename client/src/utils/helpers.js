import jwtDecode from "jwt-decode";
import axios from "axios";

export const getStoredUserAuth = () => {
  const auth = JSON.parse(window.localStorage.getItem("rmgid"));
  if (auth) {
    const decoded = jwtDecode(auth.token);
    if (decoded.exp * 1000 < Date.now()) {
      window.localStorage.removeItem("rmgid");
    } else {
      return auth;
    }
  }
  return null;
};
const authFetch = async (url, token) => {
  try {
    const res = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
const fetch = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const fetcher = async (url, token) => {
  try {
    if (token) {
      const data = await authFetch(url, token);
      console.log(data);
      return data.data;
    } else {
      const data = await fetch(url);
      console.log(data);
      return data.data;
    }
  } catch (err) {
    const errorResponse = err.response;
    const error = new Error("Error while fetching data.");
    error.info = errorResponse.data.errors.message;
    error.status = err.response.status;
    throw error;
  }
};
