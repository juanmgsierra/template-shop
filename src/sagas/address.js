import { takeEvery, put, call } from 'redux-saga/effects';
import { deleteAddress, obtenerDirecciones, saveAddress, updateAddress } from '../../server/api'
import {
    ADDRESS_REQUEST,
    ADDRESS_SUCCESS,
    SAVE_ADDRESS,
    ADDRESS_ERROR,
    UPDATE_ADDRESS,
    LOAD_ADDRESS,
    UPDATING_ADDRESS,
    ADD_ADDRESS,
    REMOVE_ADDRESS,
    PREDETERMINED_ADDRESS,
    WATCH_SAVE_ADDRESS,
    WATCH_UPDATE_ADDRESS,
    WATCH_DELETE_ADDRESS,
    WATCH_PREDETERMINED_ADDRESS
} from '../constants/actions-types';

function* getAddress(action){
    try {
        console.log("obtener direcciones")
        const data = yield call(obtenerDirecciones, action.usuario)
        yield put({type:ADDRESS_SUCCESS,data});
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }
}

function* newAddress(action){
    try {
        yield put({type:UPDATING_ADDRESS});
        const data = yield call(saveAddress, action.uploadAddress)
        yield put({type:ADD_ADDRESS,data});
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }     
}

function* editAddress(action){
    try {
        yield put({type:UPDATING_ADDRESS});
        const data = yield call(updateAddress, action.uploadAddress)
        yield put({type:LOAD_ADDRESS,data});
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }
}

function* removeAddress(action){
    try {
        yield call(deleteAddress,action.id);
        const id = action.id;
        yield put({type:REMOVE_ADDRESS, id})
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }
}

function* predeterminedAddress(action){
    try {
        yield put({type:UPDATING_ADDRESS});
        const data = yield call(updateAddress, action.direction)
        yield put({type:PREDETERMINED_ADDRESS, data})
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }
}

export function* rootAddress() {
    yield takeEvery(ADDRESS_REQUEST, getAddress);
    yield takeEvery(WATCH_SAVE_ADDRESS, newAddress);
    yield takeEvery(WATCH_UPDATE_ADDRESS, editAddress);  
    yield takeEvery(WATCH_DELETE_ADDRESS, removeAddress); 
    yield takeEvery(WATCH_PREDETERMINED_ADDRESS, predeterminedAddress) 
}