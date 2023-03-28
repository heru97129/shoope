import {objectMethod} from '@babel/types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {prettyDOM} from '@testing-library/react';
import axios from 'axios';
import {act} from 'react-dom/test-utils';
let compteById = {};
let tab = []
let check = {}
let compte = 0
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        count: 0,
        countProduct: 0,
        objchecked : {},
        order: [],
        status: 'idle',
        error: null
    },
    reducers: {
        counter: (state, action) => {
            console.log(action.payload)
        
            if(!check[action.payload[1]]){
                
                console.log('not here yet ',check)
                if (action.payload[0] === '+') {
                    state.count = state.count + 1
                    check[action.payload[1]] = state.count
                } 

            }else{
                console.log('already here  ')
                state.count = check[action.payload[1]]
                if (action.payload[0] === '+') {
                    state.count = state.count + 1
                    check[action.payload[1]] = state.count
                       console.log(state.count,'count')
                } else if (action.payload[0] === '-' && state.count != 0) {
                    state.count = state.count - 1
                    check[action.payload[1]] = state.count
                }
            }
             if(action.payload[0] === '' && !check[action.payload[1]]){
                state.count = 0
             }else if(action.payload[0] === '' && check[action.payload[1]]){
                state.count = check[action.payload[1]]
             }
             console.log(Object.values(check),'values')
             const initialValue = 0;
            const sumWithInitial = Object.values(check).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
            );

            state.countProduct = sumWithInitial

            state.objchecked = {...check}

        },
        addprod: (state, action) => {
          state.objchecked = {...check}
        },

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
        }
    }
});

export const selectAllPosts = (state) => state.posts.data;
export const {
    counter,
    neworder,
    addprod,
    minus,
    objchecked
} = postsSlice.actions;

export default postsSlice.reducer;
