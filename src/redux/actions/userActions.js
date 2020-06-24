import { LOGIN_USER_SUCCESS, SET_USER_DATA, LOGOUT_USER, SET_ERRORS, LOADING_UI } from '../types';
import axios, { setAuthorizationHeader, removeAuthorizationHeader, hasToken } from '../../utils/API';

// Validation
import { validateLoginForm } from '../../utils/FormValidation';

export const loginUser = (userData, history) => async (dispatch) => {
    dispatch({ type: LOADING_UI });

    const { isValid, errors } = validateLoginForm(userData);
    if(!isValid) {
        dispatch({
            type: SET_ERRORS,
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
            type: SET_ERRORS,
            payload: error.response.data  
        });
    };
};

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
};

export const logoutUser = () => async dispatch => {
    try {
        await axios.post('/user/logout');
        removeAuthorizationHeader();
        dispatch({ type: LOGOUT_USER });
    } catch (error) {
        console.log(error);
    }
};

export const checkUser = () => dispatch => {
    if(hasToken()) {
        try {
            dispatch(getUserData());
        } catch (error) {
            console.log(error);
            dispatch({ type: LOGOUT_USER });
        }
    }
};

export const signupUser = (userData, history) => async dispatch => {
    try {
        const res = await axios.post('/user/signup', userData);
        setAuthorizationHeader(res.data.token);
        dispatch({ type: LOGIN_USER_SUCCESS });
        dispatch(getUserData());
        history.push('/');
    } catch (error) {
        console.log(error);
        dispatch({
            type: SET_ERRORS,
            payload: error.response.data  
        });
    }
}