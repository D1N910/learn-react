import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

import Hello from './components/Hello'

ReactDOM.render(
    <Hello>
        <p>
            我的名字叫蛋糕
        </p>
    </Hello>,
    document.getElementById('app')
)
