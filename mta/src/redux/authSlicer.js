import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice( {
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false
    },
    reducers: {
        loginAction: ( state, action ) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        }
    }
} );


export const { loginAction } = authSlice.actions;
export default authSlice.reducer;