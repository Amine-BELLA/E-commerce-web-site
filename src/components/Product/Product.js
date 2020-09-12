import React, { useState, useEffect } from 'react'
import './Product.css';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { displayProducts, addToCart } from '../../actions/actions';

function Product(props) {

    useEffect(() => props.display(), []);

    const [modal, setModal] = useState(null);
    function openModal(product) {
        setModal(product);
    }

    function closeModal() {
        setModal(null);
    }

    return (
        <div>
            <div className='products'>
                {
                    props.products.map(product => {
                        return (
                            <Fade>
                                <div key={product.id} className='product'>
                                    <div className='product-info'>
                                        <a id='link' href={'#' + product.id} onClick={() => openModal(product)}>
                                            <img src={product.image} />
                                            <p>{product.title}</p>
                                        </a>
                                    </div>
                                    <div className='product-purchase'>
                                        <h6>{`$${product.price}`}</h6>
                                        <button onClick={() => props.addToCart(product)}>Add to Cart</button>
                                    </div>
                                </div>
                            </Fade>
                        )
                    })
                }
            </div>
            {/* {
                modal &&
                <Modal
                    isOpen={true}
                    onRequestClose={closeModal}
                >
                    <button onClick={closeModal}>X</button> <br />
                    <div className='modal-container'>
                        <img src={modal.image} />
                        <div className='modal-infos'>
                            <h4>{modal.title}</h4>
                            <p>{modal.description}</p>
                            <div className='modal-purchase'>
                                <h5>{`Price: $${modal.price}`}</h5>
                                <button onClick={() => props.addToCart(modal)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                </Modal>
            } */}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        display: () => dispatch(displayProducts()),
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);