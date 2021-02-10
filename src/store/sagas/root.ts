import { all, takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from '../../types/enums';
import api from '../../services/api';
//@ts-ignore
import { store } from 'react-notifications-component';
import { IAction, IErrors } from '../../types/types';
function* fetchUsers({ payload }: IAction<string>) {
   try {
      yield put({ type: ACTION_TYPES.ADD_TO_HISTORY, payload });
      yield put({ type: ACTION_TYPES.FETCH_REPOS_START });
      const { data } = yield call(api.getUsers, payload);
      yield put({
         type: ACTION_TYPES.FETCH_REPOS_SUCCESS,
         payload: data.items,
      });
   } catch (err) {
      if (err.response) {
         yield put({
            type: ACTION_TYPES.FETCH_REPOS_FAILURE,
            payload: err.response.data,
         });
      } else {
         console.log('Server Error', err.toString());
      }
   }
}
function* SagasErrorHandler({ payload }: IAction<IErrors>) {
   store.addNotification({
      title: 'Wonderful! Error!',
      message: payload?.message,
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      dismiss: {
         duration: 3000,
         onScreen: true,
      },
   });
}
function* watchError() {
   yield takeLatest([ACTION_TYPES.FETCH_REPOS_FAILURE], SagasErrorHandler);
}
function* watchUserRequest() {
   yield takeEvery(ACTION_TYPES.FETCH_REPOS, fetchUsers);
}
export default function* rootSaga() {
   yield all([watchUserRequest(), watchError()]);
}
