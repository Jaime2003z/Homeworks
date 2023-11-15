import React, { useState, useCallback } from 'react';
import { Son } from '../Son';

export const Dad = () => {
    const list = [0, 2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const increment = useCallback((n) => {
        setValor(valor + n);
    }, []);


    return (
        <>
            <h1>Father</h1>
            <p>Total: {valor}</p>
            <hr />

            {
                list.map((n, idx) => {
                    return <Son key={idx} numero={n} increment={increment} />
                })
            }
        </>
    )
}
