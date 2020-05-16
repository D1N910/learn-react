import todoInputAction from './todoInputAction'
import todoItemAction from './todoItemAction'
import todoFilterAction from './todoFilterAction'

/**
 * 定义所有 Action 类型
 * 一般我们用大写字母表示是一个敞亮
 * 这里类似于枚举值
 * 尽管它的值可以为任何类型，但是为了便于区分和比较，我们一般用字符串
 */
const ActionsTypes = {
	...todoInputAction.ActionsTypes,
	...todoItemAction.ActionsTypes,
	...todoFilterAction.ActionsTypes
}

export {
	ActionsTypes
}

export default {
	...todoInputAction.actions,
	...todoItemAction.actions,
	...todoFilterAction.actions
}
