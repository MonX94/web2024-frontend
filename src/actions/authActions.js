import axios from 'axios';
import { registerSuccess, registerFail, loginSuccess, loginFail, logoutSuccess } from '../reducers/authReducer';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
  }
  try {
    const res = await axios.get('http://localhost:5000/api/auth/user');
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(loginFail(err.response.data.msg)); // Передаємо повідомлення про помилку
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/register', formData);
    dispatch(registerSuccess(res.data));
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch(registerFail(error.response.data.msg)); // Передаємо повідомлення про помилку
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', formData);
    localStorage.setItem('token', res.data.token); // Зберігаємо токен у localStorage
    dispatch(loginSuccess(res.data));
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch(loginFail(error.response.data.msg)); // Передаємо повідомлення про помилку
  }
};

// Logout User
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(logoutSuccess());
};
