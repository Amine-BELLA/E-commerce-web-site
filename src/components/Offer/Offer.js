import React from 'react';
import './Offer.css';
import Fade from 'react-reveal';

function Offer() {
    return (
        <div className='offer-container'>
            <h1 class='display-6'>Our Service.</h1>
            <Fade>
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
            </Fade>
        </div>
    );
}

export default Offer;