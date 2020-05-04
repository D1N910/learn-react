import React from 'react'

// 方法2、通过回调 Refs 获取 DOM 节点
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = null
	}

	componentDidMount() {
		this.myRef.focus()
		this.myRef.value = '成功'
	}

	render() {
		return <input ref={ref => {this.myRef = ref}} />
	}
}

// 方法1、使用 React.createRef & ref.current 来定义并获取 Refs
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.myRef = React.createRef()
// 	}

// 	componentDidMount() {
// 		this.myRef.current.focus()
// 		this.myRef.current.value = '成功'
// 	}

// 	render() {
// 		return <input ref={this.myRef} />
// 	}
// }
