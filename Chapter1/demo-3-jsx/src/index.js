import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

class Hello extends React.Component {
    render() {
        return  <div>
            <h1>Hello React</h1>
            <p style={{ color: 'red' }}>This is my firest React app.</p>
        </div>
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('app')
)