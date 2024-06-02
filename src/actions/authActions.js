import axios from 'axios';
import { registerSuccess, registerFail, loginSuccess, loginFail, logoutSuccess } from '../reducers/authReducer';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
  }
  try {
    const res = await axios.get('http://localhost:5000/api/auth/user');
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};

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
