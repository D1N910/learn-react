
import {
	ActionsTypes
} from '../actions/index';
// 默认状态
const initialState = {
	list: [
		{
			id: 0,
			text: '看老八吃秘制小汉堡',
			done: false
		},
		{
			id: 1,
			text: '做一件自带“正道的光”的事情',
			done: false
		}
	],
	// 输入框输入值
	inputValue: '',
	nextId: 2,
	// 是否加载
	loading: false,
	// 选中类型, 全部：All、未完成：NO_DONE，已完成: DONE
	selectedType: 'All'
}
export default (state = initialState, action) => {
	const {
		type,
		payload
	} = action
	let result = {}
	switch(type) {
		// 开始加载
		case ActionsTypes.REQUEST_START:
			{
				result = {
					loading: true
				}
			}
		break
		// 加载完成
		case ActionsTypes.REQUEST_SUCCESS:
			{
				result = {
					loading: false
				}
			}
		break
		// 修改类型
		case ActionsTypes.CHANGE_SHOW_LIST_TYPE:
			{
				result = {
					selectedType: payload.selectedType
				}
			}
		break;
		// 修改输入值
		case ActionsTypes.Change_Input_Value:
			{
				result = {
					inputValue: payload.value
				}
			}
		break;
		// 添加
		case ActionsTypes.ADD_TODO:
			{
				const {
					list = [],
					inputValue
				} = state
				if (inputValue !== '') {
					// 为保证数据的纯净，我们都用拷贝的方式，而不直接改变原来的 state
					const nextList = list.concat([{
						id: state.nextId,
						text: inputValue,
						done: false
					}]);
					result = {
						list: nextList,
						nextId: state.nextId + 1,
						inputValue: ''
					}
				} else {
					alert('好兄弟，不能为空')
				}
			}
		break;
		// 删除
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
		// 切换状态
		case ActionsTypes.TOOGLE_TODO:
			{
				const {
					list = []
				} = state
				const nextList = list.concat([])
				nextList.forEach(item => {
					if (item.id === payload.id) {
						item.done = !item.done
					}
				})
				result = {
					list: nextList
				}
			}
		break;
		// 展示列表类型
		case ActionsTypes.CHANGE_SHOWLISTTYPE:
			{
				result = {
					type: payload.type
				}
			}
		break
	}
	return Object.assign({}, state, result)
}
