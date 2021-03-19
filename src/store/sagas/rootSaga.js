import { fork, all } from 'redux-saga/effects';
import { getImageSaga } from './imageSagas/getImageSaga';

export default function* rootSaga() {
	yield all([getImageSaga].map(fork));
}
