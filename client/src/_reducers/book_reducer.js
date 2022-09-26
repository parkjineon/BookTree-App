import {
    COLLECT_BOOK,
    GET_INFO,
    EDIT_INFO,
    REGISTER_BOOK
} from '../_actions/types';

// eslint-disable-next-line 
export default function(state ={}, action){
    switch(action.type){
        case COLLECT_BOOK:
            return {...state, collectBookSuccess: action.payload}

        case GET_INFO:
            return {...state, getInfoSuccess: action.payload}

        case EDIT_INFO:
            return {...state, editInfoSuccess: action.payload}

        case REGISTER_BOOK:
            return {...state, registerBookSuccess: action.payload}
            
        default:
            return state;
    }
}