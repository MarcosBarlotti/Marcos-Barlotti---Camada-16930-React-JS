import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
//COMPONENTES
import Cart from "../cart/Cart"

function Navbar() {
    return (
    
    <div>

        <nav className="cart__container">
           
            <div className="logo">
                <Link to={"/"}>CINETAZAS</Link>
            </div>
           
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>

                <li>
                    <Link to={"/tazas"} className="sinBorde" >Tazas</Link>
                        <ul>
                            <li><Link to={"/category/starWars"}>Star Wars</Link></li>
                            <li><Link to={"/category/friends"}>Friends</Link></li>
                            <li><Link to={"/category/harrypotter"}>Harry Potter</Link></li>
                        </ul>
                </li>
                
                <li>
                    <Link to={"/preguntas"} className="sinBorde">Preguntas Frecuentes</Link>
                </li>
                
                <li>
                    <Link to={"/contacto"}>Contacto</Link>
                </li>

                <div className="carrito">
                        <Cart cantidad = {0}/> 
                </div>

                
            
            </ul>
        
        </nav>

    </div>
    )
}

export default Navbar
