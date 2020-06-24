import { SET_ERRORS, CLEAR_ERRORS } from '../types';

const initialState = {
    errors: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ERRORS:
            return {
                errors: action.payload
            };
        case CLEAR_ERRORS:
            return initialState;
        default: return state;
    }
}