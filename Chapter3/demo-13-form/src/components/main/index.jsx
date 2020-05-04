import React from 'react'

// 非受控组件
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: '我是初始值',
			checkbox: true
		}
		this.inputRef = null
		this.checkboxRef = null
	}

	submit() {
		alert(this.inputRef.value)
		alert(this.checkboxRef.checked)
	}

  render() {
    return <div>
				<input type="text" defaultValue={this.state.msg} ref={ref => {this.inputRef = ref}} />
				<input type="checkbox" defaultChecked={this.state.checkbox} ref={ref => {this.checkboxRef = ref}} />
				<input type="button" onClick={this.submit.bind(this)} value="提交"/>
			<br/>
		</div>
	}
}

// 受控常用表单元素
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: '',
// 			gender: 'M',
// 			likeGame: false,
// 			likeDancer: false,
// 			likeRun: false,
// 			remark: '',
// 			pet: ''
// 		}
// 	}

// 	handleChange(e) {
// 		const target = e.target
// 		const name = target.name
// 		const value = target.type === 'checkbox' ? target.checked : target.value
// 		this.setState({
// 			[name]: value
// 		})
// 	}

//   render() {
//     return <div>
// 			{/* input text */}
// 			姓名：<input name="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
// 			<br/>

// 			{/* radio */}
// 			性别:
// 			<label>M</label><input name="gender" type="radio" value="M" checked={this.state.gender === 'M'} onChange={this.handleChange.bind(this)}/>
// 			<label>F</label><input name="gender" type="radio" value="F" checked={this.state.gender === 'F'} onChange={this.handleChange.bind(this)}/>
// 			<br/>

// 			{/* checkbox */}
// 			爱好：
// 			<label>游戏</label><input name="likeGame" type="checkbox" checked={this.state.likeGame} onChange={this.handleChange.bind(this)} />
// 			<label>跳舞</label><input name="likeDancer" type="checkbox" checked={this.state.likeDancer} onChange={this.handleChange.bind(this)} />
// 			<label>跑步</label><input name="likeRun" type="checkbox" checked={this.state.likeRun} onChange={this.handleChange.bind(this)} />
// 			<br/>

// 			{/* textarea */}
// 			备注：<textarea name="remark" value={this.state.remark} onChange={this.handleChange.bind(this)}></textarea>
// 			<br/>

// 			{/* select */}
// 			养的宠物：<select name="pet" value={this.state.pet} onChange={this.handleChange.bind(this)}>
// 				<option value="cat">cat</option>
// 				<option value="dog">dog</option>
// 				<option value="horse">horse</option>
// 			</select>
// 		</div>
// 	}
// }

// 受控组件
// export default class Main extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			value: '初始值'
// 		}
// 	}

// 	handleChange(e) {
// 		this.setState({
// 			value: e.target.value
// 		})
// 	}

//   render() {
//     return <input value={this.state.value} onChange={this.handleChange.bind(this)}/>
// 		// 只读
//     // return <input value={this.state.value} readOnly />
// 	}
// }
