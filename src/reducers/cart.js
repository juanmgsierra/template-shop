import { 
    CART_REQUEST,
    CART_SUCCESS,
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    CART_ERROR
} from '../constants/actions-types';

const initialState = {
    cart: [],
    error:null,
    fetching: false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_REQUEST:
            return { ...state, fetching:true}
        case CART_SUCCESS:
            return { ...state, cart:[...action.data],fetching: false}
        case ADD_TO_CART:
            return { ...state, cart: state.products.map(product =>
                product.id === action.id ? {...product, selected: true} : product)
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.products.map(product =>
                product.id === action.id
                    ? {...cart, selected: false, quantity: 1}
                    : cart,
                ),
            };
    }
}

export default cartReducer;