import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchPostsSuccess(state, action) {
      state.posts = action.payload;
    },
    fetchPostSuccess(state, action) {
      state.post = action.payload;
    },
    createNewPostSuccess(state, action) {
      state.posts.push(action.payload);
    },
    addNewCommentSuccess(state, action) {
      if (state.post) {
        state.post.comments.push(action.payload);
      }
    },
    deleteCommentSuccess(state, action) {
      if (state.post) {
        state.post.comments = state.post.comments.filter(comment => comment._id !== action.payload);
      }
    },
    likePostSuccess(state, action) {
      const postIndex = state.posts.findIndex(post => post._id === action.payload._id);
      if (postIndex >= 0) {
        state.posts[postIndex] = action.payload;
      } else if (state.post && state.post._id === action.payload._id) {
        state.post = action.payload;
      }
    },
    dislikePostSuccess(state, action) {
      const postIndex = state.posts.findIndex(post => post._id === action.payload._id);
      if (postIndex >= 0) {
        state.posts[postIndex] = action.payload;
      } else if (state.post && state.post._id === action.payload._id) {
        state.post = action.payload;
      }
    },
  },
});

export const {
  fetchPostsSuccess,
  fetchPostSuccess,
  createNewPostSuccess,
  addNewCommentSuccess,
  deleteCommentSuccess,
  likePostSuccess,
  dislikePostSuccess,
} = postSlice.actions;

export default postSlice.reducer;
