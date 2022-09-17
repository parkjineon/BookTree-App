import axios from 'axios'
import {
    COLLECT_BOOK,
    GET_INFO
} from './types'

export function collectBook(){
    const request = axios.get('/api/books/collect')
    .then(response => response.data)
    .catch(err => { 
        console.log('book_actions collectBook error')
        let payload = {
            collectBookSuccess: false,
            message: 'book 시스템 내부 에러 발생'
        }
        return payload;
    })
    return{
        type: COLLECT_BOOK,
        payload: request
    }
}

export function getInfo(Id){

    const request = axios.get(`/api/books/${Id}`)
    .then(response => response.data)
    .catch(err => { 
        console.log(err)
        let payload = {
            getInfoSuccess: false,
            message: 'get Info 에러 발생'
        }
        return payload;
    })
    return{
        type: GET_INFO,
        payload: request
    }
}