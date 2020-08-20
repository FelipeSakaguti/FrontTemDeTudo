import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://backendtdt-responsive-ardvark-nv.mybluemix.net/',
    baseURL: 'http://192.168.15.66:3333/'
})

export default api;