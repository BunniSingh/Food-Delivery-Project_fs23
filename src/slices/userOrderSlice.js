import { createSlice } from "@reduxjs/toolkit";


const reviewSlice = createSlice({
    name: "ORDERS",
    initialState: {
        userAddress : {},
    },
    reducers: {
        setUserAddress(state, action){
            state.userAddress = action.payload ;
        }
    }
})

export const {setUserAddress} = reviewSlice.actions;

export default reviewSlice.reducer;