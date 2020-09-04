import React from 'react';
import './SideBarTop.css';

function SideBarTop(props) {
    return (
        <div>
            {
                props.cartItems.length === 0 ? <div>You have 0 items in the cart</div> : <div>You have {props.cartItems.length} Items</div>
            }
        </div>
    );
}

export default SideBarTop;