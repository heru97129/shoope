import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    count:0,
    order:[],
    status: 'idle',
    error: null,
  },
  reducers: {
    order:(state,action)=>{
    state.count = action.payload
      console.log(state.count)
    },
    neworder:(state,action)=>{
        state.order = [...state.order,{order:action.payload}]
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const selectAllPosts = (state) => state.posts.data;
export const {order,neworder} = postsSlice.actions;

export default postsSlice.reducer;
