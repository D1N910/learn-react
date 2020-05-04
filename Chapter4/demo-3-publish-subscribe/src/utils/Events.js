export default class Events {
	constructor() {
		// 缓存 被订阅的事件以及对应的回调函数
		this.cache = {}
	}

	/**
	 * 发布
	 * topic 发布的事件名称
	 * parameter 传递的参数
	 * scope 绑定执行的对象
	**/
	publish(topic, parameter, scope) {
		const thisTopic = this.cache[topic]

		// 如果有订阅
		if (thisTopic) {
			let i = thisTopic.length - 1
			for (i; i >=0; i -= 1) {
				// 执行订阅回调
				thisTopic[i].apply(scope || this, parameter || [])
			}
		}
	}

	/**
	 * 订阅
	 * topic 发布的事件名称
	 * callback 回调参数
	**/
	subscribe(topic, callback) {
		if (!this.cache[topic]) {
			this.cache[topic] = []
		}

		// 添加回调
		this.cache[topic].push(callback)

		// 可以方便用于取消订阅
		return [topic, callback]
	}

	/**
	 * 取消订阅
	 * handle [topic, callback]
	 * complety 是否把所有该同名事件订阅都取消
	**/
	unsubscribe(handle, complety) {
		const topic = handle[0];
		const callback = handle[1];
		const thisTopic = this.cache[topic]

		if (thisTopic) {
			if (complety) {
				delete this.cache[topic]
				return false
			}
			let i = thisTopic.length - 1
			for (i; i >= 0; i -= 1) {
				if (thisTopic[i] === callback) {
					this.cache[topic].splice(i)
				}
			}
		}
	}
}
