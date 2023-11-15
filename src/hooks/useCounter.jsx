import { useState } from 'react';

export const useCounter = (number) => {
    const [contador, setcontador] = useState(number);
    const increment = () => setcontador(contador + 1);
    const decrement = () => setcontador(contador - 1);
    const reset = () => setcontador(number);
   
    return {
        contador,
        increment,
        decrement,
        reset
    };
}