import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

import Main from './components/main'

import Events from './utils/Events'

global.$Events = new Events()

ReactDOM.render(
	<Main title="D1n910" />,
  document.getElementById('app')
)
