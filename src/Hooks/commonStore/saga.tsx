import {USER_LIST, SET_USER_DATA} from './constants';
import {takeEvery, put, call} from 'redux-saga/effects';
import {fetchData} from './api';
import {getUserList} from './action';

function* userList(action) {
  try {
    const data = yield call(fetchData);
    yield put({type: SET_USER_DATA, data});
  } catch (error) {
    console.error('Error fetching user list:', error);
  }
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}
export default SagaData;
