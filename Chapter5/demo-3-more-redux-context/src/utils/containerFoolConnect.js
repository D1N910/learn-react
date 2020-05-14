import React from 'react'
import PropTypes from 'prop-types'

// 高阶函数 用来封装容器组件生成傻瓜组件
function connect(mapStateToProps, mapDispatchToProps) {
	return function connectHOC(Component) {
		class Connect extends React.Component {
			constructor(props, context) {
				super(props, context);
				this.state = Object.assign({},
					mapStateToProps(context.store.getState()),
					mapDispatchToProps(context.store.dispatch)
				)
				this.onStoreChange = this.onStoreChange.bind(this)
			}

			componentDidMount() {
				this.context.store.subscribe(this.onStoreChange)
			}

			componentWillUnmount() {
				this.context.store.unsubscribe(this.onStoreChange)
			}

			onStoreChange() {
				const state = this.context.store.getState()
				this.setState(mapStateToProps(state))
			}

			render() {
				return <Component {...this.props} {...this.state} />
			}
		}
		Connect.contextTypes = {
			store: PropTypes.object
		}
		return Connect
	}
}

export default connect

