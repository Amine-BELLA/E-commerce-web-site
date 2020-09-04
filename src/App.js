import React, { useState } from 'react';
import data from './data.json';
import Product from './components/Product/Product';
import NavBar from './components/NavBar/NavBar';
import Filter from './components/Filter/Filter';

function App() {
  const [state, setState] = useState({
    products: data.products,
    sizeFilter: '',
    priceFilter: ''
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

  return (
    <div >
      <NavBar />
      <Filter
        count={state.products.length}
        handleSort={handleSort}
        handleSize={handleSize}
        sizeFilter={state.sizeFilter}
        priceFilter={state.priceFilter}
      />
      <Product products={state.products} />
    </div>
  );
}

export default App;
