import {USER_LIST, SET_USER_DATA} from './constants';
import {takeEvery, put, call} from 'redux-saga/effects';
import {fetchData} from './api';
import {getUserList} from './action';

const action = getUserList();
export interface GetUserListAction {
  type: typeof USER_LIST;
}

interface FetchDataResponse {
  type: any;
}

function* userList(action:GetUserListAction) {
  try {
    const data:FetchDataResponse = yield call(fetchData);
    yield put({type: SET_USER_DATA, data});
  } catch (error) {
    console.error('Error fetching user list:', error);
  }
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

export default SagaData;
