import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

export const Item = ( {img, nombre, desc, precio, id} ) => {


    return (
        <div>
           <div className="container__card" >
                <div className="card">
                    <img src={img} className="card__img"/>
                    <img src="/imagenesProductos/cafe.png" alt="cafe" className="card__cafe"></img>
                    <div className="card__data">
                        <h3 className="card__title">{nombre}</h3>
                        <span className="card__preci">{precio}</span>
                        <p className="card__description">{desc}</p>
                        <Link to={`/detail/${id}`} className="card__button">Ver Detalle</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

