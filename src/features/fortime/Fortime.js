import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';

import { Timer } from '../timer/Timer';
import { countUp, setStartingTime } from '../timer/timerSlice';

export function Fortime() {
    const dispatch = useDispatch();

    return(
        <>
            <h1>For Time</h1>
            <Timer />
            <button onClick={() => dispatch(countUp())}>Start Counting</button>
        </>
    )
};