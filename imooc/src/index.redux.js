/*
* @Author: Administrator
* @Date:   2018-05-27 23:19:05
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-03 17:05:01
*/

//定义action.type
const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';



//reducer
export function counter(state = 0, action){
    switch(action.type){
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state - 1;
        default:
            return 10;
    }
}

//action creator
export function addGun(){
    return {
        type: ADD_GUN
    }
}
export function removeGun(){
    return {
        type: REMOVE_GUN
    }
}
export function addGunAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun());
        }, 2000);
    }
}