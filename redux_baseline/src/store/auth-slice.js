import {createSlice} from '@reduxjs/toolkit';

//Create Auth Slice
const initialAuthState = {isAuthenticated : false};
const authSlice = createSlice({
    name: 'authentication',
    initialState : initialAuthState,
    reducers : {
        login(state){
           state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

export default authSlice.reducer;
//export Reducer Actions
export const authActions = authSlice.actions;