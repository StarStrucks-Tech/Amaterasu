import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
import CreateSagaMiddleware from 'redux-saga';
import SagaData from "./saga";
const sagaMiddleware=CreateSagaMiddleware();
const store=configureStore({
    reducer:rootreducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(SagaData);
export default store;