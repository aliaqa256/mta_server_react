import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice( {
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        is_creator: false,
        money:0
        
    },
    reducers: {
        loginAction: ( state, action ) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        
        loadingAction: ( state, action ) =>
        {
            state.loading = action.payload;
        },
        logoutAction: ( state, action ) =>
        {
            state.isAuthenticated = false;
            state.user = null;
            state.is_creator = false;
        },
        setCreatorAction: ( state, action ) =>
        {
            state.is_creator = action.payload;
        },
        setMoneyAction: ( state, action ) =>
        {
            state.money = action.payload;
        }

    }
} );


export const {
	loginAction,
	loadingAction,
	logoutAction,
	setCreatorAction,
	setMoneyAction,
} = authSlice.actions;
export default authSlice.reducer;