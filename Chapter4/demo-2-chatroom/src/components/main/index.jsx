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
			],
			// 聊天内容
			chatRecord: []
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(msg, userName) {
		const chatRecord = this.state.chatRecord
		chatRecord.push({
			id: chatRecord.length,
			msg: msg,
			userName: userName,
			time: new Date()
		})
		this.setState({
			chatRecord: chatRecord
		})
	}

	render() {
		return <div>
			{
				this.state.userList.map(i => {
					return <Talker key={i} userName={i} chatRecord={this.state.chatRecord} handleSubmit={this.handleSubmit} />
				})
			}
		</div>
  }
}
