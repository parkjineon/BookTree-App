import {
    COLLECT_BOOK,
    GET_INFO
} from '../_actions/types';

// eslint-disable-next-line 
export default function(state ={}, action){
    switch(action.type){
        case COLLECT_BOOK:
            return {...state, collectBookSuccess: action.payload}

        case GET_INFO:
            return {...state, getInfoSuccess: action.payload}
        default:
            return state;
    }
}