import { DISPLAY_PRODUCTS, ADD_TO_CART } from '../actions/types';
import data from '../data.json';

const initialState = {
    products: [],
    // cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartItems: []
};

const rootReducer = (state = initialState, action) => {


    switch (action.type) {
        case DISPLAY_PRODUCTS:
            return {
                ...state,
                products: data.products
            };

        case ADD_TO_CART: {
            const cartItems = state.cartItems.slice();
            let alreadyExist = false;
            cartItems.forEach(item => {
                if (item.id === action.payload.id) {
                    item.count += 1;
                    alreadyExist = true;
                }
            });
            if (!alreadyExist) {
                cartItems.push({ count: 1, ...action.payload });
            }
            // localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return (
                {
                    ...state,
                    cartItems: cartItems
                }
            );
        }


        default:
            return state;
    }

}

export default rootReducer;