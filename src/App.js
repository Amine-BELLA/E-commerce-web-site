import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Product from './components/Product/Product';
import NavBar from './components/NavBar/NavBar';
import Filter from './components/Filter/Filter';
import SideBar from './components/SideBarTop/SideBarTop';
import SideBarTop from './components/SideBarTop/SideBarTop';
import SideBarMiddle from './components/SideBarMiddle/SideBarMiddle';


function App() {
  const [state, setState] = useState({
    products: data.products,
    sizeFilter: '',
    priceFilter: '',
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
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
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  function removeItem(item) {
    var cartItems = state.cartItems.slice();
    setState(previousState => {
      return (
        {
          ...previousState,
          cartItems: cartItems.filter(element => element.id !== item.id)
        }
      );
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(element => element.id !== item.id)));
  }

  return (
    <div >
      <NavBar />
      <div className='content-top'>
        <Filter
          count={state.products.length}
          handleSort={handleSort}
          handleSize={handleSize}
          sizeFilter={state.sizeFilter}
          priceFilter={state.priceFilter}
        />
        <SideBarTop cartItems={state.cartItems} />

      </div>
      <div className='content-middle'>
        <Product
          products={state.products}
          addToCart={addToCart}
        />
        <SideBarMiddle
          cartItems={state.cartItems}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}

export default App;
