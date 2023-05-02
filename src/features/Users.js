import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AddProducts from "../firebase/model/products";
import axios from "axios";

let check = {};
let checkProduct = {};
let tab = [];
let stop = true;
let addProduct = new AddProducts();
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    tabo : [],
    count: 0,
    countProduct: 0,
    objchecked: {},
    order: [],
    status: "idle",
    error: null,
    currentProduct: [],
    totalprice: 0,
    datafromFetch : {}
  },
  reducers: {
    counter: (state, action) => {
      let fetchDoc = addProduct.Get();
   console.log(tab,'tab 11')


console.log(checkProduct)
      
 
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
      if (action.payload[2]) {


        action.payload[2].forEach((data) => {
          // si il n'y as pas se produit dans l'array ajouter un produits
          if (
            Number(data.id) === Number(action.payload[1]) &&
            checkProduct[data.id] === undefined
          ) {
            checkProduct[action.payload[1]] = action.payload[1];

            console.log("new one");
            tab.push({ ...data });
          }

          if (
            Number(data.id) === Number(action.payload[1]) &&
            checkProduct[data.id]
          ) {
            console.log("already in ");
            // ajoute le compte si le produit existe déja
            tab.forEach((el) => {
              if (Number(el.id) === Number(data.id)) {
    
                let compte = {compte: state.count}
                Object.assign(el, compte)
              }

              if(el.compte === 0){
              tab =  tab.filter( el => Number(el.id) !== Number(action.payload[1]) )
               console.log(tab,'delete tab')
              }
            });
          }
        });

        console.log(tab,'end tab');
        if (action.payload[3]) {
          addProduct.updateData(action.payload[3], tab);
        }
      }

      state.objchecked = { ...check };
    },
    addprod: (state, action) => {
      state.objchecked = { ...check };
    },
    addnewproduct: (state, action) => {
      console.log(action.payload, "product");

      state.currentProduct = [...tab];
      state.totalprice = action.payload[1];

      // firebase adddoc
    },
    fetchFromDb :(state,action) =>{
          console.log(action.payload)
          let checkProdFromFb = {}
           let checkfrDb = false 
           
           if(tab.length == 0){
            console.log('push')
            action.payload[0].product.map((data)=>{
              tab.push({...data})
              checkProduct[data.id] = data.id
          })
            state.currentProduct = [...action.payload[0].product]

           }


          action.payload[0].product.forEach((data)=>{
           
              const {id,compte} = data
             

                 if(check[id] === undefined){
                  check[id] = compte
                  state.objchecked = {...check}
                 }

                 if(checkProdFromFb[action.payload[1]] === undefined){
                  checkProdFromFb[action.payload[1]] =  Number(action.payload[1])
                
      
                }

                //   si l'id est présent 
              if(checkProdFromFb[action.payload[1]]  ===  id){
    
                state.count = compte
                 checkfrDb = true
              }
              
              if(!checkfrDb){
                state.count  = 0
              }
          })
          console.log(state.count,'yooo')

 
    }
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
  fetchFromDb
} = postsSlice.actions;

export default postsSlice.reducer;
