import React from 'react';
import './Offer.css';

function Offer() {
    return (
        <div className='offer-container'>
            <h1 class='display-6'>Our Service.</h1>
            <div className='offer'>
                <div className='offer-element'>
                    <i class="fas fa-tshirt"></i>
                    <h4>Quality Products</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                </div>
                <div className='offer-element'>
                    <i class="fas fa-luggage-cart"></i>
                    <h4>24 hours Delivery</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                </div>
                <div className='offer-element'>
                    <i class="fas fa-hand-holding-usd"></i>
                    <h4>Refund</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                </div>
            </div>
            <h1 id='our-products' class='display-6'>Our Products.</h1>
        </div>
    );
}

export default Offer;