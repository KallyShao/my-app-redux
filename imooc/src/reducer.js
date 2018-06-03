/*
* @Author: Administrator
* @Date:   2018-06-03 16:20:25
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-03 16:31:54
*/

//合并所有reducer，并且返回
import { combineReducers } from 'redux';
import { counter } from './index.redux.js';
import { auth } from './auth.redux.js';

export default combineReducers({
    counter,
    auth
});