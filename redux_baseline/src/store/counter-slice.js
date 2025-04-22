import {createSlice} from '@reduxjs/toolkit';

//Create Counter Slice
const  initialCounterState = {counter:0, showCounter: true};
const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state, action){
            state.counter = state.counter + action.payload;
        },
        decrement(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
})

export default counterSlice.reducer;
//export Reducer Actions
export const counterActions = counterSlice.actions;
