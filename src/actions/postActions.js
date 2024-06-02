import axios from 'axios';
import { fetchPostsSuccess, fetchPostSuccess, createPostSuccess, addCommentSuccess } from '../reducers/postReducer';

export const fetchPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/posts');
        dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
        console.error(error);
    }
};

export const fetchPost = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        dispatch(fetchPostSuccess(res.data));
    } catch (error) {
        console.error(error);
    }
};

export const createNewPost = (postData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/api/posts', postData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        dispatch(createPostSuccess(res.data));
    } catch (error) {
        console.error(error);
    }
};

export const addNewComment = (postId, commentData) => async (dispatch) => {
    try {
        const res = await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, commentData);
        dispatch(addCommentSuccess(res.data));
    } catch (error) {
        console.error(error);
    }
};
