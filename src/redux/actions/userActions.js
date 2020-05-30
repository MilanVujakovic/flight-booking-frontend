import {SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../types';
import Axios from '../../utils/API';

export const loginUser = (userData) => (dispatch) => {
    Axios
        .post('/user/login', userData)
        .then((res) => {
            console.log(res.data);
        })
        .catch()
}