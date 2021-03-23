import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootSaga } from './sagas';
import { loadState, saveState } from '../common/helpers';
import throttle from 'lodash/throttle';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
const persistedState = loadState();

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(
	rootReducer,
	persistedState,
	compose(applyMiddleware(...middlewares)),
);

store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}, 1000),
);

sagaMiddleware.run(rootSaga);
