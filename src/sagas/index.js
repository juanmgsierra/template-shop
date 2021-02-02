import { all } from 'redux-saga/effects';
import { rootLog } from './log';

export default function* rootSaga() {
    yield all([
        rootLog()
    ]);
}