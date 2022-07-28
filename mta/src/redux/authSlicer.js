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
        },
        
        loadingAction: ( state, action ) =>
        {
            state.loading = action.payload;
        }

    }
} );


export const { loginAction,loadingAction } = authSlice.actions;
export default authSlice.reducer;