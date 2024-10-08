import axios, { AxiosInstance } from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
