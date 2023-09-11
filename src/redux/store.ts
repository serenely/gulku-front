import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/saga';
import rootReducer from './reducers/index';
import { logger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
export type RootState = ReturnType<typeof rootReducer>; 

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;
