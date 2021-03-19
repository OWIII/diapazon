import { initialState } from '../initialState';

const { initialStateImage } = initialState;

export const imageReducer = (state = initialStateImage, action) => {
	switch (action.type) {
		case 'GET_IMAGE_REQUEST':
			return {
				...state,
				image: action.payload,
			};
		case 'GET_IMAGE_REQUEST_ERROR':
			return {
				...state,
				error: action.payload,
			};
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
