import { createSlice } from "@reduxjs/toolkit";
import  {products}  from '../Fakedata'

export const userSlice = createSlice({
    name:'users',
    initialState : {value: products},
    reducers :{
        filterCategory : (state,action) =>{
         state.value = state.value.filter(el =>{
            
            console.log(state.value)
          return  el.category === action.payload
        
        })
        }
        // deleteUsers : (state,action) =>{
        //     state.value = state.value.filter(state => {
        //         return state.id !== action.payload})
        //  },

        //  updateName : (state,action)=>{
        //     state.value.map(stat => {
        //         if(stat.id === action.payload.id){
        //             stat.username = action.payload.username
        //         }
        //     })
        //  }
    }
})

export  const { filterCategory,deleteUsers, updateName } = userSlice.actions

export default userSlice.reducer