import axios from 'axios';
import { registerSuccess, registerFail, loginSuccess, loginFail, logoutSuccess } from '../reducers/authReducer';

export const register = (formData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/api/auth/register', formData);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFail());
    }
};

export const login = (formData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', formData);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFail());
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
};
