import React from 'react'

const Variables = () => {

const saludo = 'Hola desde constante'
const imagen = 'https://cdn.pixabay.com/photo/2021/09/03/13/32/portrait-6595821_960_720.jpg'
    return (
        <div>
            <h2>Nuevo componente { saludo }</h2>
            <img src={imagen} alt="niña"></img>
        </div>
    )
}

export default Variables
