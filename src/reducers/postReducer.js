import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPost, createNewPost, addNewComment, deleteComment } from '../actions/postActions';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: null,
    loading: true,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(addNewComment.fulfilled, (state, action) => {
        if (state.post) {
          state.post.comments = action.payload;
        }
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        if (state.post && state.post._id === action.payload.postId) {
          state.post.comments = action.payload.comments;
        }
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addNewComment.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default postSlice.reducer;
