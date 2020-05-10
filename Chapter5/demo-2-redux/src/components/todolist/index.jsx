import React from 'react'

import TodoStore from './store'
import Action from './action'


import './index.less'

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// 获取初始值
			todoList: TodoStore.getState().list
		}
		this.todoRef = React.createRef();
		this.onStoreChange = this.onStoreChange.bind(this)
	}

	componentDidMount() {
		// 在组件挂载后绑定监听函数，它会返回一个函数，这个函数在调用后会移除监听
		TodoStore.subscribe(this.onStoreChange)
	}

	componentWillUnmount() {
		// 组件卸载前前移除监听
		TodoStore.unsubscribe(this.onStoreChange)
	}

	// 添加
	addTodo() {
		const value = this.todoRef.current.value
		TodoStore.dispatch(Action.addTodo(value))
		this.todoRef.current.value = ''
	}

	// 删除
	deleteTodo(id) {
		TodoStore.dispatch(Action.deleteTodo(id))
	}

	/**
	 * 每次 Store 更新之后我们都需要重设组件的 state
	 */
	onStoreChange() {
		this.setState({
			todoList: TodoStore.getState().list
		});
	}

	// 修改代办事项状态
	handleChangeCheckbox(id, checked) {
		console.log('id', id, 'checked', checked)
		this.setState((preState) => {
			preState.todoList.forEach(item => {
				if (item.id === id) {
					item.checked = !checked
				}
			})
			return {
				todoList: preState.todoList
			}
		})
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
					this.state.todoList.map(item => {
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
