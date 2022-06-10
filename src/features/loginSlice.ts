import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


export type LoginState = {
    userID: string | null,
    isLogout:boolean,
    createdUser: boolean,
    notification:boolean,
    notificationSignup:boolean,
    errorSignUp: string | null,
    signInError:string | null
    
   
    
}


const initalState:LoginState = {
    userID: null,
    isLogout:false,
    notification:false,
    createdUser:false,
    notificationSignup:false,
    errorSignUp: null,
    signInError:null
    
    
}


export const loginSlice= createSlice({
    name:"login",
    initialState: initalState,
    reducers:{
        login:(state, action) => {
            state.userID = action.payload;
            state.isLogout = false
            
        },
        logout:(state) => {
            state.userID = null
            state.isLogout = true
            state.notification = true
        },
        deleteNotifiaction:(state) => {
            state.notification = false;
        },
        createNewUsr:(state) => {
            state.createdUser = true;
            state.notificationSignup = true;
        },
        deleteSignUpNot:(state) => {
            state.notificationSignup = false;
        },
        setSignUpError:(state, action) => {
            state.errorSignUp = action.payload;

        },
        deleteSignUpNotification:(state) => {
            state.errorSignUp = null;
        },
        setSignInError(state,action){
            state.signInError = action.payload;
        },
        deleteSignInError(state){
            state.signInError = null;
        }
    }
})


export const {login, logout ,deleteNotifiaction, createNewUsr, deleteSignUpNot, setSignUpError, deleteSignUpNotification, setSignInError, deleteSignInError} = loginSlice.actions

export const userId = (state:RootState) => state.login.userID;
export const isLogOut = (state:RootState) => state.login.isLogout;
export const createdUser = (state:RootState) => state.login.createdUser;
export const notif = (state:RootState) => state.login.notification
export const notifSignup = (state:RootState) => state.login.notificationSignup;
export const errorSignUpNots = (state:RootState) => state.login.errorSignUp;
export const errorSignInNots = (state:RootState) => state.login.signInError;


export const loginReducer = loginSlice.reducer;