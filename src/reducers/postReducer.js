import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostsSuccess(state, action) {
      state.posts = action.payload;
    },
    fetchPostSuccess(state, action) {
      state.post = action.payload;
    },
    createPostSuccess(state, action) {
      state.posts.push(action.payload);
    },
    addCommentSuccess(state, action) {
      state.post.comments.push(action.payload);
    },
  },
});

export const { fetchPostsSuccess, fetchPostSuccess, createPostSuccess, addCommentSuccess } = postSlice.actions;

export default postSlice.reducer;
