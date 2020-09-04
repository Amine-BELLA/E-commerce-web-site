import React from 'react'
import './Product.css';

function Product(props) {
    return (
        <div className='products'>
            {
                props.products.map(product => {
                    return (
                        <div className='product'>
                            <div className='product-info' key={product.id}>
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