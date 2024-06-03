import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/posts');
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
});

export const fetchPost = createAsyncThunk('posts/fetchPost', async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
});

export const createNewPost = createAsyncThunk('posts/createNewPost', async (postData, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.auth.token}`
            }
        };
        const response = await axios.post('http://localhost:5000/api/posts', postData, config);
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
});

export const addNewComment = createAsyncThunk('posts/addNewComment', async (postData, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.auth.token}`
            }
        };
        const response = await axios.post(`http://localhost:5000/api/posts/${postData.postId._id}/comments`, { content: postData.content }, config);
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
});

export const deleteComment = createAsyncThunk('posts/deleteComment', async ({ postId, commentId }, thunkAPI) => {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    };
    try {
      const res = await axios.delete(`http://localhost:5000/api/posts/${postId}/comments/${commentId}`, config);
      return { postId, comments: res.data };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  });