/*
* @Author: Administrator
* @Date:   2018-05-16 13:34:46
* @Last Modified by:   Administrator
* @Last 
Modified time: 2018-05-16 13:34:46
*/
// import './es6.js';

// const appState = {
//   title: {
//     text: 'React.js 小书',
//     color: 'red',
//   },
//   content: {
//     text: 'React.js 小书内容',
//     color: 'blue'
//   }
// }
function renderApp(newAppState, oldAppState = {}){
	if(newAppState === oldAppState) return;
	console.log('render app...');
	renderTitle(newAppState.title, oldAppState);
	renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle = {}){
	if(newTitle === oldTitle) return;
	console.log('render title...');
	const titleDOM = document.getElementById('title');
	titleDOM.innerHTML = newTitle.text;
	titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}){
	if(newContent === oldContent) return;
	console.log('render content...');
	const contentDOM = document.getElementById('content');
	contentDOM.innerHTML = newContent.text;
	contentDOM.style.color = newContent.color;
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
function createStore(reducer){
	let state = null;
	const listeners = [];
	const subscribe = (listener) => listeners.push(listener);
	const getState = () => state; //state是传进来的回调函数
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	};
	dispatch({}); //初始化state
	return {getState, dispatch, subscribe};
}

function reducer(state, action){
	if(!state){
		return {
			title: {
			  text: 'React.js 小书',
			  color: 'red',
			},
			content: {
			  text: 'React.js 小书内容',
			  color: 'blue'
			}
		}
	}
	switch(action.type){
		case 'UPDATE_TITLE_TEXT':
			return {
				...state,
				text: action.text
			};
		case 'UPDATE_TITLE_COLOR':
			return {
				...state,
				color: action.color
			};
		case 'UPDATE_CONTENT_COLOR':
			return {
				...state,
				color: action.color
			};
		default: 
			return state;
	}
}
const store = createStore(appState, reducer);
let oldState = store.getState();
store.subscribe(() => {
	const newState = store.getState();
	renderApp(newState, oldState);
	oldState = newState;
});

renderApp(store.getState());   //初始化渲染
store.dispatch({ 
	type: 'UPDATE_TITLE_TEXT',
	text: '《React.js 小书》'
})
store.dispatch({
	type: 'UPDATE_TITLE_COLOR',
	color: 'green'
})
store.dispatch({
	type: 'UPDATE_CONTENT_COLOR',
	color: 'orange'
})

