/*
* @Author: Administrator
* @Date:   2018-06-04 22:59:09
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-04 23:10:18
*/

import axios from 'axios';
import { Toast } from 'antd-mobile';

//拦截请求
axios.interceptors.request.use(function(config){
    Toast.loading('加载中', 0); //在发送请求的时候加Loading
    return config;
})

//拦截响应
axios.interceptors.response.use(function(config){
    setTimeout(() => {
        Toast.hide();
    }, 2000);
    return config;
})