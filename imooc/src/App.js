/*
* @Author: Administrator
* @Date:   2018-05-27 22:45:56
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-31 21:53:55
*/

import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync} from './index.redux.js';

// const mapStatetoProps = (state) => {
//   return {
//     num: state  //把状态放入props中，即把属性加入props
//   }
// };
// const actionCreator = { addGun, removeGun, addGunAsync};  //addGun这3个参数被放入props中，即把方法加入props

// App = connect(mapStatetoProps, actionCreator)(App);  //connect是一个高阶组件
// @connect(mapStatetoProps, actionCreator)  //装饰器的写法
@connect(state => ({num :state}), { addGun, removeGun, addGunAsync})  //箭头函数的函数体用()包起来表示return，？？？


class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     soldiers: ['lily', 'lemon', 'sua']
  //   }
  // }

  render() {
    const store = this.props.store;   
    const num = this.props.num;

    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    return (
      <div>
        <h2>现在有机枪{num}把</h2>
        <button onClick = {addGun}>申请武器</button>
        <button onClick = {removeGun}>回收武器</button>
        <button onClick = {addGunAsync}>拖2天再给</button>
      </div>
    )
  }
}


export default App;