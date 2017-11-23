/**
 * Author：dengyu
 * Time：2017/11/23
 * Description：Description
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

const rootRoutes = <div>
    <Route path="/" getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Login').default)
        }, 'Login')
    }}>
    </Route>
    <Route path="/test" getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Test').default)
        }, 'Test')
    }}>
    </Route>
</div>;

export default rootRoutes;