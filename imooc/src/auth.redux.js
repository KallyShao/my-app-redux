/*
* @Author: Administrator
* @Date:   2018-06-03 11:46:32
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-03 17:05:11
*/

const LOGIN = 'LOGIN'; //2个操作（action），登录和退出
const LOGOUT = 'LOGOUT';


//reducer
export function auth(state = {
    isAuth: false,
    user: '李云龙'
  }, action) {
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
        default:
          return state;
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
