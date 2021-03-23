import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as firebase from 'firebase';

import { setUserData, signInError, signIn, signOut } from '../../actions';

function* authFirebase() {
	const selectAllState = (state) => state;
	const {
		auth: { email, password },
	} = yield select(selectAllState);

	yield put(signInError({ error: false, textError: '' }));

	try {
		const auth = firebase.default.auth();
		const data = yield call([auth, auth.signInWithEmailAndPassword], email, password);

		yield put(setUserData({ isLogged: true, data }));
	} catch (error) {
		yield put(signInError({ error: true, textError: error.message }));
	} finally {
	}
}

function* signOutFirebase(action) {
	try {
		const history = action.payload;
		const auth = firebase.default.auth();

		yield call([auth, auth.signOut]);
		yield put(setUserData({ isLogged: false, data: null }));

		history.push('/auth');
	} catch (error) {
		yield put(signInError({ error: true, textError: error.message }));
	} finally {
	}
}

export function* authSaga() {
	yield takeEvery(signIn.getType(), authFirebase);
}

export function* signOutSaga() {
	yield takeEvery(signOut.getType(), signOutFirebase);
}
