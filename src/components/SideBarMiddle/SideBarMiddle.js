import React, { useState } from 'react';
import './SideBarMiddle.css';
import Fade from 'react-reveal/Fade';

function SideBarMiddle(props) {

    return (
        <div>
            <div>
                {
                    props.cartItems.map(item => {
                        return (
                            <Fade>
                                <div className='cart-item'>
                                    <img src={item.image} />
                                    <div>
                                        <p>{item.title}</p>
                                        <div className='item-info'>
                                            <h6>{`${item.count} x $${item.price}`}</h6>
                                            <button onClick={() => props.removeItem(item)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        );

                    })
                }
            </div>
            <div>
                {
                    props.cartItems.length !== 0 &&
                    <div className='proceed'>
                        <h5>{`Total: $${props.cartItems.reduce((total, item) => total + item.price * item.count, 0)}`}</h5>
                        <button onClick={props.handleProceed}>Proceed</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default SideBarMiddle;