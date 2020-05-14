import connect from '../../../utils/containerFoolConnect'
import TodoList from '../index'
import TodoAction from '../action'

// 数据
function mapStateToProps(state) {
	const { list } = state

	return {
		todoList: list
	}
}

// 绑定方法
function mapDispatchToProps(dispatch) {
	return {
		addTodo: text => dispatch(TodoAction.addTodo(text)),
		deleteTodo: id => dispatch(TodoAction.deleteTodo(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
