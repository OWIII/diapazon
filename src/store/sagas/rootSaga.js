import { fork, all } from 'redux-saga/effects';
import { getImageSaga } from './imageSagas';
import { authSaga, signOutSaga } from './AuthSagas';

export default function* rootSaga() {
	yield all([getImageSaga, authSaga, signOutSaga].map(fork));
}
