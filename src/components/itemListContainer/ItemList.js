import React from 'react'
import { Item } from './cards/Card'
import "./ItemList.css"

export const ItemList = ( {productos = []} ) => {


    return (
        <section className="h3__itemList">
            <h3>Las más vendidas</h3>
            <div className="contenedorGeneralCards">
                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}
            </div>
        </section>
    )
}
