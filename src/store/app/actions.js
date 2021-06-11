import { action } from 'typesafe-actions'
import { ActionTypes } from './types'

const appActions = {
  saveOrigin: (payload) => action(ActionTypes.SAVE_ORIGIN, payload),

  saveDestination: (payload) => action(ActionTypes.SAVE_DESTINATION, payload),

  clearAddressInput: () => action(ActionTypes.CLEAR_ADDRESS_INPUT),

  getLinesRequest: () => action(ActionTypes.GET_LINES_REQUEST),

  getLinesSuccess: (data) => action(ActionTypes.GET_LINES_SUCCESS, data),

  getLinesFailure: (error) => action(ActionTypes.GET_LINES_FAILURE, error),

  getRoutesRequest: () => action(ActionTypes.GET_ROUTES_REQUEST),

  getRoutesSuccess: (data) => action(ActionTypes.GET_ROUTES_SUCCESS, data),

  getRoutesFailure: (error) => action(ActionTypes.GET_ROUTES_FAILURE, error),

  getStopsRequest: () => action(ActionTypes.GET_STOPS_REQUEST),

  getStopsSuccess: (data) => action(ActionTypes.GET_STOPS_SUCCESS, data),

  getStopsFailure: (error) => action(ActionTypes.GET_STOPS_FAILURE, error),

  getStopTimesRequest: (params) =>
    action(ActionTypes.GET_STOP_TIMES_REQUEST, params),

  getStopTimesSuccess: (data) =>
    action(ActionTypes.GET_STOP_TIMES_SUCCCESS, data),

  getStopTimesFailrue: (error) =>
    action(ActionTypes.GET_STOP_TIMES_FAILURE, error),

  setDirectionResponseRequest: (response) =>
    action(ActionTypes.SET_DIRECTION_RESPONSE, response),

  getStopLinesRequest: (params) =>
    action(ActionTypes.GET_STOPLINES_REQUEST, params),

  getStopLinesSuccess: (data) =>
    action(ActionTypes.GET_STOPLINES_SUCCESS, data),

  getStopLinesFailrue: (error) =>
    action(ActionTypes.GET_STOPLINES_FAILURE, error)
}

export default appActions
