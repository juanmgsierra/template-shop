import { all } from 'redux-saga/effects';
import { rootSession } from './session';

export default function* rootSaga() {
    yield all([
        rootSession()
    ]);
}