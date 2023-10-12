import React, { useState, useCallback } from "react";
import { Son } from "./son";

export const Father = () => {
    const list = [2, 4, 6, 8, 10]
    const [valor, setValor] = useState(0)

    const increment = useCallback((num) => {
        setValor(valor + num)
    }, [])

    return (
        <>
            <h1>Father</h1>
            <p>Total: {valor}</p>

            {
                list.map((n, idx) => {
                    return (
                        <Son
                            key={idx}
                            numero={n}
                            increment={increment}
                        />
                    )
                })
            }

        </>
    )
}