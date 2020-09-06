import { DISPLAY_PRODUCTS } from '../actions/types';

const initialState = {
    products: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_PRODUCTS:
            return {
                products: action.payload
            };

        default:
            return state;
    }
}

export default productReducer;