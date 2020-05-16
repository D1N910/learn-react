// 待办事项容器
import React from 'react'
// 输入框
import TodoInput from '../../containers/todoInput'
//过滤
import TodoFilterCondition from '../../containers/todoFilterCondition'
// 待办列表
import Todolist from '../../containers/todolist'

export default class TodoContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.loadInitData()
	}

	render() {
			return <div>
				{ this.props.loading ? '加载中' : <div>
						<TodoInput />
						<TodoFilterCondition />
						<Todolist />
					</div>
				}
		</div>
	}
}
