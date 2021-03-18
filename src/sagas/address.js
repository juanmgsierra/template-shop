import { takeEvery, put, call } from 'redux-saga/effects';
import { obtenerDirecciones, saveAddress, updateAddress } from '../../server/api'
import {
    ADDRESS_REQUEST,
    ADDRESS_SUCCESS,
    SAVE_ADDRESS,
    ADDRESS_ERROR,
    UPDATE_ADDRESS
} from '../constants/actions-types';

function* getAddress(action){
    try {
        const data = yield call(obtenerDirecciones, action.usuario)
        yield put({type:ADDRESS_SUCCESS,data});
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }
}

function* newAddress(action){
    try {
        const data = yield call(saveAddress, action.address)
        yield put({type:ADDRESS_SUCCESS,data});
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }     
}

function* editAddress(action){
    try {
        const data = yield call(updateAddress, action.address)
        yield put({type:ADDRESS_SUCCESS,data});
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }
}

export function* rootAddress() {
    yield takeEvery(ADDRESS_REQUEST, getAddress);
    yield takeEvery(SAVE_ADDRESS, newAddress);
    yield takeEvery(UPDATE_ADDRESS, editAddress);    
}