// todoList 输入框
const ActionsTypes = {
	ADD_TODO: 'ADD_TODO',
	Change_Input_Value: 'Change_Input_Value'
}
export default {
	ActionsTypes,
	actions: {
		addTodo: () => ({
			type: ActionsTypes.ADD_TODO
		}),
		changeInputValue: (value) => ({
			type: ActionsTypes.Change_Input_Value,
			payload: {
				value
			}
		})
	}
}
