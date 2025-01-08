import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice(
    {
        name:'User',
        initialState:null,
        reducers: {
            addUser : (store,action)=>(
          store.push(action.payload)
            )
    }
}
)