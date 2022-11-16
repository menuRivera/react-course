import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementar = useCallback((num) => {
        setValor(v => v + num)
    }, [])
    // Se usa el useCallback para mantener la referencia a la misma función
    // siempre que se haga render de este componente, es decir, sin 
    // useCallback, la función se vuelve a declarar y apunta a una ubicación
    // de memoria distinta, lo que significa que es otra función, con useCallback
    // se hace referencia al mismo espacio de memoria y por ende, la misma función

    
    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {
                numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
