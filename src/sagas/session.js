import { takeEvery, put, call } from 'redux-saga/effects';
import { loginWithProvider, loginWithEmail, registerWithEmail, logOut, resetPass } from "../../server/firebase"
import { editarPerfil } from '../../server/api'
import {
    LOGIN_REQUEST_GOOGLE,
    LOGIN_REQUEST_FACEBOOK,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    SESSION_REQUEST,
    SESSION_SUCCESS,
    SESSION_ERROR,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS
} from '../constants/actions-types';


function* login(action) {
    try {
        const data = yield call(loginWithEmail,action.usuario)
        yield put({ type: LOGIN_SUCCESS, data });
    }catch(error){
        yield put({ type: LOGIN_ERROR, error });
    }
}

function* loginBtn(action) {
    try {
        const data = yield call(loginWithProvider, action.provider)
        yield put({ type: LOGIN_SUCCESS, data });

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

function* register(action){
    try {
        const data = yield call(registerWithEmail, action.usuario);
        yield put({ type: REGISTER_SUCCESS, data });

    } catch (error) {
        yield put({type:REGISTER_ERROR, error});
    }
}

function* updateSesion(action){
    try {        
        const data = yield call(editarPerfil, action.usuario);
        yield put({type:SESSION_SUCCESS, data});
    } catch (error) {
        yield put({type:SESSION_ERROR, error});
    }
}

function* resetPassword(action){
    try {
        yield call(resetPass, action.email);
        yield put({type:RESET_PASSWORD_SUCCESS})
    } catch (error) {
        yield put({type:SESSION_ERROR, error});
    }
}

export function* rootSession() {
    yield takeEvery(LOGIN_REQUEST, login);
    yield takeEvery(LOGIN_REQUEST_GOOGLE, loginBtn);
    yield takeEvery(LOGIN_REQUEST_FACEBOOK, loginBtn);
    yield takeEvery(REGISTER_REQUEST,register);
    yield takeEvery(LOGOUT, logOutSession);
    yield takeEvery(SESSION_REQUEST,updateSesion);
    yield takeEvery(RESET_PASSWORD_REQUEST, resetPassword)
}