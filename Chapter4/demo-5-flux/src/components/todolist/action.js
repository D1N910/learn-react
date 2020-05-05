import Dispatcher from './dispatcher'

/**
 * 定义所有 Action 类型
 * 一般我们用大写字母表示是一个敞亮
 * 这里类似于枚举值
 * 尽管它的值可以为任何类型，但是为了便于区分和比较，我们一般用字符串
 */
const ActionsTypes = {
	ADD_TODO: 'ADD_TODO',
	DELETE_TODO: 'DELETE_TODO'
}

export {
	ActionsTypes
}

export default {
	addTodo(text) {
		Dispatcher.dispatch({
			type: ActionsTypes.ADD_TODO,
			payload: {
				text
			}
		})
	},

	deleteTodo(id) {
		Dispatcher.dispatch({
			type: ActionsTypes.DELETE_TODO,
			payload: {
				id
			}
		})
	}
}
