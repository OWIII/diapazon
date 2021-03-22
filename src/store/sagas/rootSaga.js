import { fork, all } from 'redux-saga/effects';
import { getImageSaga } from './imageSagas';
import { authSaga } from './AuthSagas';

export default function* rootSaga() {
	yield all([getImageSaga, authSaga].map(fork));
}
