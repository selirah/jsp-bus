import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApiGet } from '../../api/requests'
import appActions from './actions'
import { ActionTypes } from './types'

function* getLines() {
  try {
    const res = yield call(callApiGet, 'lines')
    yield put(appActions.getLinesSuccess(res.data))
  } catch (err) {
    yield put(appActions.getLinesFailure(err.response.data))
  }
}

function* getRoutes() {
  try {
    const res = yield call(callApiGet, `routes`)
    yield put(appActions.getRoutesSuccess(res.data))
  } catch (err) {
    yield put(appActions.getRoutesFailure(err.response.data))
  }
}

function* getStops() {
  try {
    const res = yield call(callApiGet, `stops`)
    yield put(appActions.getStopsSuccess(res.data))
  } catch (err) {
    yield put(appActions.getStopsFailure(err.response.data))
  }
}

function* getStopTimes({ payload }) {
  try {
    const res = yield call(
      callApiGet,
      `stop-times?sid=${payload.stopId}&rid=${payload.routeId}`
    )
    yield put(appActions.getStopTimesSuccess(res.data))
  } catch (err) {
    yield put(appActions.getStopTimesFailrue(err.response.data))
  }
}

function* getStopLines({ payload }) {
  try {
    const res = yield call(callApiGet, `stop-lines/${payload}`)
    yield put(appActions.getStopLinesSuccess(res.data))
  } catch (err) {
    yield put(appActions.getStopLinesFailrue(err.response.data))
  }
}

function* watchGetLines() {
  yield takeEvery(ActionTypes.GET_LINES_REQUEST, getLines)
}

function* watchGetRoutes() {
  yield takeEvery(ActionTypes.GET_ROUTES_REQUEST, getRoutes)
}

function* watchGetStops() {
  yield takeEvery(ActionTypes.GET_STOPS_REQUEST, getStops)
}

function* watchGetStopTimes() {
  yield takeEvery(ActionTypes.GET_STOP_TIMES_REQUEST, getStopTimes)
}

function* watchGetStopLines() {
  yield takeEvery(ActionTypes.GET_STOPLINES_REQUEST, getStopLines)
}

function* appSaga() {
  yield all([
    fork(watchGetLines),
    fork(watchGetRoutes),
    fork(watchGetStops),
    fork(watchGetStopTimes),
    fork(watchGetStopLines)
  ])
}

export default appSaga
