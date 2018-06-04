/*
* @Author: Administrator
* @Date:   2018-06-03 11:46:32
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-04 22:56:44
*/

import axios from 'axios';

const LOGIN = 'LOGIN'; //2个操作（action），登录和退出
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';

const initState = {
  isAuth: false,
  user: '李云龙',
  age: 20
}

//reducer
export function auth(state = initState, action) {
    console.log(state, action);
    switch (action.type) {
        case LOGIN:
          return {
            ...state,
            isAuth: true
          };
        case LOGOUT:
          return {
            ...state,
            isAuth: false
          };
        case USER_DATA:
          return {
            ...state, 
            ...action.payload
          }
        default:
          return state;
    }
}

//action
export function getUserData(){
  //dispatch用来通知数据修改
  return dispatch => {
      axios.get('/data').then(res => {
        if(res.status === 200){
          dispatch(userData(res.data));
        }
      });
  }
}
//action creator
export function login() {
    return {
        type: LOGIN
    }
}
export function logout() {
    return {
        type: LOGOUT
    }
}
export function userData(data){
    return {
      type: USER_DATA,
      payload: data
    }
}
