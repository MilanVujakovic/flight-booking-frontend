import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const setAuthorizationHeader = (token) => {
    const jwt = `Bearer ${token}`;
    localStorage.setItem('jwt', jwt);
    axiosInstance.defaults.headers.common['Authorization'] = jwt;
}

export const removeAuthorizationHeader = () => {
    localStorage.removeItem('jwt');
    delete axiosInstance.defaults.headers.common['Authorization'];
}

export const hasToken = () => {
    if(!getToken()) return false;
    if(!axiosInstance.defaults.headers.common['Authorization']) {
        axiosInstance.defaults.headers.common['Authorization'] = getToken();
    }
    
    return true;
}

export const getToken = () => localStorage.getItem('jwt') || null;

export default axiosInstance;