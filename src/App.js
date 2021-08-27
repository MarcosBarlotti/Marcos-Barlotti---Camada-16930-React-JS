import React from 'react';
//React router
import { BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
//COMPONENTS
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import Cart from "./components/cart/Cart"
import {ItemDetailContainer} from "./components/itemdetail/ItemDetailContainer"



class App extends React.Component{
  render() {
    return (
      <>
      <BrowserRouter>
         <Navbar/>
         
         <Switch>
          
          <Route exact path="/">
            <Header/>
            <ItemListContainer/>
          </Route>

          <Route exact path="/category/:catId">
            <ItemListContainer/>
          </Route>

          <Route path="/tazas">
            <ItemListContainer/>
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>

          <Route path="/preguntas">
              <h1>Preguntas</h1>
          </Route>

          <Route path="/contacto">
              <h1>Contacto</h1>
          </Route>

          <Route path="/carrito">
            <Cart cantidad = {0}/> 
          </Route>

          <Route path="*">
                    <img src="https://i.pinimg.com/originals/c0/6c/9d/c06c9d63bda3f0a823aee1b2f47b0457.png" width="100%" height="auto"></img>
          </Route>
{/* 
          <Route exact path="/detail/:itemId">
                    <ItemDetailContainer/>
          </Route> */}

         </Switch>
      
      </BrowserRouter>
      </>
    )
  }
}

export default App;
