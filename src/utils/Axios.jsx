import axios from 'axios'

const AxiosService = axios.create({
    // baseURL: 'https://url-shortener-backend-ql1w.onrender.com',
    baseURL: 'http://localhost:3000',
 
})

export default AxiosService