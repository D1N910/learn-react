import React from 'react'
import PropTypes from 'prop-types'

import './index.less'

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className="todo-input-container">
				{/* 添加代办事件 */}
			<input
				className="todo-input"
				type="text"
				value={this.props.value}
				onChange={this.props.changeInputValue.bind(this)}
				placeholder="输入待办事件"
				onKeyPress={e => {
						if (e.key === 'Enter') {
							this.props.addTodo()
						}
					}
				}
			/>
			<button className="todo-input-btn"  onClick={this.props.addTodo}>添加</button>
		</div>
  }
}

TodoList.propTypes = {
	addTodo: PropTypes.func,
	value: PropTypes.string
}
