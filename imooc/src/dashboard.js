/*
* @Author: Administrator
* @Date:   2018-06-03 11:48:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-06-04 21:36:14
*/

import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './auth.redux.js';

import App from './App.js';
function Erying(){
    return <h2>二营</h2>
}
function Qibinglian(){
    return <h2>骑兵连</h2>
}

@connect(
    state => state.auth,
    { logout }  //登出的函数
)


class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                { this.props.isAuth ? <button onClick={ this.props.logout }>注销</button> : null }
                <ul>
                    <li>
                        <Link to={ `${this.props.match.url}/` }>一营</Link>
                    </li>
                    <li>
                        <Link to={ `${this.props.match.url}/erying` }>二营</Link>
                    </li>
                    <li>
                        <Link to={ `${this.props.match.url}/qibinglian` }>骑兵连</Link>
                    </li>
                </ul>
                <Route exact path={ `${this.props.match.url}/` } component={App}></Route>
                <Route path={ `${this.props.match.url}/erying` } component={Erying}></Route>
                <Route path={ `${this.props.match.url}/qibinglian` } component={Qibinglian}></Route>
            </div>
        );
        return this.props.isAuth ? app : redirectToLogin;
    }
}
export default Dashboard;