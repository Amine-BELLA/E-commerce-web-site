import React from 'react';
import './SideBarTop.css';

function SideBarTop(props) {
    return (
        <div>
                {
                    props.cartItems.length === 0 ?
                        <div>You have 0 products</div> :
                        <div>You have {props.cartItems.length} Products</div>
                }
        </div>
    );
}

export default SideBarTop;