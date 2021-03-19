import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	compose(applyMiddleware(logger), applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
