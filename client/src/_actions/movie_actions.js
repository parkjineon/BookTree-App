import axios from 'axios'
import { KAKAO_KEY } from '../key'
import {
    REGISTER_MOVIE,
    COLLECT_MOVIE
} from './types'

export function registerMovie(dataToSubmit){

    const request = axios.post('/api/movies/register',dataToSubmit)
    .then(response => response.data)
    .catch(err => { 

        let payload = {
            registerMovieSuccess: false,
            message: 'register movie 에러 발생'
        }
        return payload;
    })

    return{
        type: REGISTER_MOVIE,
        payload: request
    }
}

export function collectMovie(){
    const request = axios.get('/api/movies/collect')
    .then(response => response.data)
    .catch(err => { 
        console.log('book_actions collectMovie error')
        let payload = {
            collectMovieSuccess: false,
            message: 'movie 시스템 내부 에러 발생'
        }
        return payload;
    })
    return{
        type: COLLECT_MOVIE,
        payload: request
    }
}