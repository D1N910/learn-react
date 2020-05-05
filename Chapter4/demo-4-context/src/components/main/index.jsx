import React from 'react'

import './index.less'

const ThemeContext = React.createContext('light')

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: 'light'
		}
	}

	changeTheme(e) {
		this.setState({
			theme: e.currentTarget.value
		})
	}

	render() {
		return (
			<ThemeContext.Provider value={this.state.theme}>
				<Toolbar />
				<div>
					<label>darl:</label>
					<input type="radio" value="dark" onChange={this.changeTheme.bind(this)} checked={this.state.theme === 'dark'}/>
					<label>light:</label>
					<input type="radio" value="light" onChange={this.changeTheme.bind(this)} checked={this.state.theme === 'light'}/>
				</div>
			</ThemeContext.Provider>
		)
  }
}
class ThemedButton extends React.Component {
	static contextType = ThemeContext;

  render() {
    return <button className={this.context + "-button"}>ContextButton</button>
  }
}

function Toolbar(props) {
	return (
			<div>
					<ThemedButton />
			</div>
	);
}
