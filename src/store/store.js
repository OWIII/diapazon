import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
