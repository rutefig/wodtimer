import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './counterSlice';

export function Counter() {
    const count = useSelector(selectCount);
    return(
        <>
            <h1>{count}</h1>
        </>
    )
};