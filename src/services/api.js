import axios from 'axios';

const api = axios.create({
     baseURL: 'https://localhost:3333/',
    // baseURL: 'http://backendtdt-responsive-ardvark-nv.mybluemix.net/'
})

export default api;