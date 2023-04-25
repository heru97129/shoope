import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import AddProducts from "../firebase/model/products";

let check = {};
let checkProduct = {};
let tab = [];
let stop = true
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    count: 0,
    countProduct: 0,
    objchecked: {},
    order: [],
    status: "idle",
    error: null,
    currentProduct: [],
    totalprice: 0,
  },
  reducers: {
    counter: (state, action) => {
      if (!check[action.payload[1]]) {
        if (action.payload[0] === "+") {
          state.count = state.count + 1;
          check[action.payload[1]] = state.count;
        }
      } else {
        state.count = check[action.payload[1]];
        if (action.payload[0] === "+") {
          state.count = state.count + 1;
          check[action.payload[1]] = state.count;
        } else if (action.payload[0] === "-" && state.count != 0) {
          state.count = state.count - 1;
          check[action.payload[1]] = state.count;
        }
      }
      if (action.payload[0] === "" && !check[action.payload[1]]) {
        state.count = 0;
      } else if (action.payload[0] === "" && check[action.payload[1]]) {
        state.count = check[action.payload[1]];
      }
      const initialValue = 0;
      const sumWithInitial = Object.values(check).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );

      state.countProduct = sumWithInitial;
       

      //  if the array of prodct exist
      let newdata = {}
      if (action.payload[2]) {
         console.log(checkProduct,'prod')
        action.payload[2].forEach((data) => {
    
// si il n'y as pas se produit dans l'array ajouter un produits
         if(Number(data.id) === Number(action.payload[1]) && checkProduct[data.id] === undefined){
            checkProduct[action.payload[1]] = action.payload[1]

            console.log('new one')
            tab.push({...data})
         }


         if(Number(data.id) === Number(action.payload[1]) && checkProduct[data.id]){
            console.log('already in ')
// ajoute le compte si le produit existe déja
           tab.forEach(el =>{ 
            if(Number(el.id) ===Number(data.id)){
               el.compte = state.count
           }}
           )

         }
         
        });

        console.log(tab);
      }

      state.objchecked = { ...check };
    },
    addprod: (state, action) => {
      state.objchecked = { ...check };
    },
    addnewproduct: (state, action) => {
      console.log(action.payload, "product");

      state.currentProduct = [...action.payload[0]];
      state.totalprice = action.payload[1];

      // firebase adddoc
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectAllPosts = (state) => state.posts.data;
export const {
  counter,
  neworder,
  addprod,
  addnewproduct,
  objchecked,
  currentProduct,
} = postsSlice.actions;

export default postsSlice.reducer;
