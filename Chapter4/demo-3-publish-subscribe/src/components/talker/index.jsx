import React from 'react';

import './index.less';

export default class Talker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// 本次讲的内容
			msg: ''
		}
	}

	handleChange(e) {
		this.setState({
			msg: e.target.value
		})
	}

	handleSubmit() {
		// 要传递的消息
		const msg = this.state.msg

		// 发送消息
		this.props.handleSubmit(msg, this.props.userName)

		// 清空输入内容
		this.setState({
			msg: ''
		})
	}

	render() {
		return <div
			className="talker"
		>
			{/* 聊天记录 */}
			<div
				className="chat-record"
			>
				{
					this.props.chatRecord.map((i) => {
						 return <div key={i.id}>
							{/* 发表用户 和 时间 */}
							<div className="chat-record__title">{i.userName}({i.time.toLocaleTimeString()})</div>
							<div className="chat-record__msg">{i.msg}</div>
						</div>
					})
				}
			</div>
			<div>
				{/* 登录用户 */}
				{ this.props.userName }:
				{/* 输入框 */}
				<input type="text" value={this.state.msg} onChange={this.handleChange.bind(this)} />
				{/* 发送按钮 */}
				<button onClick={this.handleSubmit.bind(this)}>发送</button>
			</div>
		</div>
	}
}
