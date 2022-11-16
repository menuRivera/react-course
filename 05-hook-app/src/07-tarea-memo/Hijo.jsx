import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {
    // se usa React.memo() para memorizar el estado y las props de un componente
    // y evitar renderizaciones innecesarias

    console.log('Child renders');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
})
