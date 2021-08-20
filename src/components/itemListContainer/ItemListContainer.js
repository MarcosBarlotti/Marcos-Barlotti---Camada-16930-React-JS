import React from 'react'
import Card from './cards/Card'

import "./ItemListContainer.css"


function ItemListContainer() {
    return (
        <div>
            <h3 className="h3__itemList ">Top 3 más vendidas</h3>
            <div className="contenedorGeneralCards">
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}

export default ItemListContainer


