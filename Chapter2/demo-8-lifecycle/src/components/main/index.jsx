import React from 'react'

// State 更新 - 时钟组件
export default class Main extends React.Component {
	constructor(props) {
		console.log('constructor')
		super(props);
		this.state = {
			clock: new Date()
		}
	}
	static getDerivedStateFromProps(props, state) {
		const hour = props.hour
		const nextClock = new Date(state.clock)
		nextClock.setHours(hour)
		console.log('getDerivedStateFromProps')
		return {
			clock: nextClock
		}
	}

	componentDidMount() {
		// console.log(a) // 用来触发报错
		console.log('componentDidMount')
		this.interval = setInterval(() => {
			this.setState({
				clock: new Date()
			})
		}, 5000)
	}


	shouldComponentUpdate() {
		console.log('shouldComponentUpdate')

		return true
	}

	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate')
		return 'hello'
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', snapshot)
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
		clearInterval(this.interval);
	}

	render() {
		return <div>
			当前时间: { this.state.clock.toLocaleTimeString() }
		</div>
  }
}

// State 的声明和使用
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: 'D1n910'
// 		}
// 	}

// 	render() {
// 		return (
// 			<div>你好 {this.state.name}</div>
//     )
//   }
// }
