import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link,  Redirect, Switch} from 'react-router-dom';

import Auth from './auth.js';
import Dashboard from './dashboard.js';
// import { counter } from './index.redux.js';
import reducers from './reducer.js';
import './config.js';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {};
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
    )
);
console.log(store.getState());

//登录：如果没有登录信息，统一跳转到Login页面
//页面 导航+显示+注销
//一营
//二营
//骑兵连
//router + redux
//根目录路由有2个：登录和页面

ReactDom.render(
    ( <Provider store={store} >
        <BrowserRouter>
            <Switch>
                {/* Switch只渲染命中的第一个组件，如果login和dashboard都没命中，就统一跳转到dashboard页面 */}
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider> ),
  document.getElementById('root')
);


