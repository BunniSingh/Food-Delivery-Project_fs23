import { createSlice } from "@reduxjs/toolkit";
import { new_food_list } from "../assets/assets";

const foodSlice = createSlice({
    name: 'FOOD_DATA',
    initialState: {
        food_list: new_food_list,
    },
    reducers: {
        addItemCount(state, action){
            const index =  state.food_list.findIndex(ele => ele._id === action.payload);
            state.food_list[index].count = state.food_list[index].count + 1;
        },

        subtractItemCount(state , action){
            const index =  state.food_list.findIndex(ele => ele._id === action.payload);
            state.food_list[index].count = state.food_list[index].count - 1;
        },

        setAsFav(state, action) {
            const index =  state.food_list.findIndex(ele => ele._id === action.payload);
            state.food_list[index].isFav = true;
        },

        removeAsFav(state, action) {
           const index =  state.food_list.findIndex(ele => ele._id === action.payload);
            state.food_list[index].isFav = false;
        },
        removeItemFromTheCart(state, action) {
            const index =  state.food_list.findIndex(ele => ele._id === action.payload);
            state.food_list[index].count = 0;
        }
    }
})


export default foodSlice.reducer;

export const { addItemCount, subtractItemCount, setAsFav, removeAsFav, removeItemFromTheCart } = foodSlice.actions;