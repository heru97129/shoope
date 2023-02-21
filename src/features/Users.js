import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from '../Fakedata'

export const userSlice = createSlice({
    name:'users',
    initialState : {value: UsersData},
    reducers :{
        addUsers : (state,action) =>{
           state.value.push(action.payload)
        },
        deleteUsers : (state,action) =>{
            state.value = state.value.filter(state => {
                return state.id !== action.payload})
         },

         updateName : (state,action)=>{

         }
    }
})

export  const {addUsers,deleteUsers} = userSlice.actions

export default userSlice.reducer