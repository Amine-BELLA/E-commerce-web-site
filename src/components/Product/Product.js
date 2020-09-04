import React from 'react'
import './Product.css';

function Product(props) {
    return (
        <div className='products'>
            {
                props.products.map(product => {
                    return (
                        <div key={product.id} className='product'>
                            <div className='product-info'>
                                <img src={product.image} />
                                <p>{product.title}</p>
                            </div>
                            <div className='product-purchase'>
                                <h6>{`$${product.price}`}</h6>
                                <button onClick={() => props.addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Product;