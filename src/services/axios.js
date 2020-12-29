import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;
let headers = {};


if (localStorage.token) {
    headers.Authorization = `Bearer $(localStorage.token)`;
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081',
    headers,
});

export default axiosInstance;
