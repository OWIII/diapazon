import { createAction } from 'redux-act';

export const signIn = createAction('SIGN_IN');
export const signOut = createAction('SIGN_OUT');
export const setUserData = createAction('SET_USER_DATA');
export const signInError = createAction('SIGN_IN_ERROR');
export const setUserDataForm = createAction('SET_USER_DATA_FORM');
