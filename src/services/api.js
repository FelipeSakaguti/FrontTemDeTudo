import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://backendtdt-responsive-ardvark-nv.mybluemix.net/',
    baseURL: 'http://localhost:3333/'
})

export default api;