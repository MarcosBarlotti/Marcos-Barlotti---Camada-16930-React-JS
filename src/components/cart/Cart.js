import React from 'react'
import "./Cart.css"
import { Link } from 'react-router-dom'


function Cart({cantidad}) {
    return (
        <div>
            <Link classNadme="cta" to={"/carrito"}>
                <button>
                    <i class="fas fa-shopping-cart"><span>{cantidad}</span></i>
                </button>
            </Link>
        </div>
    )
}

export default Cart