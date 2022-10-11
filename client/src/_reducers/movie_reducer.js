import {
    REGISTER_MOVIE,
    COLLECT_MOVIE,
    GET_MOVIE_INFO
} from '../_actions/types';

// eslint-disable-next-line 
export default function(state ={}, action){
    switch(action.type){
        case REGISTER_MOVIE:
            return {...state, registerMovieSuccess: action.payload}

        case COLLECT_MOVIE:
            return {...state, collectMovieSuccess: action.payload}

        case GET_MOVIE_INFO:
            return {...state, getMovieInfoSuccess: action.payload}
            
        default:
            return state;
    }
}