import React, { useContext } from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



function Cart() {

    const {cantidadCarrito} = useContext(CartContext)

    return (
        <div>
            <Link classNadme="cta" to="/cart">
                <button>
                    <i class="fas fa-shopping-cart"><span>{cantidadCarrito()}</span></i>
                </button>
            </Link>
        </div>
    )
}

export default Cart