import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';

import { setTimeCap, selectTimeCap } from './fortimeSlice';
import { Timer } from '../timer/Timer';
import { countUp, countDown } from '../timer/timerSlice';

export function Fortime() {
    const timeCap = useSelector(selectTimeCap);
    const dispatch = useDispatch();
    dispatch(setTimeCap(30));

    const handleCountDown = () => {
        dispatch(countDown(timeCap));
    }

    return(
        <>
            <h1>For Time</h1>
            <Timer />
            <button onClick={() => dispatch(countUp())}>Count Up</button>
            <button onClick={handleCountDown}>Count Down</button>
        </>
    )
};