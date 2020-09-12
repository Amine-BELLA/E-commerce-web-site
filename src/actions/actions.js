import { DISPLAY_PRODUCTS, ADD_TO_CART } from './types';

export function displayProducts() {
    return {
        type: DISPLAY_PRODUCTS,
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}