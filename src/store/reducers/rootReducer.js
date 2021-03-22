import { combineReducers } from 'redux';

import { imageReducer } from './imageReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
	image: imageReducer,
	auth: authReducer,
});
