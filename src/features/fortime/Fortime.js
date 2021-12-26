import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Timer } from '../timer/Timer';
import { increment } from '../timer/timerSlice';

export function Fortime() {
    const dispatch = useDispatch();

    return(
        <>
            <h1>For Time</h1>
            <Timer />
            <button onClick={() => dispatch(increment())}>Start Counting</button>
        </>
    )
};