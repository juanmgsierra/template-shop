import { takeEvery, put, call } from 'redux-saga/effects';
import { loginWithProvider, loginWithEmail, logOut } from "../../server/firebase"
import {
    LOGIN_REQUEST_GOOGLE,
    LOGIN_REQUEST_FACEBOOK,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST
} from '../constants/actions-types';


function* login(action) {
    try {
        const data = yield call(loginWithEmail,action.usuario)
        yield put({ type: LOGIN_SUCCESS, data })
    }catch(error){
        yield put({ type: LOGIN_ERROR, error });
    }
}

function* loginBtn(action) {
    try {
        const data = yield call(loginWithProvider, action.provider)
        yield put({ type: LOGIN_SUCCESS, data })

    } catch (error) {
        yield put({ type: LOGIN_ERROR, error });
    }
}

function* logOutSession() {
    try {
        yield call(logOut);
    } catch (error) {
        yield put({ type: LOGIN_ERROR, error });
    }
}


export function* rootSession() {
    yield takeEvery(LOGIN_REQUEST, login);
    yield takeEvery(LOGIN_REQUEST_GOOGLE, loginBtn);
    yield takeEvery(LOGIN_REQUEST_FACEBOOK, loginBtn);
    yield takeEvery(LOGOUT, logOutSession);
}