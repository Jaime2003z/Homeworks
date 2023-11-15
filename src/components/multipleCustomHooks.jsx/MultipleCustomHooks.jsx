import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    return (
        <>
            <h3>Multiples Hooks Personalizados</h3><br />

            {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Cargando...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{data[0]?.quote}</p>
                        <footer className="blockquote-footer">{data[0]?.author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={() => increment}>Siguiente Frase</button>
            <button className="btn btn-primary" onClick={() => decrement}>Frase Anterior</button>
            <button className="btn btn-primary" onClick={() => reset}>Frase Inicial</button>

        </>
    )
}
