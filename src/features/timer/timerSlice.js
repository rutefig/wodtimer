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
    }
});

export const { increment, decrement } = timerSlice.actions;

export const selectTime = (state) => state.timer.value;

export default timerSlice.reducer;