import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Store from './store/store'

import './index.less'

import TodoList from './components/todolist/index'

class Provider extends React.Component {
		getChildContext() {
			return {
				store: this.props.store
			}
		}

		render() {
			return this.props.children
		}
}
Provider.childContextTypes = {
	store: PropTypes.object
}

ReactDOM.render(
	<Provider store={Store}>
		<TodoList />
	</Provider>,
  document.getElementById('app')
)
