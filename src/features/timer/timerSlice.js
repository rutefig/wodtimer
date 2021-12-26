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
        setStartingTime: (state, action) => {
            state.startingTime = action.payload;
        }
    }
});

export const { increment, decrement, setStartingTime } = timerSlice.actions;

export const selectTime = (state) => state.timer.value;

export const countUp = () => (dispatch, getState) => {
    setInterval(() => dispatch(increment()), 1000);
  };

export default timerSlice.reducer;