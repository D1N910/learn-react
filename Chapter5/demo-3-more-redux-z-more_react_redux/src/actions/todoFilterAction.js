// todo 过滤
const ActionsTypes = {
	CHANGE_SHOW_LIST_TYPE: 'CHANGE_SHOW_LIST_TYPE', // 修改过滤器状态
}
export default {
	ActionsTypes,
	actions: {
		changeShowListType: (selectedType) => ({
			type: ActionsTypes.CHANGE_SHOW_LIST_TYPE,
			payload: {
				selectedType
			}
		})
	}
}
