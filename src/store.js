import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});

export default store;
