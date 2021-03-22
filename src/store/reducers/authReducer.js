import { createReducer } from 'redux-act';
import { initialState } from '../initialState';
const { initialStateAuth } = initialState;

export const authReducer = createReducer(
	{
		hi: (state, payload) => ({
			...state,
			isLoading: payload,
		}),
	},
	initialStateAuth,
);
