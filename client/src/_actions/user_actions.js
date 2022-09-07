import axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER
} from './types'

export function loginUser(dataToSubmit){
    const request = axios.post('/api/users/login',dataToSubmit)
        .then(response => response.data)
        .catch(err => {
            console.log(err)
            let payload = {
                loginSuccess: false,
                message: '시스템 내부 에러 발생'
            }
            return payload;
        })

    return{
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit){
    const request = axios.post('/api/users/register',dataToSubmit)
        .then(response => response.data)
        .catch(err => {
            console.log(err)
            let payload = {
                registerSuccess: false,
                message: '시스템 내부 에러 발생'
            }
            return payload;
        })

    return{
        type: REGISTER_USER,
        payload: request
    }
}