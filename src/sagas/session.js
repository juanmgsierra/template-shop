import { takeEvery, put, call } from 'redux-saga/effects';
import { loginWithGoogle, logOut } from "../../server/firebase"
import { 
    LOGIN_REQUEST,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
 }  from '../constants/actions-types';

function* login(){
    try {
        //yield put({ type: LOGIN_REQUEST });
        const data = yield call(loginWithGoogle)
        yield put({type:LOGIN_SUCCESS, data})
        
    } catch (error) {        
        yield put({ type: LOGIN_ERROR, error });
    }
} 

function* logOutSession(){
    try {
        yield call(logOut);
        //yield put({type:LOGOUT})
    } catch (error) {
        yield put({ type: LOGIN_ERROR, error });
    }
}

/*
export default function * rootLog () {
    yield fork(login)
    yield fork(logOutSession)
}*/
  
export function* rootSession() {
    yield takeEvery(LOGIN_REQUEST, login);
    yield takeEvery(LOGOUT, logOutSession);
}