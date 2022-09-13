import axios from 'axios'
import {
    COLLECT_BOOK
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