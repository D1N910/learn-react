import React from 'react'

// [资料] React 合成事件 - 共同使用原生事件与合成事件的 Demo
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.buttonRef = React.createRef()
	}

	componentDidMount() {
		this.buttonRef.current.addEventListener('click', (e) => {
			console.log('DOM Handle Click', e)
			e.stopPropagation()
		}, false)
	}

	showLog(e) {
		console.log('React Handle Click', e)
	}

  render() {
    return <button ref={this.buttonRef} onClick={this.showLog.bind(this)}>按钮</button>;
  }
}

// [资料] React 合成事件 - 验证 event 的属性无法被异步访问
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			msg: '点击了按钮'
// 		}
// 	}

// 	showLog(a, b, c, event) {
// 		console.log('a', a, ', b', b, ', c', c)
// 		console.log('event', event)
// 		console.log('showLog')
// 		setTimeout(() => {
// 			console.log('event', event)
// 		}, 100);
// 	}

//   render() {
//     return <button onClick={(event) => {
// 			this.showLog(1, 2, 3, event)
// 		}}>按钮</button>;
//   }
// }


// 箭头函数 传递参数
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			msg: '点击了按钮'
// 		}
// 	}

// 	showLog(a, b, c, event) {
// 		console.log('a', a, ', b', b, ', c', c)
// 		console.log('event', event)
// 		console.log('showLog')
// 	}

//   render() {
//     return <button onClick={(event) => {
// 			this.showLog(1, 2, 3, event)
// 		}}>按钮</button>;
//   }
// }

// bind绑定 传递参数
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			msg: '点击了按钮'
// 		}
// 		// this.showLog = this.showLog.bind(this)
// 	}

// 	showLog(a, b, c, event) {
// 		console.log('a', a, ', b', b, ', c', c)
// 		console.log('event', event)
// 		console.log('showLog')
// 	}

//   render() {
//     return <button onClick={this.showLog.bind(this, 1, 2, 3)}>按钮</button>;
//   }
// }


// bind 绑定
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			msg: '点击了按钮'
// 		}
// 		this.showLog = this.showLog.bind(this)
// 	}
// 	showLog() {
// 		console.log(this.state.msg)
// 	}

//   render() {
//     return <button onClick={this.showLog}>按钮</button>;
//   }
// }

// 箭头函数绑定
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			msg: '点击了按钮'
// 		}
// 	}

// 	showLog() {
// 		console.log(this.state.msg)
// 	}

//   render() {
//     return <button onClick={e => {
// 			this.showLog()
// 		}}>按钮</button>;
//   }
// }
