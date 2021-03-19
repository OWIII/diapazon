import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../../common/api';
import { randomElementOfArray } from '../../../common/helpers';

import {
	getImageRequest,
	getImageRequestError,
	callImageRequest,
	setIsLoading,
} from '../../actions/randomImageActions';

function* fetchImage() {
	console.log('Вызов саги на загрузку img');
	yield put(setIsLoading(true));
	try {
		const image = yield call(api.fetchImage);
		console.log(image);

		yield put(getImageRequest(randomElementOfArray(image)));
	} catch (e) {
		yield put(getImageRequestError(e));
	} finally {
		yield put(setIsLoading(false));
	}
}

export function* getImageSaga() {
	yield takeEvery(callImageRequest, fetchImage);
}
