import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../../common/api';
import { randomElementOfArray } from '../../../common/helpers';
import { CALL_IMAGE_REQUEST } from '../../actions/randomImageActions';

import {
	setImageRequest,
	setImageRequestError,
	setIsLoading,
} from '../../actions/randomImageActions';

function* fetchImage() {
	try {
		yield put(setIsLoading(true));
		const {
			data: { data },
		} = yield call(api.fetchImage);

		yield put(setImageRequest(randomElementOfArray(data)));
	} catch (e) {
		yield put(setImageRequestError(e));
	} finally {
		yield put(setIsLoading(false));
	}
}

export function* getImageSaga() {
	yield takeEvery(CALL_IMAGE_REQUEST, fetchImage);
}
