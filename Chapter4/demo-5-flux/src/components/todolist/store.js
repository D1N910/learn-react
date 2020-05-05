import {
	ReduceStore
} from 'flux/utils';

import {
	ActionsTypes
} from './action';

import Dispatcher from './dispatcher';

/**
 * ReduceStore 是 Store 的一种实现，这里借鉴了 Redux 的纯函数的方式，我们之后会涉及
 */

class Store extends ReduceStore {
	constructor() {
		/**
		 * 绑定 Dispatcher
		 * 一个 Store 与一个 Dispatcher 绑定
		 */
		super(Dispatcher)
	}

	/**
	 *  在 Store 中，我们通过 state 变量来保存数据
	 * 这里定义它的初始值
	 */
	getInitialState() {
		return {
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
	}

	/**
	 * @return {*} 返回下一个状态
	 * @param {*} state 上一个状态
	 * @param {*} action 传入的action
	 *
	 * ReduceStore 中一定要有一个 reduce 方法
	 * 它应该是一个纯函数
	 * Dispatcher 派发的所有 action 都会到这里来
	 * 我们根据 action 的类型来改变我们的 state
	 */
	reduce(state, action) {
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
}

export default new Store()
