import React from 'react'
import './Filter.css';

function Filter() {
    return (
            <div className='filter-container'>
                <p>Products in cart</p>
                <select>
                    <option>Filter Products</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XLL</option>
                </select>
            </div>
    );
}

export default Filter;