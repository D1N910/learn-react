import {
	createStore,
	compose,
	applyMiddleware
} from 'redux';
import trunkMiddleware from 'redux-thunk'
import Reducer from './reducers/index';
import {
	createLogger
} from 'redux-logger'

// 自定义一个组件，用来在 action 中打上自己的名字和时间戳
const authorMiddleware = ({ getState }) => next => action => {
	action.author = 'd1n910';
	action.timestamp = new Date();
	console.log('action')
	return next(action)
}

const middlewares = [trunkMiddleware, authorMiddleware];

// 我们在这里区分一下生产环节和开发环境，只有在开发环境中使用 logger
if (process.env.NODE_ENV === 'development') {
	middlewares.push(createLogger())
}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(Reducer, composeEnhancer(applyMiddleware(...middlewares)));
