import { objectMethod } from '@babel/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { prettyDOM } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
let compteById = {};
let tab = []
let check ={}
let compte = 0
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
       let data = [...action.payload]
       let tab = []
       let num = 0
       data.filter((prod,i)=>{ 
          if(Number(prod.id) === Number(action.payload[i].id)){
             if(prod.change){
              tab[num]= prod

             }
            tab[num]= prod
          
          }
   
 
        })
       console.log(tab,'i')
       state.countProduct = tab
    },
    neworder:(state,action)=>{
          
       let data = action.payload
             
          let newData = {...data[0]}
     if(!check[data[0].id]){
      compte = 1
          check[data[0].id] = 'test'
          console.log(check,newData,'newdata')
          newData.compte = compte
          tab.push(newData)

       
        }else{

          let newItem = {}
            tab.forEach((item,i)=>{
              let {id } = item
              newItem = {...item}
              if(id === data[0].id){
         
          
              console.log('yoooooooo',compte)
    
                newItem.compte += 1
                console.log(newItem)
                tab.slice(i,1)
                tab[i] = newItem
              }
            })


        }

console.log(tab)
        
      state.order = [...tab]
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
