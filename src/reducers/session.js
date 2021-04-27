import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_GOOGLE,
    LOGIN_REQUEST_FACEBOOK,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SESSION_REQUEST,
    SESSION_SUCCESS,
    SESSION_ERROR
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
            return { ...state, fetching: true };
        case LOGIN_SUCCESS:
        case SESSION_SUCCESS:
            return { ...state, user: { ...action.data }, fetching: false };
        case LOGOUT:
            return { ...state, user: initialState.user, fetching: false };
        case LOGIN_ERROR:
        case SESSION_ERROR:
            return { ...state, error: action.error, fetching: false };
        default:
            return state;
    }
}

export default sessionReducer;