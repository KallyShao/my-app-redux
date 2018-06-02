/*
 * @Author: Administrator
 * @Date:   2018-05-17 21:10:07
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-05-27 23:27:24
 */
import { createStore } from 'redux';
//1. 新建store
//通过reducer(counter)建立
//根据老的state和action生成新的state

function counter(state = 0, action){
    switch(action.type){
        case '加机关枪':
            return state + 1;
        case '减机关枪':
            return state - 1;
        default:
            return 10;
    }
}
const store = createStore(counter);
const init = store.getState();
function listener(){  //订阅事件，用来监听state的变化
    const current = store.getState();
    console.log('现在的机关枪数量是：' + current);
}
store.subscribe(listener);  //订阅，在react中，订阅的是render函数，每次状态发生改变都会重新渲染

//2. 派发事件，在跟react结合使用时，dispatch函数是传递给组件的，内部可以调用修改状态
store.dispatch({
    type: '加机关枪'
})
store.dispatch({
    type: '加机关枪'
})
store.dispatch({
    type: '减机关枪'
})
store.dispatch({
    type: '加机关枪'
})

