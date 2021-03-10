import { combineReducers } from 'redux';
import sessionReducer from './session';
import addressReducer from './address';

const rootReducer = combineReducers({
    session: sessionReducer,
    userAddress: addressReducer
});

export default rootReducer;