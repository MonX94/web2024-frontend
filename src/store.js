import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer
  }
});

export default store;
