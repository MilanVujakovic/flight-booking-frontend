import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, SET_USER_DATA, LOGOUT_USER } from '../types';
import axios, { setAuthorizationHeader, removeAuthorizationHeader, hasToken } from '../../utils/API';

// Validation
import { validateForm } from '../../utils/FormValidation';

export const loginUser = (userData, history) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST });

    const { isValid, errors } = validateLoginForm(userData);
    console.log(`isvalid: ${isValid}`);
    if(!isValid) {
        dispatch({
            type: LOGIN_USER_FAILURE,
            payload: { ...errors }
        });
        return;
    }

    try{
        const res = await axios.post('/user/login', userData);
        setAuthorizationHeader(res.data.token);
        dispatch({ type: LOGIN_USER_SUCCESS });
        dispatch(getUserData());
        history.push('/');
    } catch(error) {
        console.log(error);
        dispatch({
            type: LOGIN_USER_FAILURE,
            payload: error.response.data  
        });
    };
}

export const getUserData = () => async dispatch => {
    try {
        const res = await axios.get('/user/me');
        dispatch({ 
            type: SET_USER_DATA,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
    }
}

export const logoutUser = () => async dispatch => {
    try {
        await axios.post('/user/logout');
        removeAuthorizationHeader();
        dispatch({ type: LOGOUT_USER });
    } catch (error) {
        console.log(error);
    }
}

export const checkUser = () => dispatch => {
    if(hasToken()) {
        try {
            dispatch(getUserData());
        } catch (error) {
            console.log(error);
            dispatch({ 
                type: LOGIN_USER_FAILURE,
                payload: {} 
            });
        }
    }
}

export const validateLoginForm = userData => {
    const validateReq = {
        email: {
            isRequired: true,
            isEmailValid: true
        },
        password: {
            isRequired: true
        }
    }

    return validateForm(validateReq, userData);
}