import { connect } from 'react-redux'
import TodoList from '../components/todolist/index.jsx'
import TodoAction from '../actions/index'

// 数据
function mapStateToProps(state) {
	const { list, selectedType } = state

	let todoList = []

	switch(selectedType) {
		case 'DONE':
			{
				todoList = list.filter(i => i.done)
			}
		break;
		case 'NO_DONE':
			{
				todoList = list.filter(i => !i.done)
			}
		break;
		default:
			{
				todoList = list
			}
		break
	}

	return {
		todoList
	}
}

// 绑定方法
function mapDispatchToProps(dispatch) {
	return {
		toogleTodo: id => dispatch(TodoAction.toogleTodo(id)),
		deleteTodo: id => dispatch(TodoAction.deleteTodo(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
