/**
 * 这里存放初始化数据，之后通过服务器返回
 */
module.exports = {
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
