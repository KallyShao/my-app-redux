import React from 'react';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     soldiers: ['lily', 'lemon', 'sua']
  //   }
  // }

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
  handleClick(){
    this.setState({
      soldiers: [...this.state.soldiers, 'taotao']
    })
    console.log(this.state.soldiers);
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.soldiers.map((user, index) => {
              return <li key = {index}>{user}</li>
            })
          }
        </ul>
        <button onClick = {this.handleClick}>新兵入伍</button>
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