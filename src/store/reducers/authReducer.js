import { createReducer } from 'redux-act';

import { initialState } from '../initialState';
import { setUserData, setUserDataForm, signInError } from '../actions';

const { initialStateAuth } = initialState;

export const authReducer = createReducer(
	{
		[setUserData]: (state, payload) => ({
			...state,
			isLogged: payload.isLogged,
			data: payload.data,
		}),
		[signInError]: (state, payload) => ({
			...state,
			error: payload.error,
			textError: payload.textError,
		}),
		[setUserDataForm]: (state, payload) => ({
			...state,
			email: payload.email,
			password: payload.password,
		}),
	},
	initialStateAuth,
);
