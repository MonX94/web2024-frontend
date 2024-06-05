import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchPostsSuccess,
  fetchPostSuccess,
  createNewPostSuccess,
  addNewCommentSuccess,
  deleteCommentSuccess,
  likePostSuccess,
  dislikePostSuccess,
} from '../reducers/postReducer';

// Fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:5000/api/posts');
    thunkAPI.dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Fetch single post by ID
export const fetchPost = createAsyncThunk('posts/fetchPost', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
    thunkAPI.dispatch(fetchPostSuccess(response.data));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Create a new post
export const createNewPost = createAsyncThunk('posts/createNewPost', async (postData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:5000/api/posts', postData);
    thunkAPI.dispatch(createNewPostSuccess(response.data));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Add a new comment
export const addNewComment = createAsyncThunk('posts/addNewComment', async ({ postId, content }, thunkAPI) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, { content });
    thunkAPI.dispatch(addNewCommentSuccess(response.data));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Delete a comment
export const deleteComment = createAsyncThunk('posts/deleteComment', async ({ postId, commentId }, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:5000/api/posts/${postId}/comments/${commentId}`);
    thunkAPI.dispatch(deleteCommentSuccess(commentId));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Like a post
export const likePost = createAsyncThunk('posts/likePost', async (postId, thunkAPI) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/posts/${postId}/like`);
    thunkAPI.dispatch(likePostSuccess(response.data));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Dislike a post
export const dislikePost = createAsyncThunk('posts/dislikePost', async (postId, thunkAPI) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/posts/${postId}/dislike`);
    thunkAPI.dispatch(dislikePostSuccess(response.data));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
