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
    tabo: [],
    count: 0,
    countProduct: 0,
    objchecked: {},
    order: [],
    status: "idle",
    error: null,
    currentProduct: [],
    totalprice: 0,
    datafromFetch: {},
  },
  reducers: {
    counter: (state, action) => {


      //  si le produits selectionné  n'est pas présent dans check le rajouté 
      if (!check[action.payload[1]]) {

        //  si l'action est + rajouter 1 state.count et ajouté dans check
        if (action.payload[0] === "+") {
          state.count = state.count + 1;
          check[action.payload[1]] = state.count;
        }
      } else {
        //  si l'id est présennt rajouté le nombre associé dans l'object 
        state.count = check[action.payload[1]];
        if (action.payload[0] === "+") {
          state.count = state.count + 1;
          check[action.payload[1]] = state.count;
        } else if (action.payload[0] === "-" && state.count !== 0) {
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
          // si l'un des produits match l'id du produits selectionné mais n'est pas présent dans checkProduct
          //  ajouter le produits dans le tab donc dans la BD
          if (
            Number(data.id) === Number(action.payload[1]) &&
            checkProduct[data.id] === undefined
          ) {
            checkProduct[action.payload[1]] = action.payload[1];

            tab.push({ ...data });
          }
                
          // si l'un des produits match l'id du produits selectionné et est présent dans checkProduct
          //  update le produit existant 
          if (
            Number(data.id) === Number(action.payload[1]) &&
            checkProduct[data.id]
          ) {
            // ajoute le compte si le produit existe déja
            tab.forEach((el) => {
              if (Number(el.id) === Number(data.id)) {
                let compte = { compte: state.count };
                Object.assign(el, compte);
              }
                 
              //  si le nombre de produits est égale a 0 retiré le produit 
              if (el.compte === 0) {
                tab = tab.filter(
                  (el) => Number(el.id) !== Number(action.payload[1])
                );
              }
            });
          }
        });
          
        //  si l'id est renseigner update la DB
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
      //  ajoute le nombre de produits total 
      state.currentProduct = [...tab];
      //  ajoute le prix total des produits cummulé 
      state.totalprice = action.payload[1];

      // firebase adddoc
    },
    fetchFromDb: (state, action) => {

      let checkProdFromFb = {};
      let checkfrDb = false;
     
      let total = 0
      //  si en lancant l'app  l'array tab est vide ajoute se qui a dans la BD
      if (tab.length == 0) {
        action.payload[0].product.map((data) => {
          tab.push({ ...data });
          checkProduct[data.id] = data.id;
        

          total += data.compte
          
        });
        state.countProduct  = total
        state.currentProduct = [...action.payload[0].product];
      }

      action.payload[0].product.forEach((data) => {
        const { id, compte } = data;
          
        //  si l'id du produit n'est pas présent dans l'object check rajoute le 
        if (check[id] === undefined) {
          check[id] = compte;
          state.objchecked = { ...check };
        }
          

        //  si l'id n'est pas présent dans l'object rajoute le
        if (checkProdFromFb[action.payload[1]] === undefined) {
          checkProdFromFb[action.payload[1]] = Number(action.payload[1]);
        }

        //   si l'id est présent dans l'object ajoute le nombre d'article par object
        if (checkProdFromFb[action.payload[1]] === id) {
          state.count = compte;
          checkfrDb = true;
        }
          //  si il n'est pas présent dans l'object  ajoute 0 au compte du produit 
        if (!checkfrDb) {
          state.count = 0;
        }
      });
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
  fetchFromDb,
} = postsSlice.actions;

export default postsSlice.reducer;
