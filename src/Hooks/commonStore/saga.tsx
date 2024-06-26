/* eslint-disable prettier/prettier */
import {USER_LIST, SET_USER_DATA} from './constants';
import {takeEvery, put, call} from 'redux-saga/effects';

interface SetUserData {
  type: typeof SET_USER_DATA;
  data: any;
}

function* userList() {
  const url = 'https://dummyjson.com/users';
  try {
    const response = yield call(fetch, url);
    const data: any = yield response.json();
    yield put<SetUserData>({type: SET_USER_DATA, data});
  } catch (error) {
    console.error('Error fetching user list:', error);
  }
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
