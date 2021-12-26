import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        resetTimer: (state, action) => {
            state.value = action ? action.payload : 0;
        }
    }
});

export const { increment, decrement, resetTimer } = timerSlice.actions;

export const selectTime = (state) => state.timer.value;

export const countUp = () => (dispatch, getState) => {
    setInterval(() => dispatch(increment()), 1000);
  };

export const countDown = (startingTime) => (dispatch, getState) => {
    dispatch(resetTimer(startingTime));
    setInterval(() => dispatch(decrement()), 1000);
}

export default timerSlice.reducer;