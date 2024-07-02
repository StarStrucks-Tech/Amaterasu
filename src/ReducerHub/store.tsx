/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: true,
      serializableCheck: true,
      actionCreatorCheck: true,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(SagaData);
export default store;
