import { takeEvery, put, call } from 'redux-saga/effects';
import { obtenerCarrito, saveCart, deleteCart } from '../../server/api'
import { 
    CART_REQUEST,
    CART_SUCCESS,
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    CART_ERROR
} from '../constants/actions-types';

function* getCart(action){
    try {
        const data = yield call(obtenerCarrito,action.usuario)
        yield put({ type:CART_SUCCESS, data})
    } catch (error) {
        yield put({ type:CART_ERROR, error})
    }
}

function* addToCart(action){
    try {
        const data = yield call(obtenerCarrito,action.usuario)
        yield put({ type:CART_SUCCESS, data})
    } catch (error) {
        yield put({ type:CART_ERROR, error})
    }
} 

function* deleteToCart(action){
    try {
        const data = yield call(deleteCart,action.usuario)
        yield put({ type:CART_SUCCESS, data})
    } catch (error) {
        yield put({ type:CART_ERROR, error})
    }
} 

export function* rootCart(){
    yield takeEvery(CART_REQUEST, getCart);
    yield takeEvery(ADD_TO_CART, addToCart);
    yield takeEvery(REMOVE_FROM_CART, deleteToCart);
}