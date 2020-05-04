import React from 'react'

// 箭头函数 传递参数
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '点击了按钮'
		}
		// this.showLog = this.showLog.bind(this)
	}

	showLog(a, b, c, event) {
		console.log('a', a, ', b', b, ', c', c)
		console.log('event', event)
		console.log('showLog')
	}

  render() {
    return <button onClick={(event) => {
			this.showLog(1, 2, 3, event)
		}}>按钮</button>;
  }
}

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
