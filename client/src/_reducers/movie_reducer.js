import {
    REGISTER_MOVIE,
    COLLECT_MOVIE,
    GET_MOVIE_INFO,
    EDIT_MOVIE_INFO,
    REMOVE_MOVIE
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

        case EDIT_MOVIE_INFO:
            return {...state, editMovieInfoSuccess: action.payload}

        case REMOVE_MOVIE:
            return {...state, removeMovieSuccess: action.payload}  

        default:
            return state;
    }
}