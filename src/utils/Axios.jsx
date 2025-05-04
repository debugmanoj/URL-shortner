import axios from 'axios'

const AxiosService = axios.create({
    baseURL: 'https://url-api-nu.vercel.app/',
    // baseURL: 'http://localhost:3000',
 
})

export default AxiosService