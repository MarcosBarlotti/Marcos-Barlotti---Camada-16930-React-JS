import React from 'react'
import "./Card.css"

export const Item = ( {img, nombre, desc, precio} ) => {


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
                        <a href="/" className="card__button">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

