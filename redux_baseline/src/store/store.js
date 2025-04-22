import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

//create a Redux store from different slices
const store = configureStore({
    reducer:{
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;

//create Reducer function
//Below is commenting becuase with the Redux Tool Kit, we can create a slice of global Redux store
/*
const counterReducer = (state = {counter:0}, action) => {
   if(action.type === "increment"){
    return {
        counter : state.counter + action.amount,
        showCounter: state.showCounter
    }
   }
   if(action.type === "decrement"){
    return {
        counter : state.counter - action.amount,
        showCounter: state.showCounter
    }
   }
   if(action.type == "toggle"){
    return {
        showCounter : !state.showCounter,
        counter : state.counter
    }
   }
   return state;
} 

//create Redux Store
const store = createStore(counterReducer);*/