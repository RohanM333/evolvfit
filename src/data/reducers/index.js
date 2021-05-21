import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user'
import dishes from './dishes'

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['user','dishes']
}

const rootReducer = combineReducers({ 
    user,
    dishes,
 });

export default persistReducer(persistConfig , rootReducer); 
