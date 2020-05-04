import React from 'react'

import Talker from '../talker'

// 父组件
export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			// 平台用户
			userList: [
				'老八',
				'药水哥',
				'周淑怡'
			]
		}
	}

	render() {
		return <div>
			{
				this.state.userList.map(i => {
					return <Talker key={i} userName={i} />
				})
			}
		</div>
  }
}
