/* eslint-disable prettier/prettier */
import {USER_LIST, SET_USER_DATA} from './constants';
// eslint-disable-next-line prettier/prettier
import {takeEvery, put} from 'redux-saga/effects';

interface SetUserData {
  type: typeof SET_USER_DATA;
  data: any
}

function* userList() {
  const url = 'https://dummyjson.com/users';
  let data = yield fetch(url);
  data = yield data.json();
  yield put<SetUserData>({ type: SET_USER_DATA , data});
  yield put({type: SET_USER_DATA, data});
  // console.warn("data in saga",data);
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}
export default SagaData;
