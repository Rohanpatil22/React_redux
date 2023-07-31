import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import count from './reducer/count';

const rootReducer=combineReducers({
    count,
})

const store=configureStore(rootReducer);

export default store;