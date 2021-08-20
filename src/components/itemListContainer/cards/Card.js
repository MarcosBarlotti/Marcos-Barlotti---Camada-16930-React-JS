import React from 'react'
import "./Card.css"


function Card() {
    return (
        <div>
           <div className="container__card" >
                <div className="card">
                    <img src="/imagenesProductos/r2d2.png" className="card__img"/>
                    <img src="/imagenesProductos/cafe.png" alt="cafe" className="card__cafe"></img>
                    <div className="card__data">
                        <h3 className="card__title">R2D2</h3>
                        <span className="card__preci">$99</span>
                        <p className="card__description"> R2D2 te ayuda con tu desayuno</p>
                        <a href="/" className="card__button">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
