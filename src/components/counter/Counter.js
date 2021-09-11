import React, { useState } from 'react' 

export const Counter = ({max, cantidad, setCantidad, agregar}) => {

   
    
    const handleSumar = () => {
        if (cantidad < max ){
            setCantidad (cantidad + 1)
        }
    }


    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1)

        }
    }
return (
    <>
        <button className="suma__button" onClick={handleRestar}> - </button>
        <p className="detalle__cantidad" >{cantidad}</p>
        <button className="suma__button" onClick={handleSumar}> + </button>
        <button className="detail__button" onClick={agregar}>Agregar al carrito</button>
    </>
)

}