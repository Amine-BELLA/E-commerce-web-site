import React from 'react'
import data from '../../data.json';
import './Product.css';

function Product() {
    return (
        <div className='products'>
            {
                data.products.map(product => {
                    return (
                        <div className='product'>
                            <div className='product-info' key={product._id}>
                                <img src={product.image} />
                                <p>{product.title}</p>
                            </div>
                            <div className='product-purchase'>
                                <h6>{`$${product.price}`}</h6>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Product;