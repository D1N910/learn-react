import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

import TodoList from './components/todolist/_components/container'

ReactDOM.render(
	<TodoList />,
  document.getElementById('app')
)
