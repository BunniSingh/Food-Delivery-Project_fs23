import { configureStore } from "@reduxjs/toolkit";
import foodSlice from './slices/foodSlice'
import reviewSlice from './slices/reviewSlice'
import loginSlice from './slices/loginSlice'
import userOrderSlice from './slices/userOrderSlice'


const store = configureStore({
    reducer: {
        food_data: foodSlice,
        review_data: reviewSlice,
        login_data : loginSlice,
        orders_data: userOrderSlice,
    }
})

export default store;