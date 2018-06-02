import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './App.js';
import { counter } from './index.redux.js';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {};
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
    )
);

class Test extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props);
        return <h2>测试组件</h2>
    }
}
ReactDom.render(
    ( <Provider store={store} >
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>club-one</Link>
                    </li>
                    <li>
                        <Link to='/erying'>club-two</Link>
                    </li>
                    <li>
                        <Link to='/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/:location' component={Test}></Route>
            </div>
        </BrowserRouter>
    </Provider> ),
  document.getElementById('root')
);


