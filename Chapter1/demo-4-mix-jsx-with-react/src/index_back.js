// 这里存放了 第一小部分的内容哦
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

class Hello extends React.Component {
    render() {
        // return  <div>
        //     <h1>Hello React</h1>
        //     <p style={{ color: 'red' }}>This is my firest React app.</p>
        // </div>

        // 混合 JavaScript 与 JSX
        // React.createElement
        // const { useName } = this.state
        // return useName ? <h1>Hello, {userName}</h1> : <h1>Hello, react</h1> // JSX 本身作为语句的一部分

        // props
        // return <p style={{ color: 'red' }}>This is my firest React app.</p>

        // children
        const name = 'react';
        const solgan = <h1 key='key1'>Hello, {name}</h1>
        return <div>{[solgan, <p key='key2' style={{ color: 'red' }}>This is my firest React app.</p>]}</div>
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('app')
)