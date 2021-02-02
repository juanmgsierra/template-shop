import { 
    LOGIN_REQUEST,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
 }  from '../constants/actions-types';

const initialState = {
    user: {
        displayName: "",
        email: "",
        photoURL: "", 
        id:""          
    },
    error: null,
    fetching: false
};

const sessionReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, fetching: true };
        case LOGIN_SUCCESS:            
            return { ...state, user: {...action.data}, fetching: false };
        case LOGOUT: 
            return {...state, user: initialState.user , fetching: false };
        case LOGIN_ERROR:
            return { ...state, error: action.error, fetching: false };
        default:
            return state;
    }
}

export default sessionReducer;