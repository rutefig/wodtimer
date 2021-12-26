import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';

import { setTimeCap } from './fortimeSlice';
import { Timer } from '../timer/Timer';
import { countUp, countDown } from '../timer/timerSlice';

export function Fortime() {
    const dispatch = useDispatch();

    const handleCountDown = () => {
        batch(() => {
            dispatch(setTimeCap(30));
            dispatch(countDown(30));
        });
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