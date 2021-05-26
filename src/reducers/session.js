import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_GOOGLE,
    LOGIN_REQUEST_FACEBOOK,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SESSION_REQUEST,
    SESSION_SUCCESS,
    SESSION_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS
} from '../constants/actions-types';

const initialState = {
    user: {
        displayName: "",
        email: "",
        celular: "",
        id: ""
    },
    error: null,
    fetching: false
};

const sessionReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGIN_REQUEST_FACEBOOK:
        case LOGIN_REQUEST_GOOGLE:
        case SESSION_REQUEST:
        case REGISTER_REQUEST:   
        case RESET_PASSWORD_REQUEST:     
            return { ...state, fetching: true, error: null};
        case LOGIN_SUCCESS:
        case SESSION_SUCCESS:
        case REGISTER_SUCCESS:
            return { ...state, user: { ...action.data }, fetching: false, error: null };
        case RESET_PASSWORD_SUCCESS:
            return { ...state, fetching: false, error: null}
        case LOGOUT:
            return { ...state, user: initialState.user, fetching: false };
        case LOGIN_ERROR:
        case SESSION_ERROR:
        case REGISTER_ERROR:
            return { ...state, error: action.error, fetching: false };
        case "persist/REHYDRATE":
            return { ...state, error: null, fetching: false };
        default:
            return state;
    }
}

export default sessionReducer;