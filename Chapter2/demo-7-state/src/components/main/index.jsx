import React from 'react'

// State 更新 - 时钟组件
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clock: new Date()
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				clock: new Date()
			})
		}, 1000)
	}

	componentWillUnmount() {
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
