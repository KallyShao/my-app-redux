/*
* @Author: Administrator
* @Date:   2018-05-22 22:19:00
* @Last Modified by:   Administrator
* @Last Modified time: 2018-05-27 22:38:14
*/

import React from 'react';
import {Button, List} from 'antd-mobile';
const Item = List.Item;

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>独立团</h2>
        <A1  name1 = 'kally'/>
        <A2 />
        <A3 name1 = 'kally112'/>
      </div>
    )
  }
}

class A1 extends React.Component {
  constructor(){
    super();
    this.state = {
      soldiers: ['lily', 'lemon', 'sua']
    }
    this.handleClick = this.handleClick.bind(this); //强制把handleClick的this绑定在当前class的this之上
  }
  componentWillMount(){
    console.log('组件现在还没加载，但马上要加载了');
  }
  componentDidMount(){
    console.log('组件已经加载完毕');
  }
  handleClick(){
    this.setState({
      soldiers: [...this.state.soldiers, 'taotao']
    })
    console.log(this.state.soldiers);
  }
  render() {
    console.log('组件正在加载');
    return (
      <div>
        <List renderHeader = {() => '士兵列表'}>
          {
            this.state.soldiers.map((user, index) => {
              return <Item key = {index}>{user}</Item>
            })
          }
        </List>
        <Button onClick = {this.handleClick} type="primary">新兵入伍</Button>
      </div>
      )
  }
}
class A2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name2: 'xuxu' 
    }
  }
  render() {
    return <h2>A2</h2>
  }
}

function A3(props){  //如果组件内只有rend()函数，则可以写成这样的无状态组件
  return <h2>A3, {props.name1}</h2>
}

export default App;