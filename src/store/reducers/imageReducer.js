import { createReducer } from 'redux-act';

import { setImageError, setIsLoading, setImage } from '../actions';
import { initialState } from '../initialState';

const { initialStateImage } = initialState;

export const imageReducer = createReducer(
	{
		[setIsLoading]: (state, payload) => ({
			...state,
			isLoading: payload,
		}),
		[setImage]: (state, payload) => ({
			...state,
			image: payload,
		}),
		[setImageError]: (state, payload) => ({
			...state,
			error: payload,
		}),
	},
	initialStateImage,
);
