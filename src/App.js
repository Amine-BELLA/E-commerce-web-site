import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Product from './components/Product/Product';
import NavBar from './components/NavBar/NavBar';
import Filter from './components/Filter/Filter';
import SideBar from './components/SideBarTop/SideBarTop';


function App() {
  const [state, setState] = useState({
    products: data.products,
    sizeFilter: '',
    priceFilter: '',
    cartItems: [],
  });

  function handleSort(e) {
    const value = e.target.value;
    if (value === 'lowest') {
      setState(previousState => {
        return (
          {
            ...previousState,
            products: data.products.sort((a, b) => a.price - b.price).filter(product => product.availableSizes.indexOf(state.sizeFilter) >= 0),
            priceFilter: value
          }
        );
      });
    }

    else if (value === 'highest') {
      setState(previousState => {
        return (
          {
            ...previousState,
            products: data.products.sort((a, b) => b.price - a.price).filter(product => product.availableSizes.indexOf(state.sizeFilter) >= 0),
            priceFilter: value
          }
        );
      });
    }

    else {
      setState(previousState => {
        return (
          {
            ...previousState,
            products: data.products.sort((a, b) => b.id - a.id).filter(product => product.availableSizes.indexOf(state.sizeFilter) >= 0),
            priceFilter: value
          }
        );
      });
    }
  }

  function handleSize(e) {
    const value = e.target.value;
    if (value == "") {
      setState(previousState => {
        return (
          {
            ...previousState,
            products: data.products,
            sizeFilter: value
          }
        );
      });
    }
    else {
      setState(previousState => {
        return (
          {
            ...previousState,
            products: data.products.filter(product => product.availableSizes.indexOf(value) >= 0),
            sizeFilter: value
          }
        );
      });
    }
  }

  function addToCart(product) {
    const cartItems = state.cartItems.slice();
    let alreadyExist = false;
    cartItems.forEach(item => {
      if (item.id === product.id) {
        item.count += 1;
        alreadyExist = true;
      }
    })
    if (!alreadyExist) {
      cartItems.push({ count: 1, ...product });
    }
    console.log(cartItems);
    setState(previousState => {
      return (
        {
          ...previousState,
          cartItems: cartItems
        }
      );
    });
  }

  return (
    <div >
      <NavBar />
      <div className='content'>
        <Filter
          count={state.products.length}
          handleSort={handleSort}
          handleSize={handleSize}
          sizeFilter={state.sizeFilter}
          priceFilter={state.priceFilter}
        />
        <SideBar cartItems={state.cartItems} />

      </div>
      <div>
        <Product
          products={state.products}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default App;
