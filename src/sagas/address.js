import { takeEvery, put, call } from 'redux-saga/effects';
import { obtenerDirecciones } from '../../server/api'
import {
    ADDRESS_REQUEST,
    ADDRESS_SUCCESS,
    SAVE_ADDRESS,
    ADDRESS_ERROR
} from '../constants/actions-types';

function* getAddress(action){
    try {
        const data = yield call(obtenerDirecciones, action.usuario)
        yield put({type:ADDRESS_SUCCESS,data});
    } catch (error) {
        yield put({ type: ADDRESS_ERROR, error });
    }
}

export function* rootAddress() {
    yield takeEvery(ADDRESS_REQUEST, getAddress);
    
}