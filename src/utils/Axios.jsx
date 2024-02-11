import axios from 'axios'

const AxiosService = axios.create({
    baseURL: 'https://url-shortener-backend-ql1w.onrender.com/',
 
})

export default AxiosService