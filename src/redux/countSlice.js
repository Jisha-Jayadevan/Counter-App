import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        increment:(state)=>{state.count+=1},
        decrement:(state)=>{state.count-=1},
        reset:(state)=>{state.count=0}
    }
})

// for components
export const {increment,decrement,reset}=countSlice.actions

//imported files
export default countSlice.reducer