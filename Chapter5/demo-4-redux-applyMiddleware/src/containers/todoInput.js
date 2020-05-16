// 输入框
import { connect } from 'react-redux'
import TodoInput from '../components/todoInput/index'
import TodoAction from '../actions/index'

// 数据
function mapStateToProps(state) {
	return {
		value: state.inputValue
	}
}

// 绑定方法
function mapDispatchToProps(dispatch) {
	return {
		addTodo: text => dispatch(TodoAction.addTodo(text)),
		changeInputValue: e => dispatch(TodoAction.changeInputValue(e.target.value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)
