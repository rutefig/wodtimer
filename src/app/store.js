import { configureStore, combineReducers } from '@reduxjs/toolkit';
import timerReducer from '../features/timer/timerSlice';
import fortimeReducer from '../features/fortime/fortimeSlice';


export const store = configureStore({
  reducer: combineReducers({
    timer: timerReducer,
    fortime: fortimeReducer
  }),
});
