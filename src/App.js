import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Product from './components/Product/Product';
import NavBar from './components/NavBar/NavBar';
import Filter from './components/Filter/Filter';
import SideBar from './components/SideBarTop/SideBarTop';
import SideBarTop from './components/SideBarTop/SideBarTop';
import SideBarMiddle from './components/SideBarMiddle/SideBarMiddle';
import CheckOutForm from './components/CheckOutForm/CheckOutForm';
import LandingPage from './components/LandingPage/LandingPage';
import Offer from './components/Offer/Offer';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [state, setState] = useState({
    products: data.products,
    sizeFilter: '',
    priceFilter: '',
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    proceed: false
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

  function handleProceed() {
    setState(previousState => {
      return (
        {
          ...previousState,
          proceed: true
        }
      );
    });
  }

  return (
    <Provider store={store}>
      <div >
        <NavBar />
        <LandingPage />
        <div className='content-top'>
          <Filter
            count={state.products.length}
            handleSort={handleSort}
            handleSize={handleSize}
            sizeFilter={state.sizeFilter}
            priceFilter={state.priceFilter}
          />
          <SideBarTop cartItems={store.getState().cartItems} />

        </div>
        <div className='content-middle'>
          <Product
          />
          <div>
            <SideBarMiddle
              removeItem={removeItem}
              handleProceed={handleProceed}
            />
            <CheckOutForm proceed={state.proceed} />
          </div>
        </div>
        <Offer />
      </div>
    </Provider>
  );
}

export default App;
