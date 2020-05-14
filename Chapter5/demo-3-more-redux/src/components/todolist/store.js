import { createStore } from 'redux'
import Reducer from './reducer'

const initialState = {
	list: [
		{
			id: 0,
			text: '吃饭'
		},
		{
			id: 1,
			text: '读书'
		}
	],
	nextId: 2
}

export default createStore(Reducer, initialState)
