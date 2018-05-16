import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './es6.js';
import registerServiceWorker from './registerServiceWorker';


class Index extends React.Component{
	static childContextTypes = {      //childContextTypes是react里定义的，不能更改
		themeColor: PropTypes.string  //验证_getChildContext返回的对象，即验证themeColor是不是字符串
	}
	constructor(){
		super();
		this.state = {
			themeColor: 'red'
		}
	}
	componentDidMount(){
		this.setState({
			themeColor: '#0f0'
		})
	}
	getChildContext(){  //getChildContext是react里定义的，不能更改
		return {themeColor: this.state.themeColor}  //这个返回的对象是子树的context
	}
	render(){
		return(
			<div>
				<Header />
				<Main />
			</div>
			)
	}
}

class Header extends React.Component{
	static contextTypes = {
		themeColor: PropTypes.string
	}
	render(){
		return(
			<div  style = {{color: this.context.themeColor}}>
				<h2>This is the header</h2>
				<Title/>
			</div>
			)
	}
}

class Title extends React.Component{
	render(){
		return(
			<h2>小书标题</h2>
			)
	}
}

class Main extends React.Component{
	render(){
		return(
			<div>
				<h2>This is main</h2>
				<Content />
			</div>
			)
	}
}

class Content extends React.Component{
	render(){
		return(
			<div>小书内容</div>
			)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
