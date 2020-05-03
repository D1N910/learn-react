import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

import Hello from './components/Hello'

ReactDOM.render(
    <Hello />,
    document.getElementById('app')
)
