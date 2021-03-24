import { combineReducers } from 'redux';
import sessionReducer from './session';
import addressReducer from './address';
import { persistReducer } from 'redux-persist';
import storage from '../store/storage';
import { LOGOUT } from '../constants/actions-types'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['session']
}

const appReducer = combineReducers({
    session: sessionReducer,
    userAddress: addressReducer
});

const rootReducer = (state, action) => {
    if(action.type === LOGOUT){
        state = undefined;
    }
    return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer);