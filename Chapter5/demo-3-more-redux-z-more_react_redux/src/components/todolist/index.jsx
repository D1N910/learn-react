// 代办事项列表
import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../todoItem/index'

import './index.less'

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.todoRef = React.createRef();
	}

	render() {
		return <ul>
			{
				this.props.todoList.map(item => {
					return <TodoItem key={item.id} id={item.id} text={item.text} done={item.done} onDelete={() => {this.props.deleteTodo(item.id)}} onClick={() => {this.props.toogleTodo(item.id)}}/>
				})
			}
			{ this.props.todoList.length === 0 && <div
					className="no-data"
				>
					-- 无数据 --
				</div>
			}
		</ul>
  }
}

TodoList.propTypes = {
	todoList: PropTypes.array,
	deleteTodo: PropTypes.func,
	addTodo: PropTypes.func
}
