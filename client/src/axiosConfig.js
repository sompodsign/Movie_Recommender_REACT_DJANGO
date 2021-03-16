import axios from "axios"

const axi = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: { 'User-Agent': 'Axios - console app'}
});

export default axi;