/*
* @Author: Administrator
* @Date:   2018-06-03 11:46:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-04 22:16:23
*/

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, getUserData } from './auth.redux.js';

//2个reducers，页面一个,auth一个，每个都有一个state
//合并reducers
@connect(
  state => state.auth,
  {
    login,
    getUserData
  }
)

class Auth extends React.Component {
  componentDidMount(){
    this.props.getUserData();
    // axios.get('/data').then(res => {
    //   console.log(res);
    // });
  }
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <div>
            <h1>名字是{ this.props.user }</h1>
            { this.props.isAuth ? <Redirect to='./dashboard' /> : null }
            <h2>你没有权限，需要登录才能看</h2>
            <button onClick={ this.props.login }>登录</button>
        </div>
    )
  }
}
export default Auth;