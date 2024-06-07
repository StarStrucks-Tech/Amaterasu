
import { put, takeEvery } from "redux-saga/effects";
import {SET_USER_DATA, User_List} from './constants';

function* userList(){
    const url="https://dummyjson.com/users";
    let data=yield fetch(url);
    data=yield data.json();
    yield put({type:SET_USER_DATA,data})
}
function* SagaData(){

}

export default SagaData;