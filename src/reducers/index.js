import { combineReducers } from 'redux';
import logReducer from './log';

const rootReducer = combineReducers({
    log: logReducer
});

export default rootReducer;