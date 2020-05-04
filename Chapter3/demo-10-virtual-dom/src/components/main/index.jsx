import React from 'react'

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: Array.from({length: 1000}).map(_ => Math.random())
		}
	}

	componentDidUpdate() {
		console.timeEnd('react-dom');
	}

	render() {
		return <div>
			<h1>React DOM</h1>
			<button onClick={() => {
				console.time('react-dom');
				this.setState({
					data: this.state.data.sort()
				})
			}}>sort</button>
			<ul>
				{
					this.state.data.map((item, index) => {
						return <li key={`li_${index}`}>{item}</li>
					})
				}
			</ul>
		</div>
  }
}

export default Main
