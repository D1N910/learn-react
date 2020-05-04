import React from 'react'
import PropTypes from 'prop-types'

// 函数式组件 访问 context
const Text = (props, context) => <p style={context}>{props.children}</p>
Text.contextTypes = {
  color: PropTypes.string
};

export default class Main extends React.Component {
	/**
	 * 想要传递 context，需要定义childContextTypes
	 * 而且因为 babel 转换问题，这种静态的写法是 ES7 的内容，所以要在配置 .babelrc 配置 stage-1
	*/

  static childContextTypes = {
    color: PropTypes.string
	}

	// 传递给子组件的 context
  getChildContext() {
    return {
      color: 'red'
    };
	}

  render() {
    return <Text>Hello World</Text>;
  }
}

// 函数式组件
// const Text = (props) => <p>{props.children}</p>

// export default class Main extends React.Component {
// 	render() {
// 		return <Text>你好，函数式组件</Text>
// 	}
// }

// 函数式组件 class
// class Text extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return <p>{this.props.children}</p>
// 	}
// }

// export default class Main extends React.Component {
// 	render() {
// 		return <Text>你好，函数式组件</Text>
// 	}
// }

// 方法2、通过回调 Refs 获取 DOM 节点
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.myRef = null
// 	}

// 	componentDidMount() {
// 		this.myRef.focus()
// 		this.myRef.value = '成功'
// 	}

// 	render() {
// 		return <input ref={ref => {this.myRef = ref}} />
// 	}
// }

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
