/**
 * Author：dengyu
 * Time：2017/11/23
 * Description：Description
 */

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {hashHistory} from 'react-router'

import rootReducer from '../reducers/index';

const router = routerMiddleware(hashHistory);
export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, router)
));
