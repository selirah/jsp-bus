import { all, fork } from 'redux-saga/effects'
import appSaga from './app/saga'

export function* rootSaga() {
  yield all([fork(appSaga)])
}
