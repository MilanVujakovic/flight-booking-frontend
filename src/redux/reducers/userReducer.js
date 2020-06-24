import { SET_USER_DATA, LOGOUT_USER, LOGIN_USER_SUCCESS } from '../types';

const initialState = {
    isAuthenticated: false,
    data: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            };
        case LOGOUT_USER:
            return initialState;
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            };
        default: 
            return state;
    }
}