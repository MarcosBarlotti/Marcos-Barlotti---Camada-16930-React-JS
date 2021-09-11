import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./ItemDetail.css"
import { Counter } from '../counter/Counter'
import { CartContext } from '../../context/CartContext'


export const ItemDetail = ({category, id, nombre, descLarga, desc, img, img2, img3, precio, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
    }


    return (
        <div className="detalle__container">
            
            <div className = "detalle__img__container">
                <img className = "detalle__img" src={img} alt={nombre}/>
                <img className = "detalle__img2" src={img2} alt={nombre}/>
           
                {/* <img src="/imagenesProductos/cafe.png" alt="cafe" className="detalle__cafe"></img> */}
            </div>

            <div className = "detalle__detalle">
                <h2 className = "detalle__titulo">{nombre}</h2>
                <p className = "detalle__descripcion__principal">{desc}</p>
                <p className = "detalle__descripcion__secundaria">{descLarga}</p>
                <p className = "detalle__precio">Precio: {precio}</p>
                <div className = "button__container">
                    <Counter 
                    max={stock} 
                    cantidad={cantidad} 
                    setCantidad={setCantidad} 
                    agregar={handleAdd} 
                    agregado={isInCart(id)}
                    />
                </div>
                    
            </div>

        </div>
    )
}
