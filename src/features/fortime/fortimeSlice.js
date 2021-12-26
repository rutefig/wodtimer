import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timecap: 0
}

export const fortimeSlice = createSlice({
    name: 'fortime',
    initialState,
    reducers: {
        setTimeCap: (state, action) => state.timecap += action.payload
    }
});

export const { setTimeCap } = fortimeSlice.actions;

export const selectTimeCap = (state) => state.fortime.timecap;

export default fortimeSlice.reducer;