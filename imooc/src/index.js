/*
* @Author: Administrator
* @Date:   2018-05-16 13:34:46
* @Last Modified by:   Administrator
* @Last 
Modified time: 2018-05-16 13:34:46
*/
const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}
function renderApp(appState){
	console.log('render app...');
	renderTitle(appState.title);
	renderContent(appState.content);
}

function renderTitle(title){
	console.log('render title...');
	const titleDOM = document.getElementById('title');
	titleDOM.innerHTML = title.text;
	titleDOM.style.color = title.color;
}

function renderContent(content){
	console.log('render content...');
	const contentDOM = document.getElementById('content');
	contentDOM.innerHTML = content.text;
	contentDOM.style.color = content.color;
}

// function dispatch(action){
// 	switch(action.type){
// 		case 'UPDATE_TITLE_TEXT':
// 			appState.title.text = action.text;
// 			break;
// 		case 'UPDATE_TITLE_COLOR':
// 			appState.title.color = action.color;
// 			break;
// 		default: 
// 			break;
// 	}
// }

//createStore
function createStore(state, stateChanger){
	const listeners = [];
	const subscribe = (listener) => listeners.push(listener);
	const getState = () => state; //state是传进来的回调函数
	const dispatch = (action) => {
		stateChanger(state, action);
		listeners.forEach((listener) => listener());
	};
	return {getState, dispatch, subscribe};
}

function stateChanger(state, action){
	switch(action.type){
		case 'UPDATE_TITLE_TEXT':
			appState.title.text = action.text;
			break;
		case 'UPDATE_TITLE_COLOR':
			appState.title.color = action.color;
			break;
		default: 
			break;
	}
}
const store = createStore(appState, stateChanger);
store.subscribe(() => renderApp(store.getState()));

renderApp(store.getState());   //初始化渲染
store.dispatch({ 
	type: 'UPDATE_TITLE_TEXT',
	text: '《React.js 小书》'
})
store.dispatch({
	type: 'UPDATE_TITLE_COLOR',
	color: 'green'
})


