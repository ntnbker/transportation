// ------------------------------------
// Constants
// ------------------------------------
const REDUCER_NAME = 'BOOK_TRIP'
export const BOOK_TRIP_VIEW_DETAIL = `${REDUCER_NAME}_VIEW_DETAIL`
export const BOOK_TRIP_UPDATE_LIST = `${REDUCER_NAME}_UPDATE_LIST`
export const BOOK_TRIP_UPDATE_ITEM = `${REDUCER_NAME}_UPDATE_ITEM`
export const BOOK_TRIP_REMOVE_HIGHLIGHT = `${REDUCER_NAME}_REMOVE_HIGHLIGHT`
export const BOOK_TRIP_LOGIN_SUCCESS = `${REDUCER_NAME}_LOGIN_SUCCESS`
export const BOOK_TRIP_LOGOUT = `${REDUCER_NAME}_LOGOUT`

import { getBookList, getBookItem, updateBookItem, login, nextStop } from '../../../api/booking'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const viewDetail = (id) => ({
  type    : BOOK_TRIP_VIEW_DETAIL,
  payload : id
})
export const removeHighlight = (id) => ({
  type    : BOOK_TRIP_REMOVE_HIGHLIGHT,
  payload : id
})

export const updateStatus = (id, status) => {
  return (dispatch, getState) => {
    let bookItem = updateBookItem(id, { status })
    dispatch({
      type: BOOK_TRIP_UPDATE_ITEM,
      payload: {
        id,
        key: 'status',
        value: bookItem.status,
      }
    })
    let list = getBookList()
    dispatch({
      type: BOOK_TRIP_UPDATE_LIST,
      payload: list
    })
  }
}

export const triggerNextStop = (id) => {
  return (dispatch, getState) => {
    let device = nextStop(id)
    console.log('device', getState().bookTrip)
    dispatch({
      type: BOOK_TRIP_LOGIN_SUCCESS,
      payload: device
    })
    let list = getBookList()
    dispatch({
      type: BOOK_TRIP_UPDATE_LIST,
      payload: list
    })
  }
}

export const deviceLogin = (params) => {
  return (dispatch, getState) => {
    return login(params).then(device => {
      dispatch({
        type: BOOK_TRIP_LOGIN_SUCCESS,
        payload: device
      })
    })
  }
}

export const deviceLogout = () => ({
  type: BOOK_TRIP_LOGOUT
})

export const getList = () => {
  return (dispatch, getState) => {
    let list = getBookList()

    dispatch({
      type: BOOK_TRIP_UPDATE_LIST,
      payload: list
    })
  }
}

export const getDetail = (id) => {
  return (dipatch, getState) => {
    let bookItem = getBookItem(id)

    dipatch({
      type: BOOK_TRIP_VIEW_DETAIL,
      payload: bookItem
    })
  }
}

export const actions = {
  
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BOOK_TRIP_VIEW_DETAIL]    : (state, action) => {
    return {
      ...state, 
      viewItem: action.payload,
    }
  },
  [BOOK_TRIP_UPDATE_LIST] : (state, action) => ({
    ...state,
    list: action.payload
  }),
  [BOOK_TRIP_UPDATE_ITEM] : (state, { payload }) => ({
    ...state,
    device: state.device && {
      ...state.device,
      [payload.key]: payload.value
    },
    justUpdated: `${payload.id}-${Date.now()}` 
  }),
  [BOOK_TRIP_LOGIN_SUCCESS] : (state, { payload }) => ({
    ...state,
    device: payload,
    justUpdated: `${payload.id}-${Date.now()}` 
  }),
  [BOOK_TRIP_LOGOUT] : (state, action) => ({
    ...state,
    device: null
  }),
  [BOOK_TRIP_REMOVE_HIGHLIGHT] : (state, { payload }) => ({
    ...state,
    justUpdated: payload === state.justUpdated ? null : state.justUpdated
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: [],
  viewItem: null,
  device: null,
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
