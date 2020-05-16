// todo 子项目
const ActionsTypes = {
	DELETE_TODO: 'DELETE_TODO', // 删除
	TOOGLE_TODO: 'TOOGLE_TODO', // 切换状态
}
export default {
	ActionsTypes,
	actions: {
		deleteTodo: (id) => ({
			type: ActionsTypes.DELETE_TODO,
			payload: {
				id
			}
		}),
		toogleTodo: (id) => ({
			type: ActionsTypes.TOOGLE_TODO,
			payload: {
				id
			}
		})
	}
}
