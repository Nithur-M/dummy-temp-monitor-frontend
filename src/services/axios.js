import axios from "axios";


let headers = {};


if (localStorage.token) {
    headers.Authorization = `Bearer $(localStorage.token)`;
}

const axiosInstance = axios.create({
    baseURL: "http://localhost:8081/",
    headers,
});

export default axiosInstance;
