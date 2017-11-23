/**
 * Author：dengyu
 * Time：2017/11/23
 * Description：Description
 */

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import test from './test';

const reducers = Object.assign({
    test,
    routing: routerReducer
});

const rootReducer = combineReducers(reducers);
export default rootReducer;