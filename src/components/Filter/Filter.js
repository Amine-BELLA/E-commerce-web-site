import React from 'react'
import './Filter.css';

function Filter(props) {
    return (
        <div className='filter'>
            <div className='filter-count'>
                {props.count} Products
            </div>

            <div className='filter-product'>
                Price Filter {` `}
                <select value={props.priceFilter} onChange = {props.handleSort}>
                    <option value='newest'>Newest</option>
                    <option value='lowest'>Lowest</option>
                    <option value='highest'>Highest</option>
                </select>
            </div>

            <div className='filter-size'>
                Size Filter {` `}
                <select value={props.sizeFilter} onChange = {props.handleSize}>
                    <option value=''>All</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                    <option value='XXL'>XXL</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;