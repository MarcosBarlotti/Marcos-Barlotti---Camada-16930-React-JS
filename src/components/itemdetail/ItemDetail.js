import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemDetail.css"

export const ItemDetail = ({category, id, nombre, descLarga, desc, img, img2, img3, precio}) => {


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
                <a href="/" className="detail__button">Agregar al carrito</a>
            </div>

        </div>
    )
}
