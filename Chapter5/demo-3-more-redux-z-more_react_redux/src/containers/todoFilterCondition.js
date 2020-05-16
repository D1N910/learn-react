import { connect } from 'react-redux'
import TodoFilterCondition from '../components/todoFilterCondition/index'
import TodoAction from '../actions/index'

// 数据
function mapStateToProps(state) {
	const { selectedType } = state

	return {
		selectedType,
		// 选项
		options: [
			{
				label: '全部',
				value: 'All'
			},
			{
				label: '已完成',
				value: 'DONE'
			},
			{
				label: '未完成',
				value: 'NO_DONE'
			}
		]
	}
}

// 绑定方法
function mapDispatchToProps(dispatch) {
	return {
		changeShowListType: e => {
			return dispatch(TodoAction.changeShowListType(e.target.value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterCondition)
