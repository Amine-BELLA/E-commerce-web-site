import { DISPLAY_PRODUCTS } from './types';

export function displayProducts(items) {
    return ({
        type: DISPLAY_PRODUCTS,
        payload: items
    });
}