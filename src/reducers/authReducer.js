import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  role: null,
  error: null // Додаємо стан для помилок
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess(state, action) {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload.user;
      state.role = action.payload.user.role;
      state.error = null;
    },
    registerFail(state, action) {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.role = null;
      state.error = action.payload; // Зберігаємо повідомлення про помилку
    },
    loginSuccess(state, action) {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.error = null;
    },
    loginFail(state, action) {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.role = null;
      state.error = action.payload; // Зберігаємо повідомлення про помилку
    },
    logoutSuccess(state) {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.role = null;
      state.error = null;
    },
    userLoaded(state, action) {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
      state.role = action.payload.role;
    },
    authError(state, action) {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.role = null;
      state.error = action.payload; // Зберігаємо повідомлення про помилку
    }
  }
});

export const {
  registerSuccess,
  registerFail,
  loginSuccess,
  loginFail,
  logoutSuccess,
  userLoaded,
  authError
} = authSlice.actions;

export default authSlice.reducer;
