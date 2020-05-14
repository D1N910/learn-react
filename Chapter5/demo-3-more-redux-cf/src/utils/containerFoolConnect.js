import React from 'react'
import store from '../store/store'

// 高阶函数 用来封装容器组件生成傻瓜组件
function connect(mapStateToProps, mapDispatchToProps) {
	return function connectHOC(Component) {
		return class Connect extends React.Component {
			constructor(props) {
				super(props);
				this.state = Object.assign({},
					mapStateToProps(store.getState()),
					mapDispatchToProps(store.dispatch)
				)
				this.onStoreChange = this.onStoreChange.bind(this)
			}

			componentDidMount() {
				store.subscribe(this.onStoreChange)
			}

			componentWillUnmount() {
				store.unsubscribe(this.onStoreChange)
			}

			onStoreChange() {
				const state = store.getState()
				this.setState(mapStateToProps(state))
			}

			render() {
				return <Component {...this.props} {...this.state} />
			}
		}
	}
}

export default connect

