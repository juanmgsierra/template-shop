import { 
    LOGIN_REQUEST,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
 }  from '../constants/action-types';

const initialState = {
    user: {},
    error: null,
    fetching: false
};

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, fetching: true };
        case LOGIN_SUCCESS:
            return { ...state, user: {...state.user }, fetching: false };
        case LOGOUT: 
            return {...state, user: {...state.user }, fetching: false };
        case LOGIN_ERROR:
            return { ...state, error: action.error, fetching: false };
        default:
            return state;
    }
}

export default logReducer;