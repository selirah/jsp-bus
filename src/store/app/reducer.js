import { ActionTypes } from './types'

const initialState = {
  origin: null,
  destination: null,
  error: undefined,
  loadingLines: false,
  loadingRoutes: false,
  loadingStops: false,
  lines: [],
  routes: [],
  stops: [],
  directionResponse: null,
  times: [],
  loadingTimes: false,
  stopLines: [],
  loadingStopLines: false
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SAVE_ORIGIN:
      return {
        ...state,
        origin: action.payload
      }

    case ActionTypes.SAVE_DESTINATION:
      return {
        ...state,
        destination: action.payload
      }

    case ActionTypes.CLEAR_ADDRESS_INPUT:
      return {
        ...state,
        origin: null,
        destination: null
      }

    case ActionTypes.GET_LINES_REQUEST:
      return {
        ...state,
        loadingLines: true
      }

    case ActionTypes.GET_LINES_SUCCESS:
      return {
        ...state,
        loadingLines: false,
        lines: action.payload
      }

    case ActionTypes.GET_LINES_FAILURE:
      return {
        ...state,
        loadingLines: false,
        error: action.payload
      }

    case ActionTypes.GET_ROUTES_REQUEST:
      return {
        ...state,
        loadingRoutes: true
      }

    case ActionTypes.GET_ROUTES_SUCCESS:
      return {
        ...state,
        loadingRoutes: false,
        routes: action.payload
      }

    case ActionTypes.GET_ROUTES_FAILURE:
      return {
        ...state,
        loadingRoutes: false,
        error: action.payload
      }

    case ActionTypes.GET_STOPS_REQUEST:
      return {
        ...state,
        loadingStops: true
      }

    case ActionTypes.GET_STOPS_SUCCESS:
      return {
        ...state,
        loadingStops: false,
        stops: action.payload
      }

    case ActionTypes.GET_STOPS_FAILURE:
      return {
        ...state,
        loadingStops: false,
        error: action.payload
      }

    case ActionTypes.SET_DIRECTION_RESPONSE:
      return {
        ...state,
        directionResponse: action.payload
      }

    case ActionTypes.GET_STOP_TIMES_REQUEST:
      return {
        ...state,
        loadingTimes: true
      }

    case ActionTypes.GET_STOP_TIMES_SUCCCESS:
      return {
        ...state,
        loadingTimes: false,
        times: action.payload
      }

    case ActionTypes.GET_STOP_TIMES_FAILURE:
      return {
        ...state,
        loadingTimes: false,
        error: action.payload
      }

    case ActionTypes.GET_STOPLINES_REQUEST:
      return {
        ...state,
        loadingStopLines: true
      }

    case ActionTypes.GET_STOPLINES_SUCCESS:
      return {
        ...state,
        loadingStopLines: false,
        stopLines: action.payload
      }

    case ActionTypes.GET_STOPLINES_FAILURE:
      return {
        ...state,
        loadingStopLines: false,
        error: action.payload
      }
    default:
      return state
  }
}
