
import {
	ActionsTypes
} from './action';
// 默认状态
const initialState = {
	list: [
		{
			id: 0,
			text: '吃饭'
		},
		{
			id: 1,
			text: '读书'
		}
	],
	nextId: 2
}
export default (state = initialState, action) => {
	const {
		type,
		payload
	} = action
	let result = {}
	switch(type) {
		case ActionsTypes.ADD_TODO:
			{
				const {
					list = []
				} = state
				// 为保证数据的纯净，我们都用拷贝的方式，而不直接改变原来的 state
				const nextList = list.concat([{
					id: state.nextId,
					text: payload.text
				}]);
				result = {
					list: nextList,
					nextId: state.nextId + 1
				}
			}
		break;
		case ActionsTypes.DELETE_TODO:
			{
				const {
					list = []
				} = state
				const nextList = list.filter(item => item.id !== payload.id)
				result = {
					list: nextList
				}
			}
		break;
	}
	return Object.assign({}, state, result)
}
