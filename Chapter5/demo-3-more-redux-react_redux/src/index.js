import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './store/store'

import './index.less'

import TodoList from './components/todolist/index'

ReactDOM.render(
	<Provider store={Store}>
		<TodoList />
	</Provider>,
  document.getElementById('app')
)
