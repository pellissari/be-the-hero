import axios from 'axios';

const api = axios.create({
    baseURL: 'https://condo-hero.herokuapp.com',
})

export default api;