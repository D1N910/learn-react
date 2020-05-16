import axios from 'axios';

const ActionsTypes = {
	REQUEST_START: 'GET_CONFIG/REQUEST_START',
	REQUEST_SUCCESS: 'GET_CONFIG/REQUEST_SUCCESS',
	REQUEST_FAILURE: 'GET_CONFIG/REQUEST_FAILURE'
}

const requestStart = () => ({
	type: ActionsTypes.REQUEST_START
})

const requestSuccess = (result) => ({
	type: ActionsTypes.REQUEST_SUCCESS,
	payload: { result }
})

const requestFailure = (error) => ({
	type: ActionsTypes.REQUEST_FAILURE,
	payload: { error }
})

const URL = '/getConfig'

export default {
	ActionsTypes,
	actions: {
    loadInitData: () => async dispatch => {
			dispatch(requestStart());
			try {
					const res = await axios.get(URL);
					dispatch(requestSuccess(res.data));
			} catch (error) {
					dispatch(requestFailure(error));
			}
		}
	}
}
