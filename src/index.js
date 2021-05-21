import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import rootreducer from './data/reducers/index'


const store = createStore(rootreducer)
const persistor = persistStore(store);

ReactDOM.render( 
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App /> 
        </PersistGate>
    </Provider>
, document.getElementById('root'));


