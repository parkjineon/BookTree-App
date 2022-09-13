import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    AUTH
} from '../_actions/types';

// eslint-disable-next-line 
export default function(state ={}, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
        case REGISTER_USER:
            return {...state, registerSuccess: action.payload}
        case LOGOUT_USER:
            return {...state, logoutSuccess: action.payload}
        case AUTH:
            return {...state, authSuccess: action.payload}
        default:
            return state;
    }
}