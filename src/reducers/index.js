import { combineReducers } from 'redux';
import sessionReducer from './session';
import addressReducer from './address';
import { persistReducer } from 'redux-persist';
import storage from '../store/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['session']
}

const rootReducer = combineReducers({
    session: sessionReducer,
    userAddress: addressReducer
});

export default persistReducer(persistConfig, rootReducer);