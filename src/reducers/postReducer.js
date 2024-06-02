import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPost, createNewPost, addNewComment } from '../actions/postActions';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(addNewComment.fulfilled, (state, action) => {
        if (state.post) {
          state.post.comments.push(action.payload);
        }
      });
  }
});

export default postSlice.reducer;
