import { SET_USER_DATA, LOGOUT_USER, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../types';

const initialState = {
    isAuthenticating: false,
    isAuthenticated: false,
    errors: {},
    data: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER_REQUEST: 
            return {
                ...state,
                isAuthenticating: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                errors: {},
                isAuthenticated: true,
                isAuthenticating: false
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                errors: action.payload
            };
        case LOGOUT_USER:
            return initialState;
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        default: 
            return state;
    }
}