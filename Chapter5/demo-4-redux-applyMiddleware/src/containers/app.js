import { connect } from 'react-redux'
import App from '../components/app/index'
import TodoAction from '../actions/index'

function mapStateToProps(state) {
	return state
}
function mapDispatchToProps(dispatch) {
	return {
		loadInitData: () => dispatch(TodoAction.loadInitData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

