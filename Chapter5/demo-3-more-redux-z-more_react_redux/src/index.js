import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './store'

import './index.less'

import App from './components/app/index'

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
  document.getElementById('app')
)
