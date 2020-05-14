import React from 'react'
import PropTypes from 'prop-types'

import './index.less'

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// 获取初始值
			todoList: this.props.todoList
		}
		this.todoRef = React.createRef();
	}

	// 添加
	addTodo() {
		const value = this.todoRef.current.value
		this.props.addTodo(value)
		this.todoRef.current.value = ''
	}

	// 删除
	deleteTodo(id) {
		this.props.deleteTodo(id)
	}

	render() {
		return <div>
			{/* 标题 */}
			<h1>
				代办事项
			</h1>
			{/* 代办事项列表 */}
			<ul>
				{
					this.props.todoList.map(item => {
						return <li key={item.id}>
							<span>{item.text}</span> <button onClick={this.deleteTodo.bind(this, item.id)}>删除</button>
						</li>
					})
				}
			</ul>
			{/* 添加代办事件 */}
			<div>
				<input type="text" ref={this.todoRef}/>
				<button onClick={this.addTodo.bind(this)}>添加</button>
			</div>
		</div>
  }
}

TodoList.propTypes = {
	todoList: PropTypes.array,
	deleteTodo: PropTypes.func,
	addTodo: PropTypes.func
}
