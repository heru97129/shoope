import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

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
    },
    neworder:(state,action)=>{
     let data = []
  let final =[]
        state.order = [...state.order,...action.payload]
        data = [...state.order]
        let pricesById = {};
        let compteById = {};
        let imageeById = {};

       
        for (const item of data) {
          const { id, price,image} = item;
          if (!pricesById[id]) {
    
            console.log(pricesById[id], "price");
             
            pricesById[id] = price;
            compteById[id] = pricesById[id] / price
            imageeById[id] = image
            console.log(pricesById[id], "price");
      
          } else {
           
            pricesById[id] += price;
            compteById[id] = pricesById[id] / price
           
          }
      
        }

        const summedItems = Object.keys(pricesById).map((id) => ({
          id,
          price: pricesById[id],
           compte : compteById[id],
           image: imageeById[id]
        }));
        
        state.order = [ ...summedItems]
        console.log(state.order)
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
