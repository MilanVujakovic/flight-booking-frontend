import {SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../types';
import Axios from '../../utils/API';

export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    Axios
        .post('/user/login', userData)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}