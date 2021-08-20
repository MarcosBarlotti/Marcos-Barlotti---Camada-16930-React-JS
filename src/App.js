import React from 'react';
//COMPONENTS
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';


class App extends React.Component{
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <ItemListContainer/>
      </div>
    )
  }
}

export default App;
