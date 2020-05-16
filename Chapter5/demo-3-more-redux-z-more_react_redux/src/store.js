import { createStore } from 'redux';
import Reducer from './reducers/index';

/**
 * 在这里加上 window.__REDUX_DEVTOOLS_EXTENSION__() 就可以使用 Redux 的 DevTool 了
 */
export default createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
