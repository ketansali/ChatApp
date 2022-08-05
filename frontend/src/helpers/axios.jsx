import axios from 'axios';
import {api} from '../urlConfig'

const token = window.localStorage.getItem('token')
const axiosInstance = axios.create({
    baseURL : api,
    headers : {
        'Authorization' : token ? `Bearer ${token.token}`: null
    }
})
axiosInstance.interceptors.request.use((req)=>{
    let jwtToken = JSON.parse(token)
    if(token){
        req.headers.Authorization = `Bearer ${jwtToken.token}`
    }
    return req
})
export default axiosInstance