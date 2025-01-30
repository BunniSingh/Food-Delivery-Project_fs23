import { createSlice } from "@reduxjs/toolkit";



const loginSlice = createSlice({
    name : "LOGIN",
    initialState: {
        userData: {},
        loginState: false,
    },
    reducers: {
        setUserData(state, action) {
            state.userData = action.payload;
        },

        setLoginState(state, action) {
            state.loginState = action.payload;
            localStorage.setItem('loginStatus', JSON.stringify(action.payload))
        }
    }
})

export const { setUserData, setLoginState} = loginSlice.actions;
export default loginSlice.reducer;
