import {
    COLLECT_BOOK,
} from '../_actions/types';

// eslint-disable-next-line 
export default function(state ={}, action){
    switch(action.type){
        case COLLECT_BOOK:
            return {...state, collectBookSuccess: action.payload}
            
        default:
            return state;
    }
}