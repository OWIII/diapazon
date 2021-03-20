import { createAction } from 'redux-act';

export const setIsLoading = createAction('SET_IS_LOADING');
export const setImage = createAction('SET_IMAGE');
export const setImageError = createAction('SET_IMAGE_ERROR');
export const getImage = createAction('GET_IMAGE');
