import React from 'react'

// 兄弟组件传递数据
// 子组件
class Child extends React.Component {
	render() {
		return <button onClick={this.props.onClick}>{this.props.count}</button>
	}
}

// 父组件
export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			countA: 0,
			countB: 0,
		}
	}

	onClick(index) {
		if (index === 1) {
			this.setState((preState) => ({
				countB: preState.countB + 1
			}))
		} else {
			this.setState((preState) => ({
				countA: preState.countA + 1
			}))
		}
	}

	render() {
		return <div>
			<Child count={this.state.countA} onClick={this.onClick.bind(this, 1)}></Child>
			<Child count={this.state.countB} onClick={this.onClick.bind(this, 2)}></Child>
		</div>
  }
}

// // 兄弟组件传递数据
// // 子组件
// class Child extends React.Component {
// 	render() {
// 		return <button onClick={this.props.onClick}>{this.props.count}</button>
// 	}
// }

// // 父组件
// export default class Main extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			countA: 0,
// 			countB: 0,
// 		}
// 	}

// 	onClick(index) {
// 		if (index === 1) {
// 			this.setState((preState) => ({
// 				countB: preState.countB + 1
// 			}))
// 		} else {
// 			this.setState((preState) => ({
// 				countA: preState.countA + 1
// 			}))
// 		}
// 	}

// 	render() {
// 		return <div>
// 			<Child count={this.state.countA} onClick={this.onClick.bind(this, 1)}></Child>
// 			<Child count={this.state.countB} onClick={this.onClick.bind(this, 2)}></Child>
// 		</div>
//   }
// }


// // 在子组件挂载的时候调用父组件的方法，更新状态
// // 子组件
// class Child extends React.Component {
// 	componentDidMount() {
// 		// 执行父组件传递下来的方法
// 		this.props.report('子组件已经挂载好啦～')
// 	}
// 	render() {
// 		return <h1>Child</h1>
// 	}
// }

// // 父组件
// export default class Main extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			ifChildMount: '还没挂载好哦'
// 		}
// 		this.showLog = this.showLog.bind(this);
// 	}

// 	showLog(data) {
// 		console.log(data)
// 		this.setState({
// 			ifChildMount: data
// 		})
// 	}

// 	render() {
// 		return <div>
// 			{ this.state.ifChildMount }
// 			<Child report={this.showLog}></Child>
// 		</div>
//   }
// }

// // 在子组件挂载的时候调用父组件的方法
// // 子组件
// class Child extends React.Component {
// 	componentDidMount() {
// 		// 执行父组件传递下来的方法
// 		this.props.report('子组件已经挂载好啦～')
// 	}
// 	render() {
// 		return <h1>Child</h1>
// 	}
// }

// // 父组件
// export default class Main extends React.Component {

// 	constructor(props) {
// 		super(props);
// 	}

// 	showLog(data) {
// 		console.log(data)
// 	}

// 	render() {
// 		return <Child report={this.showLog}></Child>
//   }
// }
