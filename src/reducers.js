import { CHANGE_SEARCH_FIELD, REQUEST_CAMIONES_PENDING, 
	REQUEST_CAMIONES_SUCCESS, REQUEST_CAMIONES_FAILED } from './constants';

const initialStateSearch = {
	searchField: ''
}

export const searchCamiones = (state=initialStateSearch, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});

		default: 
			return state;

	}
}


const initialStateCamiones = {
	isPending: false,
	camiones: [],
	error: ''
}


export const requestCamiones = (state=initialStateCamiones, action={}) => {
	switch(action.type) {
		case REQUEST_CAMIONES_PENDING:
			return Object.assign({}, state, { isPending: true })
		
		case REQUEST_CAMIONES_SUCCESS:
			return Object.assign({}, state, { camiones: action.payload, isPending: false })

		case REQUEST_CAMIONES_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })

		default:
			return state;
	}
}