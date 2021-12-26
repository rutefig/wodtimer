import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTime } from './timerSlice';

export function Timer() {
    const time = useSelector(selectTime);
    return(
        <>
            <h1>{time}</h1>
        </>
    )
};