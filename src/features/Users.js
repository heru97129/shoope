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
            state.value.map(stat => {
                if(stat.id === action.payload.id){
                    stat.username = action.payload.username
                }
            })
         }
    }
})

export  const {addUsers,deleteUsers, updateName } = userSlice.actions

export default userSlice.reducer