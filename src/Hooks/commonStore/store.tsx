/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// eslint-disable-next-line prettier/prettier
import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(SagaData);
export default store;
