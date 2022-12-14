import axios from 'axios'
import { KAKAO_KEY } from '../key'
import {
    COLLECT_BOOK,
    GET_INFO,
    EDIT_INFO,
    REGISTER_BOOK,
    REMOVE_BOOK,
    SEARCH_KAKAOBOOK
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

export function editInfo(Id,dataToSubmit){

    const request = axios.post(`/api/books/${Id}/edit`,dataToSubmit)
    .then(response => response.data)
    .catch(err => { 

        let payload = {
            editInfoSuccess: false,
            message: 'edit Info 에러 발생'
        }
        return payload;
    })

    return{
        type: EDIT_INFO,
        payload: request
    }
}

export function registerBook(dataToSubmit){

    const request = axios.post('/api/books/register',dataToSubmit)
    .then(response => response.data)
    .catch(err => { 

        let payload = {
            registerBookSuccess: false,
            message: 'register book 에러 발생'
        }
        return payload;
    })

    return{
        type: REGISTER_BOOK,
        payload: request
    }
}

export function removeBook(Id){

    const request = axios.post(`/api/books/${Id}/remove`)
    .then(response => response.data)
    .catch(err => { 

        let payload = {
            removeBookSuccess: false,
            message: 'remove book 에러 발생'
        }
        return payload;
    })

    return{
        type: REMOVE_BOOK,
        payload: request
    }
}

export function searchKakaoBook(params){
   const Kakao = axios.create({
        baseURL: "https://dapi.kakao.com",
        headers:{
            Authorization: `KakaoAK ${KAKAO_KEY}`
        }
   })

   const request = Kakao.get("/v3/search/book",{params})
   .then(response => response.data)
   .catch(err => { 
    console.log(err)
    let payload = {
        searchKakaoBookSuccess: false,
        message: 'search book 에러 발생'
    }
    return payload;
})

   return{
    type: SEARCH_KAKAOBOOK,
    payload: request
}
}