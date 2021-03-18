import {
    ADDRESS_REQUEST,
    ADDRESS_SUCCESS,
    SAVE_ADDRESS,
    ADDRESS_ERROR,
    UPDATE_ADDRESS
} from '../constants/actions-types';

const initialState = {
    address: [],
    error: null,
    fetching: false
}

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDRESS_REQUEST:
            return { ...state, fetching: true };
        case ADDRESS_SUCCESS:     
            return { ...state, address: [...action.data], fetching: false };
        case SAVE_ADDRESS:  
        case UPDATE_ADDRESS:      
            return { ...state, address: action.data, fetching: false };
        case ADDRESS_ERROR:
            return { ...state, error: action.error, fetching: false };
        default:
            return state;
    }
}
export default addressReducer;