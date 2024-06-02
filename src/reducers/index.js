import { combineReducers } from 'redux';
import auth from './authReducer';
import post from './postReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({
    auth,
    post
});
