import React from 'react';
import logo from './logo.svg';
import Product from './components/Product/Product';
import NavBar from './components/NavBar/NavBar';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div >
      <NavBar />
      <Filter />
      <Product />
    </div>
  );
}

export default App;
