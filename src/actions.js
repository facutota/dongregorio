import { CHANGE_SEARCH_FIELD, REQUEST_CAMIONES_PENDING, 
	REQUEST_CAMIONES_SUCCESS, REQUEST_CAMIONES_FAILED } from './constants';

export const setSearchField = (text) => ({
	
	type: CHANGE_SEARCH_FIELD,
	payload: text
	
})

export const requestCamiones = () => (dispatch) => {
	dispatch({ type: REQUEST_CAMIONES_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => dispatch({ type: REQUEST_CAMIONES_SUCCESS, payload: data }))
			.catch(error => dispatch({ type: REQUEST_CAMIONES_FAILED, payload: error }))
}