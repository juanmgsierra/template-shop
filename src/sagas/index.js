import { all } from 'redux-saga/effects';
import { rootSession } from './session';
import { rootAddress } from "./address";

export default function* rootSaga() {
    yield all([
        rootSession(),
        rootAddress()
    ]);
}