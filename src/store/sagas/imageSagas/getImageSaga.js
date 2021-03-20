import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../../common';
import { randomElementOfArray } from '../../../common';
import { getImage, setImageError, setIsLoading, setImage } from '../../actions';

function* fetchImage() {
	try {
		yield put(setIsLoading(true));
		const {
			data: { data },
		} = yield call(api.fetchImage);

		yield put(setImage(randomElementOfArray(data)));
	} catch (e) {
		yield put(setImageError(e));
	} finally {
		yield put(setIsLoading(false));
	}
}

export function* getImageSaga() {
	yield takeEvery(getImage.getType(), fetchImage);
}
