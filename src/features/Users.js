import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
let compteById = {};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    count:0,
    countProduct:[],
    order:[],
    status: 'idle',
    error: null,
  },
  reducers: {
    order:(state,action)=>{
      if(action.payload === '+'){
        state.count = state.count + 1

      }
      
      else if (action.payload === '-' && state.count != 0){
        state.count = state.count - 1

      }

    },
    addprod:(state,action)=>{
      //  console.log(action.payload,'count')
       state.countProduct = [...action.payload]
       console.log(state.countProduct,'uo')
    },
    neworder:(state,action)=>{
   let tabcounpte = []
     let data = []
        data = [...state.order,...action.payload]
        let pricesById = {};
        let imageeById = {};
  
        for (const item of data) {
          
          const { id, price,image} = item;
          if (!pricesById[id] ) {
    
            pricesById[id] = price;
            
            imageeById[id] = image
      
          } else {
            pricesById[id] += price;
        
         
           
          }


          state.countProduct.map(prod =>{
            if(Number(prod.id) === id){
              compteById.id = prod.id
              compteById.compte = prod.count
     
            }
          
      
        })
      }
         const thetab = [...tabcounpte]
        const summedItems = Object.keys(pricesById).map((id) => ({
          id,
          price: pricesById[id],
           compte : id === compteById.id ? compteById.compte : [id,compteById.id],
           image: imageeById[id]
        }));
        
        state.order = [ ...summedItems]
        console.log(state.order,compteById)
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
export const {order,neworder,addprod} = postsSlice.actions;

export default postsSlice.reducer;
