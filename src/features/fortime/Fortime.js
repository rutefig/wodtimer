import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Counter } from '../counter/Counter';
import { increment } from '../counter/counterSlice';

export function Fortime() {
    const dispatch = useDispatch();

    return(
        <>
            <h1>For Time</h1>
            <Counter />
            <button onClick={() => dispatch(increment())}>Start Counting</button>
        </>
    )
};