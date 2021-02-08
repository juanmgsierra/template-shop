import { takeEvery, put, call } from 'redux-saga/effects';
import { loginWithProvider, logOut } from "../../server/firebase"
import { 
    LOGIN_REQUEST_GOOGLE,
    LOGIN_REQUEST_FACEBOOK,    
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
 }  from '../constants/actions-types';

function* login(provider){
    try {           
        const data = yield call(loginWithProvider,provider)
        yield put({type:LOGIN_SUCCESS, data})
        
    } catch (error) {        
        yield put({ type: LOGIN_ERROR, error });
    }
} 

function* logOutSession(){
    try {
        yield call(logOut);        
    } catch (error) {
        yield put({ type: LOGIN_ERROR, error });
    }
}

  
export function* rootSession() {
    yield takeEvery(LOGIN_REQUEST_GOOGLE, login, "google");
    yield takeEvery(LOGIN_REQUEST_FACEBOOK, login, "facebook");
    yield takeEvery(LOGOUT, logOutSession);
}