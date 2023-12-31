import {configureStore, createSlice} from '@reduxjs/toolkit'

const authSlice= createSlice({
    name: 'auth',
    initialState:{isLoggedin:false},
    reducers:{
        login(state){
            state.isLoggedin=true
        },
        logout(state){
            localStorage.removeItem("userId")
            state.isLoggedin=false
        },
    }
});

export const authActions = authSlice.actions

export const store = configureStore({
    reducer: authSlice.reducer
})