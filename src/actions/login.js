/**
 * Author：dengyu
 * Time：2017/11/23
 * Description：Description
 */

import axios from 'axios';
import qs from 'qs';
import {hashHistory} from 'react-router';
import {Modal} from 'antd';
import { TESTLOGIN, JAVAURL } from '../constants/index';

export const login = (id, pwd) => {
    return (dispatch) => {
        // axios({
        //     method: "post",
        //     url: JAVAURL + '/login/login.do',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     data: qs.stringify({
        //         id: id,
        //         pwd: pwd
        //     })
        // })
        // .then(function(response){
        //     if(response.data.status == 'S'){
                dispatch({
                    type: TESTLOGIN,
                    id: id,
                });
                hashHistory.push('/test');
        //     } else {
        //         Modal.warning({
        //             title: response.data.msg,
        //             content:  '',
        //         });
        //     }
        // })
        // .catch(function(error){
        //     console.log(error);
        // });

    }
};
