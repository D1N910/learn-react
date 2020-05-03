import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

import Main from './components/main'

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showClock: true
		}
		this.props
	}

	componentDidCatch(error, info) {
    console.log('error', error, 'info', info);
  }

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			showClock: false
	// 		})
	// 	}, 3000)
	// }

	render() {
		return this.state.showClock ? <Main hour="16" /> : null
	}
}


ReactDOM.render(
	<Index />,
  document.getElementById('app')
)
