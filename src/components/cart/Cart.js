import React from 'react'
import "./Cart.css"


function Cart({cantidad}) {
    return (
        <div>
            <a classNadme="cta" href="#">
                <button>
                    <i class="fas fa-shopping-cart"><span>{cantidad}</span></i>
                    
                </button>
            </a>
        </div>
    )
}

export default Cart