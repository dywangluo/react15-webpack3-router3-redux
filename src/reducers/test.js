/**
 * Author：dengyu
 * Time：2017/11/23
 * Description：Description
 */

import { TESTLOGIN } from '../constants/index';

const stateInit = {
    id: '',
};

const test = (state = stateInit, action) => {
    switch (action.type) {
        case TESTLOGIN:
            return Object.assign({}, state, { id: action.id });
            break;
        default:
            return state;
    }
};

export default test;